# real-time-view

Real-time view of swarm activity.

## Usage
```bash
ruflo monitoring real-time-view [options]
```

## Options
- `--filter <type>` - Filter view
- `--highlight <pattern>` - Highlight pattern
- `--tail <n>` - Show last N events

## Examples
```bash
# Start real-time view
ruflo monitoring real-time-view

# Filter errors
ruflo monitoring real-time-view --filter errors

# Highlight pattern
ruflo monitoring real-time-view --highlight "API"
```
