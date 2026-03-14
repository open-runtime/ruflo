# topology-optimize

Optimize swarm topology for current workload.

## Usage
```bash
ruflo optimization topology-optimize [options]
```

## Options
- `--analyze-first` - Analyze before optimizing
- `--target <metric>` - Optimization target
- `--apply` - Apply optimizations

## Examples
```bash
# Analyze and suggest
ruflo optimization topology-optimize --analyze-first

# Optimize for speed
ruflo optimization topology-optimize --target speed

# Apply changes
ruflo optimization topology-optimize --target efficiency --apply
```
