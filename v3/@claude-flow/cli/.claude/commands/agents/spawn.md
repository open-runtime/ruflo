---
name: spawn
description: Spawn a new agent with V3 capabilities
type: command
---

# Agent Spawn Command

Spawn a new agent with full V3 capabilities including neural patterns, memory integration, and swarm coordination.

## Usage

```bash
ruflo agent spawn [options]
```

## Options

| Option | Short | Description | Default |
|--------|-------|-------------|---------|
| `--type` | `-t` | Agent type to spawn | Required |
| `--name` | `-n` | Agent name/identifier | Auto-generated |
| `--provider` | `-p` | AI provider (anthropic, openrouter, ollama) | anthropic |
| `--model` | `-m` | Model to use | Provider default |
| `--task` | | Initial task for the agent | None |
| `--timeout` | | Agent timeout in seconds | 300 |
| `--auto-tools` | | Enable automatic tool usage | true |

## Agent Types (87 Available)

### Core Development
```bash
ruflo agent spawn -t coder      # Code implementation
ruflo agent spawn -t reviewer   # Code review
ruflo agent spawn -t tester     # Testing
ruflo agent spawn -t planner    # Planning
ruflo agent spawn -t researcher # Research
```

### V3 Specialized
```bash
ruflo agent spawn -t security-architect     # Security design
ruflo agent spawn -t security-auditor       # CVE remediation
ruflo agent spawn -t memory-specialist      # AgentDB (150x-12,500x faster)
ruflo agent spawn -t performance-engineer   # 2.49x-7.47x optimization
ruflo agent spawn -t core-architect         # DDD design
```

### Swarm Coordination
```bash
ruflo agent spawn -t hierarchical-coordinator  # Queen-led
ruflo agent spawn -t mesh-coordinator          # P2P network
ruflo agent spawn -t adaptive-coordinator      # Dynamic topology
ruflo agent spawn -t collective-intelligence-coordinator
```

### Consensus Agents
```bash
ruflo agent spawn -t byzantine-coordinator  # BFT consensus
ruflo agent spawn -t raft-manager          # Leader-based
ruflo agent spawn -t gossip-coordinator    # Eventual consistency
ruflo agent spawn -t crdt-synchronizer     # CRDT replication
ruflo agent spawn -t quorum-manager        # Quorum-based
```

### GitHub Integration
```bash
ruflo agent spawn -t pr-manager           # PR lifecycle
ruflo agent spawn -t code-review-swarm    # Multi-agent review
ruflo agent spawn -t issue-tracker        # Issue management
ruflo agent spawn -t release-manager      # Release coordination
ruflo agent spawn -t workflow-automation  # CI/CD automation
```

### SPARC Methodology
```bash
ruflo agent spawn -t sparc-coordinator    # SPARC orchestration
ruflo agent spawn -t specification        # Requirements
ruflo agent spawn -t pseudocode          # Algorithm design
ruflo agent spawn -t architecture        # System design
ruflo agent spawn -t refinement          # Iterative improvement
```

## Examples

```bash
# Spawn with custom name
ruflo agent spawn -t coder --name feature-bot

# Spawn with initial task
ruflo agent spawn -t researcher --task "Research React 19 features"

# Spawn with specific model
ruflo agent spawn -t architect -m claude-3-opus-20240229

# Spawn with custom timeout
ruflo agent spawn -t tester --timeout 600

# Spawn using OpenRouter
ruflo agent spawn -t coder -p openrouter -m anthropic/claude-3.5-sonnet
```

## Using Claude Code's Task Tool

For actual execution, always use Claude Code's Task tool:

```javascript
// Spawn ALL agents in ONE message for parallel execution
Task("Coder", "Implement authentication feature", "coder")
Task("Tester", "Write unit tests for auth", "tester")
Task("Reviewer", "Review auth implementation", "reviewer")
```

## MCP Coordination (Optional)

Use MCP tools only for swarm coordination setup:

```javascript
mcp__ruflo__swarm_init({ topology: "hierarchical", maxAgents: 15 })
mcp__ruflo__agent_spawn({ type: "coordinator", name: "queen" })
```

## Output

```
Spawning coder agent: feature-bot

+-----------+----------------------------------+
| Property  | Value                            |
+-----------+----------------------------------+
| ID        | coder-lx7m9k2                    |
| Type      | coder                            |
| Name      | feature-bot                      |
| Status    | active                           |
| Created   | 2026-01-08T03:30:00.000Z         |
| Capabilities | code, debug, refactor, test   |
+-----------+----------------------------------+

Agent feature-bot spawned successfully
```
