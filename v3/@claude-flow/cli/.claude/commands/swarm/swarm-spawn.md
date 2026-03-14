# swarm-spawn

Spawn agents in the swarm.

## Usage
```bash
ruflo swarm spawn [options]
```

## Options
- `--type <type>` - Agent type
- `--count <n>` - Number to spawn
- `--capabilities <list>` - Agent capabilities

## Examples
```bash
ruflo swarm spawn --type coder --count 3
ruflo swarm spawn --type researcher --capabilities "web-search,analysis"
```
