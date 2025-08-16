# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static Next.js website for the book "Of the Noble and Great Ones" by H.D. Logic. 
Originally migrated from WordPress (https://heavenlydreamlogic.com/), now fully static with no CMS.

- **Stack**: Next.js 15 with TypeScript and Tailwind CSS v4
- **Deployment**: Can be deployed to any static hosting (Vercel, Netlify, etc.)
- **Images**: All images stored in `/client/public/images/`

## Project Structure

```
/client
  /src/app
    /components      - Reusable components
      /home         - Homepage components
      /layout       - Header and Footer
    /h-d-dictionary - Dictionary page
    /hd-logic       - H.D. Logic section pages
      /bio
      /jukevoice
      /definition
      /dad
      /emily
    /songs          - Songs page
    /spoilers       - Spoilers section
      /what-plot    - Day/night plot pages
      /who-are-these-characters - Character pages
      /degrees-of-dream-interpretation
    page.tsx        - Homepage
```

## Essential Commands

Run from `/client` directory:

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Key Features

- **Static Site**: All content is hardcoded in components
- **No API Calls**: Pure static HTML/CSS/JS
- **Local Images**: All images served from `/public/images/`
- **Fast Performance**: No external dependencies or API calls

## Development Patterns

### Adding Content
To add or update content, directly edit the page components:
- Content is embedded as JSX
- Images use Next.js Image component with local paths
- No markdown or CMS integration needed

### Styling
- Uses Tailwind CSS v4
- Dark theme by default
- Responsive design with mobile-first approach

## Important Notes

- Node.js version requirement: 18.x to 22.x
- All content is version-controlled in Git
- No environment variables needed
- No backend or database required