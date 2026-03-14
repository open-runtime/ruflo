/**
 * Config Loading Integration Tests
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mkdtemp, rm, writeFile } from 'fs/promises';
import { join } from 'path';
import { tmpdir } from 'os';
import { loadConfig as loadSystemConfig } from '@claude-flow/shared';
import { CLI } from '../src/index.js';

describe('Config Loading', () => {
  let tempDir: string;
  const originalCwd = process.cwd();

  beforeEach(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'cli-config-test-'));
    process.chdir(tempDir);
  });

  afterEach(async () => {
    process.chdir(originalCwd);
    await rm(tempDir, { recursive: true, force: true });
  });

  it('should load config from file when specified', async () => {
    const configPath = join(tempDir, 'ruflo@claude-flow.config.json');
    const config = {
      orchestrator: {
        session: {},
        health: {},
        lifecycle: {
          maxConcurrentAgents: 10,
        },
      },
      swarm: {
        topology: 'hierarchical-mesh',
        maxAgents: 15,
        autoScale: {
          enabled: true,
          maxAgents: 15,
        },
        coordination: {
          consensusRequired: true,
          retryPolicy: {},
        },
      },
      memory: {
        type: 'hybrid',
      },
      mcp: {
        transport: {
          type: 'stdio',
        },
        capabilities: {
          tools: true,
          resources: true,
          prompts: true,
          logging: true,
        },
      },
    };

    await writeFile(configPath, JSON.stringify(config, null, 2));

    const loaded = await loadSystemConfig();
    expect(loaded.source).toBe('file');
    expect(loaded.path).toContain('/cli-config-test-');
    expect(loaded.path).toContain('/ruflo@claude-flow.config.json');
  });

  it('should handle missing config file gracefully', async () => {
    const cli = new CLI();

    // Should not throw when config file doesn't exist
    expect(cli).toBeDefined();
  });

  it('should handle invalid config file gracefully', async () => {
    const configPath = join(tempDir, 'ruflo@claude-flow.config.json');
    await writeFile(configPath, '{ invalid json }');

    const cli = new CLI();

    // Should not throw when config file is invalid
    expect(cli).toBeDefined();
  });
});
