# memory-persist

Persist memory across sessions.

## Usage
```bash
ruflo memory persist [options]
```

## Options
- `--export <file>` - Export to file
- `--import <file>` - Import from file
- `--compress` - Compress memory data

## Examples
```bash
# Export memory
ruflo memory persist --export memory-backup.json

# Import memory
ruflo memory persist --import memory-backup.json

# Compressed export
ruflo memory persist --export memory.gz --compress
```
