import { basename } from 'path';

export const DEFAULT_REPO_SCAN_EXCLUDE_DIRS = [
  'node_modules',
  'dist',
  'build',
  '.git',
  'coverage',
  '__pycache__',
  '.dart_tool',
  'target',
  'vendor',
  '.turbo',
  '.next',
  '.cache',
  'out',
  '.gradle',
  '.idea',
  '.vscode',
];

export function shouldExcludeRepoDir(name: string): boolean {
  return DEFAULT_REPO_SCAN_EXCLUDE_DIRS.includes(name);
}

export function shouldExcludeRepoPath(targetPath: string, patterns: string[] = DEFAULT_REPO_SCAN_EXCLUDE_DIRS): boolean {
  const name = basename(targetPath);

  return patterns.some(pattern => {
    if (pattern.includes('*')) {
      const regex = new RegExp('^' + pattern.replace(/\*/g, '.*') + '$');
      return regex.test(name);
    }

    return name === pattern || targetPath.includes(`/${pattern}/`);
  });
}
