# Implementation Plan - Code Quality Improvements

## Overview
This document outlines the planned improvements to enhance code quality, TypeScript usage, accessibility, and maintainability.

## Tasks

### 1. Add TypeScript Interfaces
**Files to create/modify:**
- Create `/src/app/types/index.ts`

**Implementation:**
```typescript
// Dictionary types
export interface DictionaryEntry {
  term: string;
  type: string;
  definition: string;
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
}

export interface DropdownItem extends NavigationItem {
  children?: NavigationItem[];
}
```

### 2. Fix Accessibility Issues
**Files to modify:**
- `/src/app/components/layout/Header.tsx`

**Changes:**
- Add `aria-label="Toggle navigation menu"` to mobile menu button
- Add `aria-expanded={mobileMenuOpen}` to mobile menu button
- Add `aria-haspopup="true"` to dropdown buttons
- Add `role="menu"` to dropdown containers
- Add `role="menuitem"` to dropdown links

### 3. Consolidate Header Component State
**Files to modify:**
- `/src/app/components/layout/Header.tsx`

**Implementation:**
```typescript
interface MenuState {
  mobile: boolean;
  spoilers: boolean;
  hdLogic: boolean;
}

const [menuState, setMenuState] = useState<MenuState>({
  mobile: false,
  spoilers: false,
  hdLogic: false
});
```

### 4. Extract Navigation Constants
**Files to create/modify:**
- Create `/src/app/lib/navigation.ts`
- Update `/src/app/components/layout/Header.tsx`
- Update `/src/app/components/plot/DayPageLayout.tsx`
- Update `/src/app/components/plot/NightPageLayout.tsx`

**Implementation:**
```typescript
// navigation.ts
export const SPOILERS_NAV = [
  { label: 'WHAT PLOT!?', href: '/spoilers/what-plot' },
  { label: 'WHO ARE THESE CHARACTERS!?', href: '/spoilers/who-are-these-characters' },
  { label: 'DEGREES OF DREAM INTERPRETATION', href: '/spoilers/degrees-of-dream-interpretation' }
];

export const HD_LOGIC_NAV = [
  { label: 'BIO', href: '/hd-logic/bio' },
  { label: 'JUKEVOICE', href: '/hd-logic/jukevoice' },
  { label: 'DEFINITION', href: '/hd-logic/definition' },
  { label: 'DAD', href: '/hd-logic/dad' },
  { label: 'EMILY', href: '/hd-logic/emily' }
];

export const DAY_ORDER = [
  { name: 'Monday', path: '/spoilers/what-plot/monday' },
  { name: 'Tuesday', path: '/spoilers/what-plot/tuesday' },
  // ... etc
];
```

### 5. Create Reusable NavigationDropdown Component
**Files to create:**
- Create `/src/app/components/layout/NavigationDropdown.tsx`

**Implementation:**
```typescript
interface NavigationDropdownProps {
  label: string;
  items: NavigationItem[];
  isOpen?: boolean;
  onToggle?: () => void;
  isMobile?: boolean;
}

export default function NavigationDropdown({ 
  label, 
  items, 
  isOpen, 
  onToggle,
  isMobile = false 
}: NavigationDropdownProps): JSX.Element {
  // Implement reusable dropdown logic
}
```

### 6. Add Explicit Return Types
**Files to modify:**
- All `.tsx` files with components

**Pattern:**
```typescript
export default function ComponentName(): JSX.Element {
  // ...
}
```

### 7. Add Sizes Prop to Image Components
**Files to modify:**
- `/src/app/page.tsx` - Hero image and award images
- `/src/app/components/layout/Header.tsx` - Logo image

**Implementation:**
```typescript
<Image
  src="/images/..."
  alt="..."
  width={400}
  height={640}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
  priority
/>
```

### 8. Run TypeScript Strict Mode Check
**Command:**
```bash
npx tsc --strict --noEmit
```

**Purpose:**
- Catch type issues early
- Ensure all code passes strict TypeScript checks
- Identify any implicit `any` types or missing return types

### 9. Install and Configure ESLint Plugin
**Installation:**
```bash
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

**Configuration (update eslint.config.mjs):**
```javascript
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  }
];
```

### 10. Add Prettier for Code Formatting
**Installation:**
```bash
npm install --save-dev prettier eslint-config-prettier
```

**Configuration (.prettierrc):**
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false
}
```

**Add scripts to package.json:**
```json
{
  "scripts": {
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
    "format:check": "prettier --check \"src/**/*.{ts,tsx,css}\""
  }
}
```

### 11. Create Test File Structure with Placeholders
**Installation:**
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom @types/jest
```

**Create jest.config.js:**
```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.tsx',
  ],
}

module.exports = createJestConfig(customJestConfig)
```

**Create jest.setup.js:**
```javascript
import '@testing-library/jest-dom'
```

**Create test structure:**
```
src/
  app/
    __tests__/
      page.test.tsx
      layout.test.tsx
    components/
      layout/
        __tests__/
          Header.test.tsx
          Footer.test.tsx
```

**Example test file (src/app/__tests__/page.test.tsx):**
```typescript
import { render, screen } from '@testing-library/react';
import HomePage from '../page';

describe('HomePage', () => {
  it('renders the main heading', () => {
    render(<HomePage />);
    const heading = screen.getByText(/NOBLE/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the buy button', () => {
    render(<HomePage />);
    const buyButton = screen.getByText(/BUY THE BOOK/i);
    expect(buyButton).toBeInTheDocument();
  });
});
```

**Add test script to package.json:**
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

### 12. Final Verification
**Commands to run:**
```bash
npx tsc --strict --noEmit  # TypeScript check
npm run format:check        # Formatting check
npm run lint               # ESLint check
npm run test               # Run tests
npm run build              # Production build
```

## Priority Order
1. Run TypeScript strict check (Quick win - 5 mins)
2. Install Prettier and format code (Quick win - 10 mins)
3. Install ESLint plugins (Quick win - 10 mins)
4. Create test structure with placeholders (Foundation - 30 mins)
5. TypeScript interfaces (Foundation - 20 mins)
6. Navigation constants extraction (Refactor - 15 mins)
7. NavigationDropdown component (Refactor - 20 mins)
8. Header state consolidation (Refactor - 15 mins)
9. Accessibility fixes (Important - 15 mins)
10. Add explicit return types (TypeScript - 20 mins)
11. Image optimization (Performance - 10 mins)
12. Final verification (Testing - 10 mins)

## Estimated Time
- Total: 3-4 hours
- Quick wins (1-4): 55 minutes
- Core refactoring (5-11): 2 hours
- Verification: 10 minutes