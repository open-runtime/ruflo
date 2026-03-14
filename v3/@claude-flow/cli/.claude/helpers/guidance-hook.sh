#!/bin/bash
# Capture hook guidance for Claude visibility
PROJECT_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
GUIDANCE_FILE="$PROJECT_ROOT/.claude/ruflo/last-guidance.txt"
mkdir -p "$PROJECT_ROOT/.claude/ruflo"

case "$1" in
  "route")
    npx agentic-flow@alpha hooks route "$2" 2>&1 | tee "$GUIDANCE_FILE"
    ;;
  "pre-edit")
    npx agentic-flow@alpha hooks pre-edit "$2" 2>&1 | tee "$GUIDANCE_FILE"
    ;;
esac
