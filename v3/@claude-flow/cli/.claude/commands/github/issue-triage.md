# issue-triage

Intelligent issue classification and triage.

## Usage
```bash
ruflo github issue-triage [options]
```

## Options
- `--repository <owner/repo>` - Target repository
- `--auto-label` - Automatically apply labels
- `--assign` - Auto-assign to team members

## Examples
```bash
# Triage issues
ruflo github issue-triage --repository myorg/myrepo

# With auto-labeling
ruflo github issue-triage --repository myorg/myrepo --auto-label

# Full automation
ruflo github issue-triage --repository myorg/myrepo --auto-label --assign
```
