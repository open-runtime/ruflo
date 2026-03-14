# memory-search

Search through stored memory.

## Usage
```bash
ruflo memory search [options]
```

## Options
- `--query <text>` - Search query
- `--pattern <regex>` - Pattern matching
- `--limit <n>` - Result limit

## Examples
```bash
# Search memory
ruflo memory search --query "authentication"

# Pattern search
ruflo memory search --pattern "api-.*"

# Limited results
ruflo memory search --query "config" --limit 10
```
