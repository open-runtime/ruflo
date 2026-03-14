# workflow-export

Export workflows for sharing.

## Usage
```bash
ruflo workflow export [options]
```

## Options
- `--name <name>` - Workflow to export
- `--format <type>` - Export format
- `--include-history` - Include execution history

## Examples
```bash
# Export workflow
ruflo workflow export --name "deploy-api"

# As YAML
ruflo workflow export --name "test-suite" --format yaml

# With history
ruflo workflow export --name "deploy-api" --include-history
```
