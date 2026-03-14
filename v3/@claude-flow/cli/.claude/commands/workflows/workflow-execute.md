# workflow-execute

Execute saved workflows.

## Usage
```bash
ruflo workflow execute [options]
```

## Options
- `--name <name>` - Workflow name
- `--params <json>` - Workflow parameters
- `--dry-run` - Preview execution

## Examples
```bash
# Execute workflow
ruflo workflow execute --name "deploy-api"

# With parameters
ruflo workflow execute --name "test-suite" --params '{"env": "staging"}'

# Dry run
ruflo workflow execute --name "deploy-api" --dry-run
```
