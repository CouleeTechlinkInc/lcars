# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an LCARS v2 UI component library built with React, TypeScript, Vite, and Storybook. LCARS (Library Computer Access/Retrieval System) is the fictional computer interface from Star Trek.

## Common Development Commands

### Development
- `npm run dev` - Start Vite development server
- `npm run storybook` - Start Storybook development server on port 5000

### Build & Quality
- `npm run build` - TypeScript compile and Vite build
- `npm run lint` - Run ESLint
- `npm run build-storybook` - Build Storybook for production

### Preview
- `npm run preview` - Preview production build

## Architecture

### Component Structure
The project follows a modular component architecture:

- **Components** (`/src/components/`) - UI components organized by feature
  - `Corner/` - LCARS-style corner components (Corner, InnerCornerPart, MainCornerPart)
  - `Frame/` - Frame component that combines corners and sidebars
  - `Sidebar/` - Sidebar components for frame edges

- **Theme System** (`/src/providers/theme/`)
  - Type-safe theme configuration using TypeScript
  - Supports colors (main, alt1, alt2), frame sizes (sm, md, lg), spacing, and typography
  - Theme context provider for component access

- **Stories** (`/src/stories/`) - Storybook stories for component documentation and testing

### Key Design Patterns

1. **Theme-driven styling**: Components use the theme provider for consistent styling
2. **TypeScript interfaces**: All components have well-defined prop types
3. **Storybook-first development**: Components are developed and documented in Storybook
4. **CSS Modules**: Component-specific styles are co-located with components

### Component Dependencies
- Frame uses Corner and Sidebar components
- All components depend on the theme provider
- Components calculate sizes dynamically based on theme values

## Testing Approach
The project has Vitest configured but no test commands in package.json. To run tests, you would need to add appropriate test scripts or use Vitest directly.