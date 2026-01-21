# Deployment Guide

> **Operations documentation** - How to build and deploy this project

---

## Local Development

### Prerequisites
- Node.js ≥ 18.0.0
- npm ≥ 9.0.0
- [Database] installed locally
- [Any other requirements]

### Setup
```bash
# Clone repository
git clone [repository-url]
cd [project-name]

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your local configuration

# Run database migrations
npm run migrate

# Start development server
npm run dev
```

### Development URLs
- Frontend: http://localhost:5173
- Backend API: http://localhost:3000
- Database: localhost:5432

---

## Environment Variables

### Required Variables
```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# Authentication
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d

# API Configuration
API_BASE_URL=http://localhost:3000
PORT=3000

# External Services (if applicable)
SENDGRID_API_KEY=your-key
AWS_ACCESS_KEY=your-key
AWS_SECRET_KEY=your-secret
```

### Optional Variables
```bash
# Feature Flags
ENABLE_ANALYTICS=false
ENABLE_EMAIL=false

# Logging
LOG_LEVEL=debug
```

---

## Build Process

### Production Build
```bash
# Build frontend
npm run build

# Output location
dist/
```

### Build Verification
```bash
# Test production build locally
npm run preview

# Run tests before deployment
npm run test

# Check for linting errors
npm run lint
```

---

## Deployment

### Platform: [Vercel / AWS / Heroku / etc]

### Deployment Steps
```bash
# 1. Ensure all tests pass
npm run test

# 2. Build production bundle
npm run build

# 3. Deploy to platform
[platform-specific deploy command]

# Example for Vercel:
vercel --prod

# Example for Heroku:
git push heroku main
```

### Automated Deployment (CI/CD)

**Trigger:** Push to `main` branch

**Process:**
1. Run tests
2. Build production bundle
3. Deploy to staging
4. Run smoke tests
5. Deploy to production (if tests pass)

**GitHub Actions:** See `.github/workflows/deploy.yml`

---

## Database Migrations

### Running Migrations
```bash
# Development
npm run migrate

# Production
npm run migrate:prod
```

### Creating New Migrations
```bash
npm run migration:create -- --name add_user_table
```

---

## Monitoring & Logs

### Application Logs
- **Platform:** [Service name]
- **Access:** [How to access logs]

### Error Tracking
- **Tool:** [Sentry / LogRocket / etc]
- **Dashboard:** [URL]

### Performance Monitoring
- **Tool:** [Service name]
- **Metrics:** Response time, error rate, uptime

---

## Rollback Procedure

### If Deployment Fails
```bash
# 1. Revert to previous version
[platform-specific rollback command]

# 2. Check logs for errors
[platform-specific logs command]

# 3. Fix issue locally
# 4. Re-deploy
```

---

## Health Checks

### Endpoints
- **Health Check:** `/api/health`
- **Database Check:** `/api/health/db`

### Expected Response
```json
{
  "status": "ok",
  "timestamp": "2025-01-01T00:00:00Z",
  "uptime": 12345
}
```

---

**Last Updated:** [Date]  
**Related:** See `tech-stack.md` for technology details
