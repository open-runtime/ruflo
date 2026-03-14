import { homedir } from 'os';
import { join } from 'path';

export const PROJECT_RUNTIME_DIR = join('.claude', 'ruflo');
export const PROJECT_RUNTIME_DISPLAY_DIR = '.claude/ruflo';
export const PROJECT_CONFIG_FILE = 'ruflo@claude-flow.config.json';
export const PROJECT_CONFIG_DISPLAY_PATH = `./${PROJECT_CONFIG_FILE}`;

export function getProjectRuntimeDir(baseDir: string = process.cwd()): string {
  return join(baseDir, PROJECT_RUNTIME_DIR);
}

export function joinProjectRuntimePath(baseDir: string, ...segments: string[]): string {
  return join(baseDir, PROJECT_RUNTIME_DIR, ...segments);
}

export function getHomeRuntimeDir(baseDir: string = homedir()): string {
  return join(baseDir, '.claude', 'ruflo');
}

export function joinHomeRuntimePath(baseDir: string = homedir(), ...segments: string[]): string {
  return join(baseDir, '.claude', 'ruflo', ...segments);
}

export function displayProjectRuntimePath(...segments: string[]): string {
  return segments.length > 0 ? `${PROJECT_RUNTIME_DISPLAY_DIR}/${segments.join('/')}` : PROJECT_RUNTIME_DISPLAY_DIR;
}

export function joinProjectConfigPath(baseDir: string = process.cwd()): string {
  return join(baseDir, PROJECT_CONFIG_FILE);
}

export function displayProjectConfigPath(): string {
  return PROJECT_CONFIG_DISPLAY_PATH;
}
