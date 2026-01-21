# Architecture Documentation

> **Reference document** - @-mention this file when needed
> Example: `@architecture.md - How does the auth flow work?`

---

## System Overview

[Brief description of how the system works]

---

## Architecture Diagram

```
┌─────────────┐
│   Client    │
│  (Browser)  │
└──────┬──────┘
       │
       │ HTTPS
       ▼
┌──────────────────┐
│   Web Server     │
│  [Framework]     │
└──────┬───────────┘
       │
       ├─────────────┐
       │             │
       ▼             ▼
┌──────────┐  ┌──────────────┐
│ Database │  │ External APIs│
│ [Type]   │  │ [Services]   │
└──────────┘  └──────────────┘
```

---

## Key Components

### 1. Frontend
**Technology:** [React / Vue / etc]
**Purpose:** [What it does]
**Key Files:**
- `/src/components/` - Reusable UI components
- `/src/pages/` - Page components
- `/src/store/` - State management

### 2. Backend API
**Technology:** [Node.js / Python / etc]
**Purpose:** [What it does]
**Key Files:**
- `/api/routes/` - API endpoints
- `/api/controllers/` - Business logic
- `/api/models/` - Data models

### 3. Database
**Technology:** [PostgreSQL / MongoDB / etc]
**Purpose:** [What it stores]
**Schema:** See `/docs/schema.md`

---

## Data Flow

### Example: User Authentication

1. User enters credentials in login form
2. Frontend sends POST to `/api/auth/login`
3. Backend validates credentials
4. Backend generates JWT token
5. Token stored in httpOnly cookie
6. Frontend redirects to dashboard
7. Subsequent requests include token in cookie
8. Backend validates token on each request

---

## Component Relationships

### Frontend Dependencies
```
App.vue
  ├── Router.vue
  │   ├── HomePage.vue
  │   ├── DashboardPage.vue
  │   └── ProfilePage.vue
  ├── NavBar.vue
  └── Footer.vue
```

### Backend Dependencies
```
Server
  ├── Auth Module
  │   ├── Login Controller
  │   ├── Signup Controller
  │   └── Token Service
  ├── User Module
  │   ├── User Controller
  │   └── User Service
  └── Database
      └── Connection Pool
```

---

## External Dependencies

### Required Services
- **Authentication:** [OAuth provider / JWT / etc]
- **Storage:** [AWS S3 / Cloudinary / etc]
- **Email:** [SendGrid / AWS SES / etc]
- **Analytics:** [Google Analytics / Mixpanel / etc]

### API Integrations
- **[Service Name]:** [What it's used for]
- **[Service Name]:** [What it's used for]

---

## Security Architecture

### Authentication Flow
1. User credentials validated
2. Password hashed with bcrypt
3. JWT token generated (15 min expiry)
4. Refresh token generated (7 days)
5. Tokens stored in httpOnly cookies

### Authorization
- Role-based access control (RBAC)
- Permissions checked on each request
- Middleware validates JWT before route access

---

**Last Updated:** [Date]  
**Related:** See `tech-stack.md` for technology details
