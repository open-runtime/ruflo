# agent-metrics

View agent performance metrics.

## Usage
```bash
ruflo agent metrics [options]
```

## Options
- `--agent-id <id>` - Specific agent
- `--period <time>` - Time period
- `--format <type>` - Output format

## Examples
```bash
# All agents metrics
ruflo agent metrics

# Specific agent
ruflo agent metrics --agent-id agent-001

# Last hour
ruflo agent metrics --period 1h
```
