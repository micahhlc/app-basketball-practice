# Feature: Future Features

> **Status:** FUTURE (not in current scope)
> **Priority:** Low
> **Prerequisites:** All other features complete

---

## Overview

Long-term features for cloud backup, data sync, and anonymous analytics. These require infrastructure beyond the current offline-first approach.

---

## Feature A: iCloud Backup

### User Story
**As a** basketball player,
**I want to** backup my practice data to iCloud,
**So that** I don't lose my data if I get a new phone.

### Requirements
- [ ] Backup all sessions and settings to iCloud
- [ ] Auto-sync when changes occur
- [ ] Restore data on new device
- [ ] Handle sync conflicts (last-write-wins or merge)

### Technical Considerations
- Requires **Capacitor plugin** for iCloud access
- Options:
  - `@capacitor/preferences` with iCloud sync (simple key-value)
  - Custom iCloud Drive integration for file-based backup
  - CloudKit for structured data (more complex)
- Must handle offline scenarios gracefully
- Consider data size limits

### Implementation Approach
```javascript
// Potential plugin: capacitor-icloud-kv
import { iCloudKV } from 'capacitor-icloud-kv';

// Save to iCloud
await iCloudKV.set({ key: 'sessions', value: JSON.stringify(sessions) });

// Load from iCloud
const result = await iCloudKV.get({ key: 'sessions' });
```

### Sync Strategy
1. On app launch: Check iCloud for newer data
2. On save: Push to iCloud
3. Conflict: Compare timestamps, prefer newer (or prompt user)

---

## Feature B: Anonymous Data Sharing

### User Story
**As a** basketball player,
**I want to** optionally share my anonymized practice data,
**So that** I can see how I compare to other players.

### Requirements
- [ ] Opt-in only (default off)
- [ ] Completely anonymous (no identifying info)
- [ ] Share: shooting %, zones, session counts
- [ ] Do NOT share: dates, times, specific session IDs
- [ ] View aggregate stats from all users
- [ ] Requires internet connection

### Technical Considerations
- Requires **backend server** (new infrastructure)
- Options:
  - Firebase (Firestore + Cloud Functions)
  - Supabase (PostgreSQL + Edge Functions)
  - Custom API (Node.js/Python)
- Must implement:
  - Data anonymization pipeline
  - Aggregate calculation
  - API endpoints

### Data to Share (Anonymized)
```javascript
// What gets sent (no PII)
anonymousData = {
  anonymousId: "random-uuid",  // Not tied to user identity
  totalSessions: 47,
  overallMakePercentage: 48.5,
  zoneBreakdown: {
    close: { makes: 500, attempts: 1000 },
    mid: { makes: 400, attempts: 1100 },
    '3pt': { makes: 300, attempts: 900 },
    // ...
  },
  avgShotsPerSession: 180,
  // NO dates, NO times, NO location, NO device info
}
```

### What NOT to Share
- Exact dates/times of practice
- Session-level details
- Device identifiers
- Location data
- Any personal information

### Aggregate Stats to Display
- "You're in the top 30% for 3-point shooting"
- "Average player shoots 45% from mid-range"
- "Most players practice 3-4 times per week"

### Privacy UI
```
┌─────────────────────────────────────┐
│  ANONYMOUS DATA SHARING             │
├─────────────────────────────────────┤
│  Help improve the app by sharing    │
│  anonymized practice statistics.    │
│                                     │
│  What we share:                     │
│  ✓ Overall shooting percentages    │
│  ✓ Zone breakdown stats            │
│  ✓ Session counts                  │
│                                     │
│  What we NEVER share:              │
│  ✗ Dates or times                  │
│  ✗ Personal information            │
│  ✗ Device identifiers              │
│                                     │
│  [Toggle: OFF ○──────● ON]         │
│                                     │
└─────────────────────────────────────┘
```

---

## Feature C: Visual Court Map Input

### User Story
**As a** basketball player,
**I want to** tap on a court image to select my shooting zone,
**So that** zone selection is faster and more intuitive.

### Requirements
- [ ] Half-court image with tappable zones
- [ ] Visual feedback on tap (zone highlights)
- [ ] Works on mobile touch screens
- [ ] Responsive to different screen sizes

### Technical Approach
- SVG overlay on court image
- Each zone is a clickable SVG path
- CSS transitions for highlight effect
- Touch events for mobile

### Reference
- `TestBgImageView.vue` has initial court image experiment
- Can use that as starting point

---

## Priority Order

1. **iCloud Backup** - Most requested for data safety
2. **Visual Court Map** - UX improvement
3. **Anonymous Sharing** - Requires most infrastructure, least urgent

---

## Notes

- These features are explicitly out of scope for MVP
- Document here so they're not forgotten
- Revisit after core features are stable and in use
- Anonymous sharing needs legal review (privacy policy, GDPR if applicable)
