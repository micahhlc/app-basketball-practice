# Feature: [Feature Name]

> **Product Requirement** - No technical implementation details
> **Managed by:** Product owner / Client
> **For technical implementation:** See `CLAUDE.md` Feature [X]

---

## 📋 Overview

[2-3 sentence description of what this feature does and why it matters]

**Priority:** [Critical / High / Medium / Low]  
**Target Release:** [Phase 1 MVP / Phase 2 / etc]

---

## 👤 User Stories

### Primary User Story
**As a** [type of user],  
**I want to** [perform this action],  
**So that** [I can achieve this goal/benefit].

### Additional User Stories
- As a [user type], I want to [action] so that [benefit]
- As a [user type], I want to [action] so that [benefit]
- As a [user type], I want to [action] so that [benefit]

---

## ✅ Acceptance Criteria

What must be true for this feature to be considered "done":

- [ ] [Specific, testable requirement 1]
- [ ] [Specific, testable requirement 2]
- [ ] [Specific, testable requirement 3]
- [ ] [Specific, testable requirement 4]
- [ ] [Specific, testable requirement 5]

**Example format:**
- [ ] User can enter email address in the login form
- [ ] User sees error message when email format is invalid
- [ ] User can click "Forgot Password" link to reset password

---

## 🎨 UI/UX Requirements

### Layout & Structure
[Describe what the user sees and how it's organized]

**Example:**
- Main page shows list of items in card format
- Each card displays: title, date, status badge
- "Add New" button in top-right corner
- Search bar above the list

### User Interactions
[Describe what happens when user interacts]

**Example:**
- Click on card → opens detail view
- Hover over card → shows edit/delete icons
- Click "Add New" → opens modal form
- Submit form → card appears in list immediately

### Form Fields (if applicable)
- **Field 1:** [Name] - [Type] - [Required/Optional] - [Validation rules]
- **Field 2:** [Name] - [Type] - [Required/Optional] - [Validation rules]

**Example:**
- **Email:** Text input - Required - Must be valid email format
- **Password:** Password input - Required - Min 8 characters
- **Remember Me:** Checkbox - Optional

### Buttons & Actions
- **[Button Name]:** [What it does]
- **[Button Name]:** [What it does]

**Example:**
- **"Submit":** Saves data and closes form
- **"Cancel":** Closes form without saving
- **"Delete":** Shows confirmation, then removes item

### Messages & Feedback
**Success:**
- [What user sees on successful action]

**Errors:**
- [What user sees when action fails]
- [What user sees for validation errors]

**Loading:**
- [What user sees while waiting]

**Example:**
- Success: "Item saved successfully!" (green banner, auto-dismiss 3s)
- Error: "Failed to save. Please try again." (red banner, manual dismiss)
- Loading: Spinner over form, "Save" button disabled with "Saving..."

---

## 📐 Business Rules

Core logic that must be enforced:

1. [Rule 1: e.g., "Email addresses must be unique in the system"]
2. [Rule 2: e.g., "Users can create maximum 10 projects"]
3. [Rule 3: e.g., "Free users have 5GB storage limit"]
4. [Rule 4: e.g., "Items are soft-deleted and recoverable for 30 days"]

---

## 🔀 Edge Cases & Error Scenarios

### Common Edge Cases
**Scenario:** [What if user does X?]  
**Expected Behavior:** [System should do Y]

**Examples:**

**Scenario:** User submits form with empty required fields  
**Expected Behavior:** Show error message "Please fill in all required fields" and highlight empty fields in red

**Scenario:** User loses internet connection while saving  
**Expected Behavior:** Show message "Connection lost. Data saved locally. Will sync when online."

**Scenario:** User tries to delete the last item  
**Expected Behavior:** Allow deletion and show empty state message "No items yet. Click Add New to create one."

### Error Handling
- [What happens when system error occurs?]
- [What happens when network is slow/unavailable?]
- [What happens when data is invalid?]

---

## 🔗 Dependencies

### Requires These Features First
- [Feature Name] must be completed before this can start
- [Another Feature] provides data needed for this feature

### Enables These Features
- [Future Feature] will build upon this feature
- [Another Feature] depends on this being completed

---

## 🎯 Success Criteria (Metrics)

How we measure if this feature is successful:

- [Metric 1: e.g., "80% of users complete the flow without errors"]
- [Metric 2: e.g., "Average completion time under 2 minutes"]
- [Metric 3: e.g., "Less than 5% support tickets about this feature"]

---

## 📎 Attachments

### Mockups / Wireframes
- [Link to Figma / Sketch / etc]
- [Or attach images: `mockups/feature-name-*.png`]

### Reference Materials
- [Competitor example]
- [User research findings]
- [Analytics data]

---

## ❓ Open Questions

Questions that need answers before implementation:

- [ ] [Question 1: e.g., "Should we support Google login in addition to email?"]
- [ ] [Question 2: e.g., "What's the character limit for descriptions?"]
- [ ] [Question 3: e.g., "Do admins need different permissions?"]

---

## 📝 Notes & Discussion

### Decision Log
| Date | Decision | Reason |
|------|----------|--------|
| [Date] | [What was decided] | [Why] |

### Feedback from Stakeholders
- [Date] - [Stakeholder Name]: [Feedback]
- [Date] - [Stakeholder Name]: [Feedback]

---

## 🔄 Version History

| Version | Date | Changes | Updated By |
|---------|------|---------|------------|
| 1.0 | [Date] | Initial spec | [Name] |
| 1.1 | [Date] | [What changed] | [Name] |

---

**Feature Owner:** [Name]  
**Last Updated:** [Date]  
**Status:** [Draft / Approved / In Development / Complete]
