# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack book website for "Of the Noble and Great Ones" consisting of:
- **Frontend**: Next.js 15 application with TypeScript and Tailwind CSS v4 (in `/client`)
- **Backend**: Strapi 5 CMS with SQLite database (in `/server`)

## Essential Commands

### Frontend Development (run from `/client`)
```bash
npm run dev      # Start Next.js dev server (http://localhost:3000)
npm run build    # Build for production
npm run lint     # Run ESLint
```

### Backend Development (run from `/server`)
```bash
npm run develop  # Start Strapi with admin panel (http://localhost:1337)
npm run build    # Build Strapi admin panel
npm run strapi   # Access Strapi CLI commands
```

### Running the Full Stack
1. Start the backend first: `cd server && npm run develop`
2. In a new terminal, start the frontend: `cd client && npm run dev`

## Cloud Deployment

### Production Setup
- **Strapi Cloud**: https://effortless-advice-3210b87c9d.strapiapp.com
- **Deployment**: Automatic on push to main branch
- **Development Workflow**: Cloud-First approach - content managed in cloud, code developed locally

### Environment Configuration
Frontend uses environment variables for API URLs:
- **Development**: `.env.local` with `NEXT_PUBLIC_STRAPI_URL=http://localhost:1337`
- **Production**: `.env.production` with `NEXT_PUBLIC_STRAPI_URL=https://effortless-advice-3210b87c9d.strapiapp.com`

## Architecture

### API Integration
- Frontend fetches data from Strapi using `process.env.NEXT_PUBLIC_STRAPI_URL`
- Images are served from `${STRAPI_URL}/uploads/`
- Content types: `home-page`, `footer`, `logo`

### Frontend Structure
- Uses Next.js App Router (`/client/src/app/`)
- Components organized by feature: `/home` for home page components, `/layout` for shared components
- Strapi's `@strapi/blocks-react-renderer` handles rich text content from CMS

### Backend Content Types
Located in `/server/src/api/`:
- `home-page`: Hero section, awards, book description
- `footer`: Footer copyright and links
- `logo`: Site logo configuration

### Database
- Development uses SQLite (file: `/server/.tmp/data.db`)
- Can be configured for PostgreSQL/MySQL in production via `/server/config/database.ts`

## Key Development Patterns

### Fetching Data from Strapi
```typescript
// Example from client/src/app/page.tsx
const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page?populate=*`);
const data = await response.json();
```

### Rendering Strapi Rich Text
```typescript
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
<BlocksRenderer content={content} />
```

### Image URLs from Strapi
```typescript
const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}${data.attributes.url}`;
```

## Important Notes
- Node.js version requirement: 18.x to 22.x
- Frontend automatically uses cloud Strapi in production via environment variables
- Rich text content from Strapi uses the blocks format, not markdown
- When deploying frontend, ensure `NEXT_PUBLIC_STRAPI_URL` is set to cloud URL
- Content must be created/managed in the appropriate Strapi instance (local vs cloud)