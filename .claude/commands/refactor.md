# Refactor Code

Improve code quality without changing functionality.

---

## Core Principle

**Refactoring = Better code, same behavior**
- Do NOT add new features
- Do NOT change external behavior
- Do NOT break existing functionality

---

## Before Refactoring

**Understand the code:**
- Read and fully understand what it does
- Identify inputs, outputs, side effects
- Note any tests that verify behavior
- Check where it's used in the codebase

**Rule:** If you don't understand it, don't refactor it.

---

## Code Smells to Look For

- Long functions (> 50 lines)
- Duplicated code
- Deeply nested conditionals (> 3 levels)
- Magic numbers/strings
- Poor naming (unclear variables/functions)
- Too many parameters (> 4)
- Complex conditionals
- Comments explaining WHAT (not WHY)
- Dead code (unused variables/functions)

---

## Common Refactoring Patterns

### Extract Function
Break long functions into smaller, focused ones.
- Each function does ONE thing
- Name clearly describes what it does
- Improves testability

### Replace Magic Numbers
Give meaning to hardcoded values.
- Create named constants
- Use UPPER_SNAKE_CASE
- Makes intent clear

### Simplify Conditionals
- Remove redundant comparisons
- Use direct returns instead of if-else
- Extract complex conditions into variables

### Early Returns
- Reduce nesting with guard clauses
- Handle edge cases first
- Main logic at end, minimal indent

### Extract Variable
- Name complex expressions
- Makes code self-documenting
- Easier to debug

### Remove Duplication
- Extract common code into functions
- Create reusable utilities
- Don't over-abstract (wait for 3+ uses)

---

## Improve Naming

**Make names self-documenting:**
- Functions: verb + noun (`getUserData`, not `get`)
- Booleans: `is`/`has`/`can` prefix
- Arrays: plural (`users`, not `userList`)
- Constants: UPPER_SNAKE_CASE

---

## Safety Checklist

**Before committing refactored code:**

- [ ] Behavior is exactly the same
- [ ] All existing tests still pass
- [ ] No new features added
- [ ] Code is more readable
- [ ] Functions under 50 lines
- [ ] Magic numbers replaced with constants
- [ ] Duplication removed
- [ ] Comments updated (if any)
- [ ] No commented-out code

---

## When NOT to Refactor

**Avoid refactoring when:**
- You don't understand the existing code
- No tests exist and behavior is unclear
- Code rarely changes and works fine
- It's about to be deleted anyway
- Under tight deadline
- Someone else is actively working on same code

---

## Quick Refactoring Priorities

**Safe (do immediately):**
- Rename unclear variables
- Extract magic numbers to constants
- Add early returns to reduce nesting
- Break long lines

**Medium (test afterward):**
- Extract functions from long functions
- Simplify complex conditionals
- Remove duplication

**Risky (be very careful):**
- Change function signatures
- Restructure module organization
- Refactor class hierarchies

---

## Commit Message

```
refactor: improve readability in [module/function name]

- Extract [function] from [long function]
- Replace magic numbers with named constants
- Simplify nested conditionals
- No behavior changes
```

---

**Principle:** Refactor in small steps. Test after each change. Keep commits focused.

---

**Usage:** Type `/refactor` then specify what code needs refactoring
