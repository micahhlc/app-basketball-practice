# Basketball Shooting Practice Tracker

> A mobile app to track basketball shooting practice sessions, measure progress, and collect statistics over time.

---

## Bash Commands

> Run these from the `app/` directory

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production (creates `dist/`)
- `npm run preview` - Preview production build

---

## Tech Stack

- **Frontend:** Vue 3.5 (Composition API) + Vite 6
- **Styling:** Tailwind CSS 4 + Autoprefixer
- **Mobile:** Capacitor 7 (iOS native)
- **Database:** localStorage (offline-first, no backend)
- **Formatting:** Prettier 3.6 with Tailwind plugin

---

## Project Structure

```
app/
├── src/
│   ├── main.js                 # App entry point
│   ├── App.vue                 # Root component
│   ├── router/index.js         # Route definitions
│   ├── components/
│   │   └── BottomMenu.vue      # Navigation bar
│   ├── views/
│   │   ├── PracticeGoalView.vue    # Session setup
│   │   ├── PracticeDetailView.vue  # Main practice tracker
│   │   ├── StatsView.vue           # Statistics (placeholder)
│   │   ├── SettingsView.vue        # Settings (placeholder)
│   │   └── TestBgImageView.vue     # Court UI experiment
│   └── assets/                 # Images, CSS
├── ios/                        # iOS native project
├── capacitor.config.json       # Capacitor config
└── package.json
docs/                           # Documentation
requirements/                   # PRD, user journey, feature specs
```

---

## Code Style

**Naming:**
- Variables/functions: `camelCase`
- Classes/components: `PascalCase`
- Files: `kebab-case`
- Constants: `UPPER_SNAKE_CASE`
- Booleans: `is`/`has`/`can` prefix

**Formatting:**
- 2 spaces indentation (no tabs)
- Max 100 chars per line
- Always use semicolons
- Single quotes (except to avoid escaping)

**Principles:**
- Use `const` by default, `let` only when reassigning, **never `var`**
- Functions under 50 lines, one responsibility each
- Comments explain WHY, not WHAT
- Error handling: try-catch for async, user-friendly messages
- Use async/await (not Promise chains)
- Avoid nesting: max 3 levels, use early returns

---

## Git Workflow

**Branches:**
- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `hotfix/description` - Urgent fixes

**Commits:**
- Format: `type: brief description`
- Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`
- Examples:
  - `feat: add user authentication`
  - `fix: resolve API timeout`
  - `docs: update README`

---

## Important Patterns

- Use **Composition API** with `<script setup>`, not Options API
- All data stored in **localStorage** (keys: `currentSession`, `sessions`)
- Session IDs format: `session-YYYYMMDD-timestamp`
- Routes: `/practice-g` (goal), `/practice-d` (detail), `/stats`, `/settings`
- Tailwind CSS for all styling (no custom CSS classes)
- Run Prettier before commits: configured in `.prettierrc`

---

## What to Avoid

- `var` declarations
- Mutating props/parameters
- Magic numbers (use constants)
- console.log in production
- Empty catch blocks
- Functions with >4 parameters

---

## Current Focus

**Status:** MVP Core Features Complete

**Working:**
- Practice session creation with shot goals
- Live mode and bulk mode input
- Round management (log, edit, delete)
- Session persistence and same-day resume

**Next:**
- Implement StatsView (practice history/trends)
- Implement SettingsView (user preferences)
- Integrate court-based zone input
- See `requirements/user_journey.md` for full feature specs

**Commands:** Use `/implement-feature`, `/add-tests`, `/debug-issue`, `/refactor`, `/fix-bug`, `/review-code`

---

**Last Updated:** 2026-01-22
