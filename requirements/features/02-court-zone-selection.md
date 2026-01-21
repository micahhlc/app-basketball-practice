# Feature: Court Zone Selection

> **Status:** NOT STARTED
> **Priority:** High
> **Depends on:** Practice Session (01)

---

## Overview

Optional zone selection that allows users to tag each round with the court location they shot from. Zones are grouped by distance for meaningful statistics.

---

## User Stories

**As a** basketball player,
**I want to** optionally record which zone I shot from each round,
**So that** I can track my accuracy from different areas of the court.

**As a** basketball player,
**I want to** skip zone selection when I just want quick tracking,
**So that** the app doesn't slow me down during casual practice.

---

## Acceptance Criteria

- [ ] User can optionally select a zone before logging a round
- [ ] User can skip zone selection (zone = "Unspecified")
- [ ] Zone selection available via visual court map OR dropdown
- [ ] All 20 zones are selectable
- [ ] Zone is saved with each round
- [ ] Stats can group rounds by distance category

---

## Court Zone Breakdown

### 5 Directions
| Direction | Description |
|-----------|-------------|
| Left Corner | Baseline left side |
| Left Wing | 45° left of basket |
| Top/Center | Straight on, top of key |
| Right Wing | 45° right of basket |
| Right Corner | Baseline right side |

### 4 Distances
| Distance | Range | Applies to |
|----------|-------|------------|
| Close | 10-15 feet | All 5 directions |
| Mid | 15-23 feet | All 5 directions |
| 3-Point | 23 feet (the line) | All 5 directions |
| Beyond 3pt | 26+ feet | Top, Left Wing, Right Wing only |

### 2 Special Areas
| Zone | Description |
|------|-------------|
| Under Basket | Layups, close shots directly under |
| Free Throw | Free throw line (15 feet, center) |

### Total: 20 Zones
```
Standard zones:     5 directions × 3 distances = 15
Beyond 3pt zones:   3 directions × 1 distance  =  3
Special zones:      2                          =  2
                                         Total = 20
```

### Zone Grouping for Stats
| Group | Zones Included | Count |
|-------|----------------|-------|
| Close Range | All 5 close zones | 5 |
| Mid Range | All 5 mid zones | 5 |
| 3-Point | All 5 3pt zones | 5 |
| Deep (Beyond 3pt) | Top, Left Wing, Right Wing beyond | 3 |
| Under Basket | Under basket special | 1 |
| Free Throw | Free throw special | 1 |

---

## UI/UX Requirements

### Option A: Visual Court Map (Preferred)
- Half-court image as background
- Tappable zones overlaid on court
- Selected zone highlights (color change)
- "Skip" or "No Zone" button to proceed without selection

### Option B: Dropdown/Radio (Simpler)
- Dropdown with zone groups as optgroups
- Radio buttons organized by distance

### Integration with Practice Detail View
- Zone selector appears BEFORE or WITHIN the input area
- Selected zone shows as badge/label
- When "Log Round" is clicked, zone is saved with round data
- If no zone selected, save as `zone: null` or `zone: "unspecified"`

### Court Map Layout (for reference)
```
          [Beyond-Top]
      [Beyond-LW]   [Beyond-RW]
         [3pt-LW]   [3pt-RW]
    [3pt-LC]  [3pt-Top]  [3pt-RC]
         [Mid-LW]   [Mid-RW]
    [Mid-LC]  [Mid-Top]  [Mid-RC]
        [Close-LW]  [Close-RW]
   [Close-LC] [Close-Top] [Close-RC]
              [Under]
           [Free Throw]
              ====== (basket)
```

---

## Data Model Changes

```javascript
// Updated round structure
round = {
  makes: 30,
  attempts: 40,
  zone: "3pt-left-wing" | "mid-top" | "under-basket" | null
}

// Zone ID format: "{distance}-{direction}" or special name
// Examples:
//   "close-left-corner"
//   "mid-left-wing"
//   "3pt-top"
//   "beyond-right-wing"
//   "under-basket"
//   "free-throw"
//   null (unspecified)
```

### Zone ID Reference
| Zone ID | Group | Direction |
|---------|-------|-----------|
| `close-left-corner` | Close | Left Corner |
| `close-left-wing` | Close | Left Wing |
| `close-top` | Close | Top |
| `close-right-wing` | Close | Right Wing |
| `close-right-corner` | Close | Right Corner |
| `mid-left-corner` | Mid | Left Corner |
| `mid-left-wing` | Mid | Left Wing |
| `mid-top` | Mid | Top |
| `mid-right-wing` | Mid | Right Wing |
| `mid-right-corner` | Mid | Right Corner |
| `3pt-left-corner` | 3-Point | Left Corner |
| `3pt-left-wing` | 3-Point | Left Wing |
| `3pt-top` | 3-Point | Top |
| `3pt-right-wing` | 3-Point | Right Wing |
| `3pt-right-corner` | 3-Point | Right Corner |
| `beyond-left-wing` | Deep | Left Wing |
| `beyond-top` | Deep | Top |
| `beyond-right-wing` | Deep | Right Wing |
| `under-basket` | Special | N/A |
| `free-throw` | Special | N/A |

---

## Edge Cases

**Scenario:** User logs round without selecting zone
**Behavior:** Save round with `zone: null`, display as "Unspecified" in round list

**Scenario:** User edits a round that has a zone
**Behavior:** Zone selector shows current zone, user can change or keep

**Scenario:** Viewing stats with mixed zone/no-zone rounds
**Behavior:** Show "Unspecified" as its own category, or filter it out with toggle

---

## Implementation Notes

- Start with dropdown/radio for faster implementation
- Court map can be Phase 2 enhancement
- `TestBgImageView.vue` has existing court image experiment - can reference
- Zone selection should NOT be required - keep friction low
