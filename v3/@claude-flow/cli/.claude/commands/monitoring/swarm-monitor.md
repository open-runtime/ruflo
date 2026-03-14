# swarm-monitor

Real-time swarm monitoring.

## Usage
```bash
ruflo swarm monitor [options]
```

## Options
- `--interval <ms>` - Update interval
- `--metrics` - Show detailed metrics
- `--export` - Export monitoring data

## Examples
```bash
# Start monitoring
ruflo swarm monitor

# Custom interval
ruflo swarm monitor --interval 5000

# With metrics
ruflo swarm monitor --metrics
```
