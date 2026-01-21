# Feature: Practice Session

> **Status:** COMPLETE (MVP)
> **Priority:** Critical
> **Files:** `PracticeGoalView.vue`, `PracticeDetailView.vue`

---

## Overview

Core practice tracking functionality that allows users to set a shot goal, record makes/misses across multiple rounds, and save sessions to localStorage.

---

## User Stories

**As a** basketball player,
**I want to** set a practice goal and track my shots round by round,
**So that** I can measure my progress and stay motivated during practice.

---

## Acceptance Criteria

- [x] User can set a shot goal (default 200)
- [x] User can start a new practice session
- [x] User can resume a same-day session if one exists
- [x] User can log shots in Live Mode (tap Make/Miss buttons)
- [x] User can log shots in Bulk Mode (enter makes/attempts as numbers)
- [x] User can log multiple rounds per session
- [x] User can edit a round after logging
- [x] User can delete a round
- [x] User sees running totals: Makes, Total Shots, Make %
- [x] User sees goal reached indicator (Yes/No)
- [x] User can save session to localStorage
- [x] App works offline (no internet required)

---

## UI/UX - Practice Goal View (`/practice-g`)

### Layout
- Centered card: "Start new practice"
  - Number input for goal (default 200)
  - "Start" button (disabled if goal <= 0)
- Conditional card: "Resume previous session" (only if same-day session exists)
  - Shows previous goal
  - "Resume" button

### User Flow
1. User opens app → lands on Practice Goal view
2. User enters goal or accepts default
3. User clicks "Start" → navigates to Practice Detail view
4. OR if same-day session exists, user can click "Resume"

---

## UI/UX - Practice Detail View (`/practice-d`)

### Layout
- **Goal bar:** Shows goal number + reached indicator (Yes/No)
- **Progress display:** Makes | Total Shots | Make %
- **Input area:**
  - Toggle switch: Live Mode / Bulk Mode
  - Live Mode: Make button, Miss button, counters
  - Bulk Mode: Makes input, Attempts input
  - "Log Round" button
- **Alert message area:** Success/error feedback
- **Save button:** "Save Practice Session"
- **Rounds list:** Each round shows makes/attempts/%, Edit/Delete buttons

### Input Modes
| Mode | How it works |
|------|--------------|
| Live Mode | Tap "Make" or "Miss" for each shot. Counter increments. |
| Bulk Mode | Enter total makes and attempts as numbers. |

### Validation Rules
- Attempts must be > 0
- Makes cannot exceed attempts
- Makes must be a valid number

---

## Data Model

```javascript
// localStorage keys: 'currentSession', 'sessions'

session = {
  sessionId: "session-YYYYMMDD-timestamp",
  date: "1/22/2025, 2:00:00 PM",
  goal: 200,
  totalShots: 150,
  makes: 95,
  rounds: [
    { makes: 30, attempts: 40 },
    { makes: 25, attempts: 35 },
    // ...
  ]
}

// 'sessions' is an object keyed by sessionId
sessions = {
  "session-20250122-1705924800000": { ...session },
  "session-20250121-1705838400000": { ...session },
}
```

---

## Notes

- Session IDs include date for easy same-day detection
- Same-day resume checks if `currentSession.sessionId` contains today's YYYYMMDD
- Rounds are flexible - user shoots any number per round
- Goal can be exceeded (user may shoot more than planned)
