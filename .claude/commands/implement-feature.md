# Implement Feature

When implementing a feature, follow this process:

## 1. Understand Requirements

**Read the specifications:**

**Step 1: What to build (product requirements)**
- Read `requirements/features/[feature-name].md`
  - User stories, acceptance criteria, UI/UX specs

**Step 2: Understand project context (already loaded)**
- CLAUDE.md is already auto-loaded, giving you:
  - Tech stack (Vue 3, PostgreSQL, etc.)
  - Project structure (where files go)
  - Code patterns (how to write code for this project)
  - Common commands (npm run dev, npm test)

**Step 3: Check detailed architecture (if needed)**
- If feature spec references complex system design, check `@docs/architecture.md`:
  - Detailed component relationships
  - Data flow diagrams
  - Integration patterns
- Only needed for complex features requiring system-wide understanding

**Ask clarifying questions if:**
- Requirements are vague or incomplete
- Feature specification is unclear
- Edge cases are not specified
- Success criteria are missing
- Unsure where files should go (check CLAUDE.md project structure)

## 2. Plan Implementation

**Break down into steps:**
- List all components/files that need to be created or modified
- Identify dependencies (what must be built first)
- Note any external libraries or APIs needed
- Consider edge cases and error scenarios

**Before writing code:**
- Verify you understand all acceptance criteria from feature spec
- Confirm you know where files should go (CLAUDE.md has project structure)
- Check `@docs/architecture.md` only if system design is complex
- Look for similar patterns in the existing codebase

## 3. Implement

**Follow coding standards:**
- Apply rules from `CLAUDE.md` Code Style section
- Keep functions under 50 lines
- Use descriptive variable names
- Add comments only for non-obvious logic

**Handle edge cases:**
- Implement all edge cases listed in the feature spec
- Add input validation
- Include proper error handling
- Consider empty states, loading states, error states

**Build incrementally:**
- Start with core functionality
- Test as you go
- Add features one at a time
- Don't over-engineer

## 4. Error Handling

**Include:**
- Try-catch blocks for operations that can fail
- User-friendly error messages
- Fallback behavior when things go wrong
- Logging for debugging (but remove console.logs before commit)

## 5. Testing

**Verify:**
- Feature works for happy path
- All edge cases handled correctly
- Error scenarios display appropriate messages
- Performance is acceptable (check success criteria)
- Responsive design works on different screen sizes (if applicable)

## 6. Update Documentation

**After implementation:**
- Update status in `CLAUDE.md` (mark feature as completed)
- Update current status section with what's next
- Note any deviations from original plan (with reasons)
- Document any technical decisions made during implementation

## 7. Commit

**Follow git workflow:**
- Use commit format from `CLAUDE.md` Git Workflow section
- Example: `feat: add user authentication with JWT`
- Include co-author line: `Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>`

---

## Quick Checklist

Before marking feature complete:

- [ ] All functionality from spec is implemented
- [ ] Edge cases are handled
- [ ] Error handling is in place
- [ ] Code follows style guide
- [ ] Feature has been tested manually
- [ ] Documentation is updated
- [ ] Changes are committed with proper message

---

## Quick Reference: What to Read

| File | Contains | When to Read |
|------|----------|-------------|
| **CLAUDE.md** | Project context (auto-loaded: tech stack, patterns, structure) | Always available - no need to read |
| **requirements/features/[name].md** | WHAT to build (user stories, acceptance criteria, UI/UX) | First - understand what to build |
| **docs/architecture.md** | Detailed system design (data flows, component relationships) | Only if feature needs system-level understanding |
| **docs/tech-stack.md** | Technology choices and rationale | Only if need to understand why tech chosen |

**Example workflow:**
```
1. Claude already has CLAUDE.md context loaded
   → Knows: Vue 3 project, components in src/components/, use camelCase

2. Read requirements/features/user-auth.md
   → "Users should login with email/password, show error on invalid, redirect to dashboard on success"

3. Implement using CLAUDE.md patterns
   → Create LoginForm.vue in src/components/, use axios from src/api/client.js

4. Check @docs/architecture.md only if needed
   → If auth flow is complex and needs system-level design understanding
```

---

**Usage:** Type `/implement-feature` then specify which feature spec to read: "Read requirements/features/auth.md and implement it"
