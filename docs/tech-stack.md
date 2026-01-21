# Tech Stack Documentation

> **Reference document** - @-mention this file when needed
> Example: `@tech-stack.md - What database are we using?`

---

## Technology Choices

### Frontend
**Framework:** [Vue 3 / React 18 / Next.js 14]
**Version:** [Specific version]
**Why:** [Reason for choosing this framework]

**UI Library:** [Tailwind CSS / Material-UI / Vuetify]
**Version:** [Specific version]
**Why:** [Reason for choosing]

**State Management:** [Vuex / Pinia / Context API / Redux]
**Version:** [Specific version]
**Why:** [Reason for choosing]

---

### Backend
**Language:** [JavaScript / TypeScript / Python]
**Version:** [Node.js 18 / Python 3.11]

**Framework:** [Express.js / FastAPI / NestJS]
**Version:** [Specific version]
**Why:** [Reason for choosing]

---

### Database
**Primary Database:** [PostgreSQL / MongoDB / MySQL]
**Version:** [Specific version]
**Why:** [Reason for choosing]

**ORM/ODM:** [Prisma / Sequelize / Mongoose]
**Version:** [Specific version]
**Why:** [Makes database queries type-safe / etc]

---

### Authentication
**Method:** [JWT / OAuth 2.0 / Session-based]
**Library:** [jsonwebtoken / Passport.js]
**Version:** [Specific version]

**Password Hashing:** [bcrypt]
**Salt Rounds:** [10]

---

### Major Libraries

#### Frontend Dependencies
```json
{
  "vue": "^3.3.0",
  "vue-router": "^4.2.0",
  "pinia": "^2.1.0",
  "axios": "^1.4.0",
  "vuelidate": "^2.0.0"
}
```

#### Backend Dependencies
```json
{
  "express": "^4.18.0",
  "jsonwebtoken": "^9.0.0",
  "bcrypt": "^5.1.0",
  "pg": "^8.11.0",
  "joi": "^17.9.0"
}
```

---

### Development Tools

**Package Manager:** [npm / yarn / pnpm]
**Build Tool:** [Vite / Webpack / esbuild]
**Linter:** [ESLint]
**Formatter:** [Prettier]
**Testing:** [Jest / Vitest / Pytest]

---

### DevOps & Deployment

**Hosting:** [Vercel / AWS / Heroku / Railway]
**CI/CD:** [GitHub Actions / GitLab CI]
**Monitoring:** [Sentry / LogRocket]
**Analytics:** [Google Analytics / Mixpanel]

---

## Version Requirements

### Minimum Versions
- Node.js: ≥ 18.0.0
- npm: ≥ 9.0.0
- [Database]: ≥ [Version]

### Browser Support
- Chrome: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Edge: Latest 2 versions

---

## Technical Decisions

### Why [Technology X] over [Technology Y]?

**Decision:** Chose [PostgreSQL] over [MongoDB]
**Reason:** 
- Need relational data with strong consistency
- ACID compliance required
- Better tooling for complex queries
- Team familiarity with SQL

**Decision:** Chose [Vue 3] over [React]
**Reason:**
- Simpler learning curve
- Built-in state management with Pinia
- Better performance for this use case
- Composition API fits project structure

---

## Performance Targets

**Frontend:**
- Initial load: < 3 seconds
- Time to interactive: < 5 seconds
- Lighthouse score: > 90

**Backend:**
- API response time: < 200ms (95th percentile)
- Database query time: < 100ms
- Concurrent users: Support 1000+

---

**Last Updated:** [Date]  
**Related:** See `architecture.md` for system design
