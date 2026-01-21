# Feature: Settings & Data Export

> **Status:** NOT STARTED (placeholder view exists)
> **Priority:** Medium
> **Depends on:** Practice Session (01)

---

## Overview

User preferences and data management features including default settings, CSV export for backup, and session management.

---

## User Stories

**As a** basketball player,
**I want to** set my default practice goal,
**So that** I don't have to enter it every time.

**As a** basketball player,
**I want to** export my practice data to CSV,
**So that** I can backup my data or analyze it in a spreadsheet.

**As a** basketball player,
**I want to** view and manage my saved sessions,
**So that** I can delete old or incorrect data.

---

## Acceptance Criteria

### Settings
- [ ] User can set default shot goal (saved to localStorage)
- [ ] User can toggle between light/dark mode (future)
- [ ] User can choose default input mode (Live vs Bulk)
- [ ] Settings persist across app restarts

### Data Export
- [ ] User can export all sessions to CSV
- [ ] CSV includes: date, goal, makes, attempts, %, duration, zones
- [ ] File downloads to device
- [ ] Works offline (generates file client-side)

### Session Management
- [ ] User can view list of all saved sessions
- [ ] User can delete individual sessions
- [ ] User can clear all data (with confirmation)

---

## UI/UX Requirements

### Settings View Layout (`/settings`)

```
┌─────────────────────────────────────┐
│           SETTINGS                  │
├─────────────────────────────────────┤
│                                     │
│  PRACTICE DEFAULTS                  │
│  ┌─────────────────────────────┐   │
│  │ Default Goal    [___200__]  │   │
│  │ Input Mode      [Bulk ▼]    │   │
│  └─────────────────────────────┘   │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  DATA MANAGEMENT                    │
│  ┌─────────────────────────────┐   │
│  │ [📤 Export to CSV]          │   │
│  │ [📋 View All Sessions]      │   │
│  │ [🗑️ Clear All Data]         │   │
│  └─────────────────────────────┘   │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  ABOUT                              │
│  ┌─────────────────────────────┐   │
│  │ Version: 1.0.0              │   │
│  │ Sessions: 47                │   │
│  │ Total Shots: 8,450          │   │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

### Session List View (Modal or Separate Page)

```
┌─────────────────────────────────────┐
│  ALL SESSIONS                 [X]   │
├─────────────────────────────────────┤
│  Jan 22, 2025                       │
│  Goal: 200 | 95/150 (63.3%)   [🗑️] │
├─────────────────────────────────────┤
│  Jan 21, 2025                       │
│  Goal: 200 | 102/200 (51.0%)  [🗑️] │
├─────────────────────────────────────┤
│  Jan 20, 2025                       │
│  Goal: 150 | 78/155 (50.3%)   [🗑️] │
├─────────────────────────────────────┤
│  ... more sessions ...              │
└─────────────────────────────────────┘
```

### Confirmations
- Delete session: "Delete this session? This cannot be undone."
- Clear all data: "Delete ALL practice data? This cannot be undone. Type 'DELETE' to confirm."

---

## Data Model

### Settings Storage
```javascript
// localStorage key: 'settings'
settings = {
  defaultGoal: 200,
  defaultInputMode: 'bulk',  // 'bulk' | 'live'
  // Future:
  // theme: 'light' | 'dark',
  // showZoneSelector: true
}
```

### CSV Export Format
```csv
date,session_id,goal,total_shots,makes,percentage,duration_minutes,goal_reached
2025-01-22,session-20250122-123456,200,150,95,63.3,45,false
2025-01-21,session-20250121-123456,200,200,102,51.0,52,true
```

**Optional: Detailed export with rounds**
```csv
date,session_id,round,makes,attempts,percentage,zone
2025-01-22,session-20250122-123456,1,30,40,75.0,3pt-left-wing
2025-01-22,session-20250122-123456,2,25,35,71.4,3pt-top
```

---

## CSV Export Logic

```javascript
function exportToCSV() {
  const sessions = JSON.parse(localStorage.getItem('sessions')) || {};

  // CSV header
  let csv = 'date,session_id,goal,total_shots,makes,percentage,duration_minutes,goal_reached\n';

  // Add each session as a row
  Object.values(sessions).forEach(session => {
    const percentage = ((session.makes / session.totalShots) * 100).toFixed(1);
    const goalReached = session.totalShots >= session.goal;
    csv += `${session.date},${session.sessionId},${session.goal},${session.totalShots},${session.makes},${percentage},${session.durationMinutes || ''},${goalReached}\n`;
  });

  // Trigger download
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `basketball-practice-${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}
```

---

## Edge Cases

**Scenario:** No sessions to export
**Behavior:** Show message "No sessions to export" instead of downloading empty file

**Scenario:** User changes default goal
**Behavior:** Only affects new sessions, not existing ones

**Scenario:** User deletes session that is current session
**Behavior:** Also clear `currentSession` from localStorage

**Scenario:** CSV has special characters in data
**Behavior:** Wrap fields in quotes, escape internal quotes

---

## Implementation Notes

- Settings view exists at `SettingsView.vue` (placeholder)
- CSV export is pure client-side, no server needed
- Use `Blob` and `URL.createObjectURL` for file download
- Consider confirmation modal component for destructive actions
- Settings should be loaded on app init and passed to PracticeGoalView
