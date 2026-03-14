# memory-usage

Manage persistent memory storage.

## Usage
```bash
ruflo memory usage [options]
```

## Options
- `--action <type>` - Action (store, retrieve, list, clear)
- `--key <key>` - Memory key
- `--value <data>` - Data to store (JSON)

## Examples
```bash
# Store memory
ruflo memory usage --action store --key "project-config" --value '{"api": "v2"}'

# Retrieve memory
ruflo memory usage --action retrieve --key "project-config"

# List all keys
ruflo memory usage --action list
```
