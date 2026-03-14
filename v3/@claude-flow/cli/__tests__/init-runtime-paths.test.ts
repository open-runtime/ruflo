/**
 * Regression tests for init/bootstrap/generator runtime path migration.
 * Verifies .claude/ruflo is used as canonical project runtime directory.
 * No legacy runtime-dir fallback in runtime path usage.
 */

import { describe, expect, it, vi, beforeEach } from 'vitest';
import * as path from 'path';
import * as fs from 'fs';
import * as runtimePaths from '../src/utils/runtime-paths.js';
import {
  PROJECT_RUNTIME_DIR,
  displayProjectRuntimePath,
  joinProjectRuntimePath,
  getProjectRuntimeDir,
} from '../src/utils/runtime-paths.js';
import { generateStatuslineScript } from '../src/init/statusline-generator.js';
import { initCommand } from '../src/commands/init.js';
import type { CommandContext } from '../src/types.js';

const legacyRuntimeDir = ['.claude', 'flow'].join('-');

vi.mock('fs', () => ({
  existsSync: vi.fn(),
  mkdirSync: vi.fn(),
  readFileSync: vi.fn(),
  writeFileSync: vi.fn(),
}));

describe('init runtime paths', () => {
  describe('runtime-paths helper', () => {
    it('PROJECT_RUNTIME_DIR resolves to .claude/ruflo', () => {
      expect(PROJECT_RUNTIME_DIR).toContain('.claude');
      expect(PROJECT_RUNTIME_DIR).toContain('ruflo');
      expect(path.normalize(PROJECT_RUNTIME_DIR)).toBe(path.join('.claude', 'ruflo'));
    });

    it('displayProjectRuntimePath returns canonical display path', () => {
      expect(displayProjectRuntimePath()).toBe('.claude/ruflo');
      expect(displayProjectRuntimePath('config.yaml')).toBe('.claude/ruflo/config.yaml');
      expect(displayProjectRuntimePath('metrics', 'v3-progress.json')).toBe(
        '.claude/ruflo/metrics/v3-progress.json'
      );
    });

    it('joinProjectRuntimePath joins base dir with runtime segments', () => {
      const base = '/tmp/project';
      expect(joinProjectRuntimePath(base, 'config.yaml')).toBe(
        path.join(base, '.claude', 'ruflo', 'config.yaml')
      );
      expect(joinProjectRuntimePath(base, 'metrics', 'v3-progress.json')).toBe(
        path.join(base, '.claude', 'ruflo', 'metrics', 'v3-progress.json')
      );
    });

    it('getProjectRuntimeDir returns project runtime directory', () => {
      const base = '/home/user/proj';
      expect(getProjectRuntimeDir(base)).toBe(path.join(base, '.claude', 'ruflo'));
    });

    it('exposes only the canonical runtime helpers', () => {
      expect('LEGACY_PROJECT_RUNTIME_DIR' in runtimePaths).toBe(false);
      expect('joinLegacyProjectRuntimePath' in runtimePaths).toBe(false);
      expect('PROJECT_RUNTIME_DIR' in runtimePaths).toBe(true);
      expect('joinProjectRuntimePath' in runtimePaths).toBe(true);
    });
  });

  describe('statusline-generator runtime paths', () => {
    it('generated statusline script uses only the canonical runtime dir', () => {
      const script = generateStatuslineScript({
        runtime: { maxAgents: 15 },
        statusline: { enabled: true },
      } as any);
      expect(script).toContain("path.join(CWD, '.claude', 'ruflo'");
      expect(script).toContain("path.join(CWD, '.claude', 'ruflo', 'sessions')");
      expect(script).toContain("path.join(CWD, '.claude', 'ruflo', 'security')");
      expect(script).not.toContain(legacyRuntimeDir);
    });
  });

  describe('init check (no legacy runtime fallback)', () => {
    const cwd = '/test/project';

    beforeEach(() => {
      vi.mocked(fs.existsSync).mockImplementation((p: fs.PathLike) => {
        const s = String(p);
        if (s.includes(legacyRuntimeDir) && s.includes('config.yaml')) return true;
        return false;
      });
    });

    it('does not treat the legacy runtime dir as initialized', async () => {
      const checkCmd = initCommand.subcommands?.find((c) => c.name === 'check');
      expect(checkCmd).toBeDefined();

      const ctx: CommandContext = {
        args: [],
        flags: { format: undefined, _: [] },
        cwd,
        interactive: false,
      };

      const result = await checkCmd!.action!(ctx);

      expect(result.success).toBe(true);
      expect(result.data).toHaveProperty('claudeFlow', false);
      expect(result.data).toHaveProperty('initialized', false);
    });
  });
});
