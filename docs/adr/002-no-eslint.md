# 2. We don't use any linter

## Status

Accepted

## Context

See [ADR1](./001-formatting-katas.md), which describes the formatting of a kata.
This would normally lead to using a linter.

## Decision

But I am not a big fan of a huge set of rules
and currently configuring a linter just for those couple of rules is overhead.
Something like prettier which automatically applies a rule set is fine, but a linter
is kinda like someone who just says that a cleanup is needed, an auto-fixer (like prettier)
does clean up instead of just talking about it, my 2 cents.

## Consequences

No linter, just behave! (Or add a PR with some auto-formatting tool.)
