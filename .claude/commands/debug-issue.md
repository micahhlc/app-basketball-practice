# Debug Issue

Systematically debug a problem by following this process.

## 1. Gather Information

**Ask clarifying questions:**
- What is the expected behavior?
- What is the actual behavior?
- When did this start happening?
- What changed recently?
- Can you reproduce it consistently?
- What are the exact steps to reproduce?
- Are there any error messages?

**Collect evidence:**
- Error messages (full stack trace)
- Console logs
- Network requests/responses
- Input data that causes the issue
- Browser/environment information

## 2. Reproduce the Issue

**Try to reproduce:**
- Follow exact steps provided
- Use same input data
- Check if it happens in different environments
- Verify it's not a caching issue

**If can't reproduce:**
- Ask for more details
- Request screenshots or screen recording
- Check if it's environment-specific
- Verify data conditions

## 3. Isolate the Problem

**Narrow down the scope:**
- Which component/function is involved?
- Is it frontend, backend, or both?
- Is it data-related, logic-related, or UI-related?
- When does it break in the flow?

**Use binary search:**
- Comment out half the code
- See if problem persists
- Narrow down to smallest failing piece

## 4. Form Hypothesis

**Based on evidence, hypothesize:**
- What might be causing this?
- What are the most likely culprits?
- Have we seen similar issues before?

**Common causes:**
- Null/undefined values not handled
- Async timing issues (race conditions)
- Off-by-one errors
- Type mismatches
- Missing error handling
- Incorrect assumptions about data
- Cache issues
- Environment differences

## 5. Read the Code

**Examine relevant code carefully:**
- Read the function/component involved
- Check how data flows through it
- Look for assumptions that might be wrong
- Verify all edge cases are handled
- Check for typos or logic errors

**Check for common mistakes:**
- Using `==` instead of `===`
- Forgetting `await` on async calls
- Mutating state directly
- Missing null checks
- Incorrect variable scope
- Array/string index issues

## 6. Add Strategic Logging

**Add console.logs to:**
- See what values variables actually have
- Confirm code paths are being executed
- Check timing of async operations
- Verify assumptions about data

**Example:**
```javascript
console.log('User data:', user);
console.log('Is admin?', user?.isAdmin);
console.log('Permissions:', user?.permissions);
```

**Remember to remove logs later!**

## 7. Test the Fix

**After identifying the issue:**
- Explain what was wrong
- Propose a fix with explanation
- Show the corrected code
- Explain why this fixes the issue

**Verify the fix:**
- Test the happy path
- Test the edge case that was broken
- Test related functionality
- Ensure no new issues introduced

## 8. Prevent Future Occurrences

**After fixing:**
- Add validation to prevent similar issues
- Add error handling if missing
- Consider adding a test for this case
- Document any non-obvious behavior

---

## Debugging Checklist

When debugging, systematically check:

- [ ] Are there any error messages? (read them carefully!)
- [ ] Are all variables defined and not null/undefined?
- [ ] Are async operations awaited properly?
- [ ] Is data in the expected format?
- [ ] Are all edge cases handled?
- [ ] Is the logic correct? (step through mentally)
- [ ] Are there typos in variable names?
- [ ] Is the right function/method being called?
- [ ] Are array indices within bounds?
- [ ] Is state being mutated properly?

---

## Common Issue Patterns

### "Cannot read property of undefined"
- Something is undefined/null when you expect an object
- Add null checking: `if (obj?.property)`
- Use optional chaining: `obj?.property?.nested`

### "Function is not defined"
- Check spelling
- Verify import/export
- Ensure function is in scope
- Check if it's async but not awaited

### "Race condition / Timing issue"
- Add proper awaits
- Use Promise.all for parallel operations
- Consider using loading states
- Check order of async operations

### "Wrong data displayed"
- Check if state is updating correctly
- Verify data transformation logic
- Console.log the actual data
- Check for caching issues

### "Infinite loop / Stack overflow"
- Check loop conditions
- Verify recursive base case
- Look for circular dependencies
- Check React useEffect dependencies

---

## Debugging Tools

**Browser DevTools:**
- Console: See logs and errors
- Network: Check API calls
- Debugger: Set breakpoints, step through code
- React DevTools: Inspect component state/props
- Vue DevTools: Inspect component data

**Add strategic logs:**
- Log input values
- Log intermediate results
- Log before/after state changes

---

**Usage:** Type `/debug-issue` then describe the problem you're facing
