# parallel-execute

Execute tasks in parallel for maximum efficiency.

## Usage
```bash
ruflo optimization parallel-execute [options]
```

## Options
- `--tasks <file>` - Task list file
- `--max-parallel <n>` - Maximum parallel tasks
- `--strategy <type>` - Execution strategy

## Examples
```bash
# Execute task list
ruflo optimization parallel-execute --tasks tasks.json

# Limit parallelism
ruflo optimization parallel-execute --tasks tasks.json --max-parallel 5

# Custom strategy
ruflo optimization parallel-execute --strategy adaptive
```
