# Add Tests

Write comprehensive tests for the code specified.

## 1. Identify What Needs Testing

**Analyze the code:**
- What are the main functions/components?
- What are the critical paths?
- What can break or fail?
- What are the edge cases?

**Prioritize:**
- Business logic (highest priority)
- User-facing features
- Data transformations
- API integrations
- Edge cases and error scenarios

## 2. Choose Test Type

**Unit Tests (preferred for most cases):**
- Test individual functions in isolation
- Fast to run, easy to debug
- Mock external dependencies
- Focus on logic correctness

**Integration Tests (when needed):**
- Test multiple components working together
- API endpoints with database
- Full data flow through system

**E2E Tests (for critical flows only):**
- User authentication
- Checkout/payment flows
- Critical business processes

## 3. Write Tests

**Test structure:**
```
describe('what you're testing', () => {
  it('should do X when Y happens', () => {
    // Arrange: Set up test data
    // Act: Execute the function
    // Assert: Check the result
  });
});
```

**Good test characteristics:**
- Clear, descriptive test names
- Tests one thing at a time
- Independent (doesn't rely on other tests)
- Repeatable (same result every time)
- Fast to execute

## 4. Test Coverage

**Always test:**
- Happy path (expected input, expected output)
- Edge cases (empty input, null, undefined, zero, negative numbers)
- Error cases (invalid input, network failures, missing data)
- Boundary conditions (min/max values, limits)

**Example for a function that validates email:**
```javascript
// Happy path
test('accepts valid email addresses')

// Edge cases
test('rejects empty string')
test('rejects null or undefined')
test('rejects email without @')
test('rejects email without domain')
test('handles very long email addresses')

// Boundary conditions
test('accepts minimum valid email: a@b.c')
```

## 5. Use Meaningful Assertions

**Be specific:**
- ❌ `expect(result).toBeTruthy()`
- ✅ `expect(result).toBe(true)`

- ❌ `expect(array.length).toBeGreaterThan(0)`
- ✅ `expect(array).toHaveLength(3)`

**Test the right things:**
- Not just that code runs without error
- That it produces correct output
- That it handles errors appropriately
- That side effects happen as expected

## 6. Mock External Dependencies

**Mock when testing:**
- API calls
- Database queries
- File system operations
- Date/time functions
- Random number generation

**Keep tests fast and isolated:**
- Don't make real API calls in tests
- Don't access real database
- Use test fixtures for data

## 7. Testing Checklist

Before considering tests complete:

- [ ] Happy path is tested
- [ ] Edge cases are covered
- [ ] Error scenarios are tested
- [ ] All critical functions have tests
- [ ] Test names clearly describe what's being tested
- [ ] Tests are independent and can run in any order
- [ ] External dependencies are mocked
- [ ] Tests run fast (under 5 seconds total)
- [ ] All tests pass

---

## Test Naming Convention

**Format:** `should [expected behavior] when [condition]`

**Examples:**
- `should return user object when valid ID is provided`
- `should throw error when email is invalid`
- `should return empty array when no results found`
- `should handle null input gracefully`

---

## Quick Reference

**Common assertions:**
```javascript
expect(value).toBe(expected)           // Strict equality
expect(value).toEqual(expected)        // Deep equality (objects/arrays)
expect(value).toBeTruthy()             // Truthy value
expect(value).toBeNull()               // Null
expect(value).toBeUndefined()          // Undefined
expect(array).toContain(item)          // Array contains item
expect(array).toHaveLength(n)          // Array length
expect(fn).toThrow()                   // Function throws error
expect(fn).toHaveBeenCalled()          // Mock was called
expect(fn).toHaveBeenCalledWith(args)  // Mock called with args
```

---

**Usage:** Type `/add-tests` then specify what code needs tests
