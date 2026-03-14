import { beforeEach, describe, expect, it, vi } from 'vitest';

const fsMocks = vi.hoisted(() => ({
  mkdirSync: vi.fn(),
  existsSync: vi.fn(() => false),
  readFileSync: vi.fn(() => '{"claims": []}'),
  writeFileSync: vi.fn(),
}));

vi.mock('fs', () => fsMocks);

vi.mock('child_process', () => ({
  execFileSync: vi.fn(() => ''),
}));

import { ClaimService } from '../src/services/claim-service.js';

describe('Runtime layout', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    fsMocks.existsSync.mockReturnValue(false);
    fsMocks.readFileSync.mockReturnValue('{"claims": []}');
  });

  it('stores claim service state under .claude/claude-flow', async () => {
    const service = new ClaimService('/repo');

    await service.initialize();

    expect(fsMocks.mkdirSync).toHaveBeenCalledWith('/repo/.claude/ruflo/claims', { recursive: true });
  });
});
