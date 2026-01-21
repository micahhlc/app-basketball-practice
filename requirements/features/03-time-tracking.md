# Feature: Time Tracking

> **Status:** NOT STARTED
> **Priority:** High
> **Depends on:** Practice Session (01)

---

## Overview

Automatic recording of session start time, end time, and duration. Enables future stats like average practice duration, time per 100 shots, and practice frequency analysis.

---

## User Stories

**As a** basketball player,
**I want to** automatically track how long my practice sessions take,
**So that** I can see trends in my practice duration and efficiency.

**As a** basketball player,
**I want to** see how much time I spend per 100 shots,
**So that** I can measure my practice pace over time.

---

## Acceptance Criteria

- [ ] Start time auto-recorded when session begins
- [ ] End time auto-recorded when session is saved
- [ ] Duration calculated and stored (in minutes)
- [ ] Duration displayed on Practice Detail view
- [ ] Time data saved with session for stats use
- [ ] Resuming a session keeps original start time

---

## UI/UX Requirements

### Practice Detail View Changes

**Add to header/goal area:**
```
Started: 2:30 PM | Duration: 45 min
```

**Or as a small info bar:**
```
┌─────────────────────────────────────┐
│ Started: 2:30 PM    Elapsed: 45:23  │
└─────────────────────────────────────┘
```

### Display Format
- Start time: 12-hour format with AM/PM (e.g., "2:30 PM")
- Duration: Minutes only for < 1 hour (e.g., "45 min")
- Duration: Hours + minutes for >= 1 hour (e.g., "1h 15min")
- Elapsed time: Could show live updating timer (optional)

---

## Data Model Changes

```javascript
// Updated session structure
session = {
  sessionId: "session-YYYYMMDD-timestamp",
  date: "1/22/2025",           // Keep for display
  startTime: 1705942200000,    // Unix timestamp (ms)
  endTime: 1705944900000,      // Unix timestamp (ms), set on save
  durationMinutes: 45,         // Calculated: (endTime - startTime) / 60000
  goal: 200,
  totalShots: 150,
  makes: 95,
  rounds: [...]
}
```

### Timestamp Fields
| Field | When Set | Purpose |
|-------|----------|---------|
| `startTime` | Session created | Track when practice began |
| `endTime` | Session saved | Track when practice ended |
| `durationMinutes` | On save (calculated) | Quick access for stats |

---

## Logic

### On Session Start (New)
```javascript
const session = {
  sessionId: generateId(),
  startTime: Date.now(),
  endTime: null,
  durationMinutes: null,
  // ... other fields
};
```

### On Session Resume
```javascript
// Keep original startTime from loaded session
// Do NOT reset startTime
```

### On Session Save
```javascript
session.endTime = Date.now();
session.durationMinutes = Math.round((session.endTime - session.startTime) / 60000);
```

### Elapsed Time Display (Optional Live Timer)
```javascript
const elapsedMinutes = computed(() => {
  return Math.round((Date.now() - session.startTime) / 60000);
});
// Update every minute with setInterval if showing live
```

---

## Edge Cases

**Scenario:** User resumes session from earlier today
**Behavior:** Keep original `startTime`. Duration will reflect total time including break.

**Scenario:** User starts session, closes app, reopens later
**Behavior:** If resuming same session, keep original `startTime`. This may result in long duration including break time.

**Scenario:** User wants to exclude warmup/cooldown time
**Behavior:** Future enhancement - could add manual adjustment or "active time" tracking. For MVP, just track wall-clock time from start to save.

**Scenario:** User saves multiple times during session
**Behavior:** Update `endTime` and `durationMinutes` each save. Final save reflects total duration.

---

## Stats Enabled by This Feature

With time data, Stats view can show:
- Average practice duration
- Time per 100 shots (efficiency)
- Practice frequency (sessions per week)
- Best performance by time of day (morning vs evening)
- Duration trends over time

---

## Implementation Notes

- Minimal UI change - just add time display to Practice Detail
- Main work is updating data model and save logic
- Consider: Should elapsed time update live? (adds complexity)
  - Recommendation: Start with static display, add live timer later if desired
