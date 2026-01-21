# User Journey (Original Requirements)

> **Note:** This document contains the original requirements captured during initial planning.
> For detailed feature specifications, see the `features/` folder.

---

## Original Vision

This app will be turned on before practice to set some goal (e.g., practice 200 shots on the 3-point line).

**Core Flow:**
1. User sets a practice goal
2. User practices, returning to the phone periodically to log results
3. Each "round" can have any number of shots (flexible)
4. User logs makes/misses for each round
5. Cycle continues until practice is complete
6. Session is saved for future stats

---

## Key Requirements

1. **Offline-first** - No internet required
2. **Multi-round sessions** - Flexible shot counts per round
3. **Court zones** - 5 directions × 4 distances + 2 special areas
4. **Time tracking** - Start/end time, duration
5. **Statistics** - Trends, zone breakdowns, goal achievement
6. **Data export** - CSV backup
7. **iCloud backup** - Cloud sync (future)
8. **Anonymous sharing** - Aggregate analytics (future)

---

## Feature Specifications

| Feature | File | Status |
|---------|------|--------|
| Practice Session | `features/01-practice-session.md` | COMPLETE |
| Court Zone Selection | `features/02-court-zone-selection.md` | NOT STARTED |
| Time Tracking | `features/03-time-tracking.md` | NOT STARTED |
| Statistics Dashboard | `features/04-statistics-dashboard.md` | NOT STARTED |
| Settings & Export | `features/05-settings-and-export.md` | NOT STARTED |
| Future (iCloud, Sharing) | `features/06-future-features.md` | FUTURE |

---

## Implementation Priority

1. **Time Tracking** (03) - Quick win, minimal UI change
2. **Statistics Dashboard** (04) - High user value
3. **Court Zone Selection** (02) - Enhances stats
4. **Settings & Export** (05) - Data management
5. **Future Features** (06) - After core is stable
