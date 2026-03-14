# model-update

Update neural models with new data.

## Usage
```bash
ruflo training model-update [options]
```

## Options
- `--model <name>` - Model to update
- `--incremental` - Incremental update
- `--validate` - Validate after update

## Examples
```bash
# Update all models
ruflo training model-update

# Specific model
ruflo training model-update --model agent-selector

# Incremental with validation
ruflo training model-update --incremental --validate
```
