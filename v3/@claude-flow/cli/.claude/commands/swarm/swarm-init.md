# swarm-init

Initialize a new swarm with specified topology.

## Usage
```bash
ruflo swarm init [options]
```

## Options
- `--topology <type>` - Swarm topology (mesh, hierarchical, ring, star)
- `--max-agents <n>` - Maximum agents
- `--strategy <type>` - Distribution strategy

## Examples
```bash
ruflo swarm init --topology mesh
ruflo swarm init --topology hierarchical --max-agents 8
```
