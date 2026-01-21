# Feature: Statistics Dashboard

> **Status:** NOT STARTED (placeholder view exists)
> **Priority:** High
> **Depends on:** Practice Session (01), Time Tracking (03)
> **Enhanced by:** Court Zone Selection (02)

---

## Overview

A dashboard to visualize practice history, shooting trends, zone breakdowns, and goal achievement. Helps users understand their progress over time.

---

## User Stories

**As a** basketball player,
**I want to** see my shooting percentage trend over time,
**So that** I can track whether I'm improving.

**As a** basketball player,
**I want to** see my accuracy broken down by court zone,
**So that** I know which areas need more practice.

**As a** basketball player,
**I want to** see my goal achievement rate,
**So that** I stay motivated to complete my practice goals.

---

## Acceptance Criteria

### Priority 1: Shooting % Trend
- [ ] Line chart showing make % over time
- [ ] X-axis: dates, Y-axis: percentage
- [ ] Shows last 7/14/30 days or all time (toggle)
- [ ] Each point = one session's overall %

### Priority 2: Zone Breakdown
- [ ] Bar chart or table showing % by zone group
- [ ] Groups: Close, Mid, 3pt, Deep, Under Basket, Free Throw
- [ ] Shows makes/attempts/% for each group
- [ ] Only shows data if zones were tracked

### Priority 3: Goal Achievement
- [ ] Percentage of sessions where goal was reached
- [ ] Visual indicator (e.g., "Goal reached: 75% of sessions")
- [ ] Streak counter (consecutive sessions goal reached)

### Priority 4: Practice Frequency & Duration
- [ ] Sessions per week average
- [ ] Average duration per session
- [ ] Total shots all-time
- [ ] Time per 100 shots (efficiency metric)

---

## UI/UX Requirements

### Stats View Layout (`/stats`)

```
┌─────────────────────────────────────┐
│         STATISTICS                  │
├─────────────────────────────────────┤
│  [7D] [14D] [30D] [All]  ← filter   │
├─────────────────────────────────────┤
│                                     │
│  SHOOTING TREND                     │
│  ┌─────────────────────────────┐   │
│  │    📈 Line Chart            │   │
│  │    (% over time)            │   │
│  └─────────────────────────────┘   │
│  Current: 47.2%  |  Best: 52.1%    │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  ZONE BREAKDOWN                     │
│  ┌─────────────────────────────┐   │
│  │ Close    ████████░░  45.2%  │   │
│  │ Mid      ██████░░░░  38.1%  │   │
│  │ 3-Point  █████░░░░░  31.5%  │   │
│  │ Deep     ████░░░░░░  28.0%  │   │
│  │ Under    █████████░  52.3%  │   │
│  │ FT       ████████░░  48.0%  │   │
│  └─────────────────────────────┘   │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  GOALS & STREAKS                    │
│  ┌─────────────────────────────┐   │
│  │ Goal Achievement: 75%       │   │
│  │ Current Streak: 5 sessions  │   │
│  │ Best Streak: 12 sessions    │   │
│  └─────────────────────────────┘   │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  PRACTICE SUMMARY                   │
│  ┌─────────────────────────────┐   │
│  │ Total Sessions: 47          │   │
│  │ Total Shots: 8,450          │   │
│  │ Avg Duration: 38 min        │   │
│  │ Avg Shots/Session: 180      │   │
│  │ Time per 100 shots: 21 min  │   │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

### Time Period Filter
| Option | Shows |
|--------|-------|
| 7D | Last 7 days |
| 14D | Last 14 days |
| 30D | Last 30 days |
| All | All-time data |

### Empty States
- No sessions: "No practice data yet. Complete a session to see stats."
- No zone data: "Zone breakdown unavailable. Start tagging zones in your rounds."

---

## Data Calculations

### Shooting % Trend
```javascript
// For each session in time range
sessions.map(s => ({
  date: s.date,
  percentage: (s.makes / s.totalShots) * 100
}));
```

### Zone Breakdown
```javascript
// Aggregate all rounds by zone group
const zoneStats = {
  close: { makes: 0, attempts: 0 },
  mid: { makes: 0, attempts: 0 },
  '3pt': { makes: 0, attempts: 0 },
  deep: { makes: 0, attempts: 0 },
  underBasket: { makes: 0, attempts: 0 },
  freeThrow: { makes: 0, attempts: 0 },
  unspecified: { makes: 0, attempts: 0 }
};

// Map zone IDs to groups
function getZoneGroup(zoneId) {
  if (!zoneId) return 'unspecified';
  if (zoneId.startsWith('close-')) return 'close';
  if (zoneId.startsWith('mid-')) return 'mid';
  if (zoneId.startsWith('3pt-')) return '3pt';
  if (zoneId.startsWith('beyond-')) return 'deep';
  if (zoneId === 'under-basket') return 'underBasket';
  if (zoneId === 'free-throw') return 'freeThrow';
  return 'unspecified';
}
```

### Goal Achievement
```javascript
const sessionsWithGoalReached = sessions.filter(s => s.totalShots >= s.goal);
const achievementRate = (sessionsWithGoalReached.length / sessions.length) * 100;
```

### Streak Calculation
```javascript
// Sort sessions by date descending
// Count consecutive sessions where totalShots >= goal
let currentStreak = 0;
for (const session of sortedSessions) {
  if (session.totalShots >= session.goal) {
    currentStreak++;
  } else {
    break;
  }
}
```

### Practice Summary
```javascript
const totalSessions = sessions.length;
const totalShots = sessions.reduce((sum, s) => sum + s.totalShots, 0);
const totalDuration = sessions.reduce((sum, s) => sum + (s.durationMinutes || 0), 0);
const avgDuration = totalDuration / totalSessions;
const avgShotsPerSession = totalShots / totalSessions;
const timePer100Shots = (totalDuration / totalShots) * 100;
```

---

## Chart Library Options

For MVP, consider:
- **Chart.js** - Popular, well-documented, Vue wrapper available
- **Lightweight alternative:** CSS-only bar charts for zone breakdown
- **Future:** ApexCharts for more advanced visualizations

Recommendation: Start with Chart.js for line chart, CSS for bar charts.

---

## Edge Cases

**Scenario:** User has only 1 session
**Behavior:** Show single point on trend chart, note "Need more data for trends"

**Scenario:** No zone data tracked
**Behavior:** Hide zone breakdown section or show "No zone data"

**Scenario:** Sessions span multiple years
**Behavior:** Group by month for "All" view to avoid cluttered chart

**Scenario:** Very long duration (user forgot to save)
**Behavior:** Consider outlier detection, or let user edit/delete bad data

---

## Implementation Notes

- Stats view currently at `StatsView.vue` (placeholder)
- Load all sessions from localStorage on mount
- Apply time filter before calculations
- Consider caching computed stats for performance
- Charts may need a library install: `npm install chart.js vue-chartjs`
