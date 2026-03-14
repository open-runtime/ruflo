# workflow-create

Create reusable workflow templates.

## Usage
```bash
ruflo workflow create [options]
```

## Options
- `--name <name>` - Workflow name
- `--from-history` - Create from history
- `--interactive` - Interactive creation

## Examples
```bash
# Create workflow
ruflo workflow create --name "deploy-api"

# From history
ruflo workflow create --name "test-suite" --from-history

# Interactive mode
ruflo workflow create --interactive
```
