# Fix Bug

Systematically fix bugs and prevent similar issues.

---

## 1. Reproduce the Bug

**MUST reproduce before fixing:**
- Follow exact steps to trigger bug
- Verify you see incorrect behavior
- Note exact error message (if any)
- Identify conditions that cause it

**If can't reproduce:**
- Ask for more details and steps
- Check if it's environment-specific
- Verify it still exists

---

## 2. Find Root Cause

**Don't fix symptoms, find the cause:**
- What is the code doing wrong?
- Why is it doing that?
- What assumption was incorrect?
- Is this logic error, data issue, or missing validation?

**Use `/debug-issue` command if needed to investigate.**

---

## 3. Write Failing Test (Recommended)

Before fixing, write test that currently fails:
- Confirms you understand the bug
- Ensures fix works
- Prevents regression

---

## 4. Implement Fix

**Fix principles:**
- **Minimal change** - Don't rewrite everything
- **Fix root cause**, not symptoms
- Don't introduce new issues
- Follow code style standards

**Avoid:**
- Empty try-catch that swallows errors
- Fixing only one instance when pattern is repeated
- Over-engineering the solution

---

## 5. Verify the Fix

**Test thoroughly:**
- [ ] Bug no longer occurs with original steps
- [ ] Happy path still works
- [ ] Edge cases handled
- [ ] No new errors introduced
- [ ] Related functionality still works
- [ ] Performance not degraded

**Test with different inputs:**
- Normal input (happy path)
- Empty/null/undefined
- Very large/small values
- Invalid format

---

## 6. Add Defensive Code

**Prevent similar bugs:**

**Validation:**
- Check inputs before using
- Validate data from external sources
- Throw meaningful errors early

**Null checks:**
- Use optional chaining: `user?.email`
- Provide defaults: `user?.age ?? 0`

**Error handling:**
- Add try-catch for risky operations
- Provide fallback behavior
- Log errors for debugging
- Show user-friendly messages

---

## 7. Check for Similar Bugs

**Look for same pattern elsewhere:**
- Search codebase for similar code
- Same assumption might be wrong in multiple places
- Fix all instances, not just reported one

---

## 8. Document the Fix

**In commit message:**
```
fix: [brief description of what was wrong]

[Detailed explanation of bug]
[How you fixed it]
[Why this approach]

Fixes #[issue-number]
```

**Example:**
```
fix: prevent crash when user email is null

getEmailDomain assumed email was always a string, causing
crashes when processing users without email addresses.

Added validation to check for null/undefined before processing.
Returns null for invalid emails instead of crashing.

Fixes #456
```

---

## Bug Fix Checklist

- [ ] Bug reproduced successfully
- [ ] Root cause identified (not just symptom)
- [ ] Minimal fix implemented
- [ ] Fix verified with original reproduction steps
- [ ] Edge cases tested
- [ ] No new bugs introduced
- [ ] Defensive code added
- [ ] Code follows style guidelines
- [ ] Test added (if applicable)
- [ ] Similar bugs checked elsewhere
- [ ] Commit message explains the fix

---

## Common Bug Categories

### Null/Undefined Errors
**Fix:** Add null checks, use optional chaining
- `user?.email?.toLowerCase()`
- `const name = user?.name ?? 'Anonymous'`

### Off-by-One Errors
**Fix:** Check loop conditions and array indices
- Use `<` not `<=` for array length
- Check 0-based vs 1-based indexing

### Async/Timing Issues
**Fix:** Add proper awaits, handle race conditions
- Don't forget `await` keyword
- Handle parallel operations with `Promise.all`

### Type Mismatches
**Fix:** Add type validation or conversion
- Parse strings to numbers: `parseInt(str, 10)`
- Check types before using

### Missing Error Handling
**Fix:** Add try-catch, handle errors gracefully
- Catch specific errors, not all errors
- Provide fallback behavior
- Show user-friendly messages

### Logic Errors
**Fix:** Review conditionals, fix boolean logic
- Check AND vs OR
- Verify condition order
- Test truth tables

---

**Principle:** Fix the cause, not the symptom. Prevent future occurrences.

---

**Usage:** Type `/fix-bug` then describe the bug you need to fix
