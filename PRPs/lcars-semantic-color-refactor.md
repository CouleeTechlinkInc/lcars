# PRP: LCARS Theme Color System - Purpose-Driven Naming Refactor

## Overview
Refactor the LCARS theme color system from appearance-based naming (e.g., "evening", "honey") to purpose-driven semantic naming. This will enable flexible theming while maintaining the iconic LCARS aesthetic across different Star Trek series variations.

## Objectives
1. Replace appearance-based color names with purpose-driven semantic tokens
2. Support multiple theme variants (TNG, DS9, Voyager, Discovery)
3. Maintain backward compatibility during migration
4. Ensure all components use semantic color tokens
5. Enable dynamic theme switching without breaking visual hierarchy

## Research Context

### Current Implementation Analysis
The theme system currently has:
- 70+ LCARS colors with appearance names (`/src/providers/theme/theme.utils.ts`)
- Basic semantic layer with 4 categories (frame, interface, system, content)
- Legacy color accessors (`theme.color[colorName]`)
- Components using direct color references

### Industry Best Practices (2024)
Based on research:
- Material Design 3 uses semantic tokens like `color-primary`, `color-on-primary`
- IBM Carbon uses tokens like `interactive-01`, `danger-01`
- Semantic naming improves maintainability and enables theme flexibility
- Purpose-driven names clarify usage intent

Reference URLs:
- Material Design tokens: https://m3.material.io/foundations/design-tokens/overview
- Semantic color best practices: https://www.smashingmagazine.com/2024/05/naming-best-practices/
- Enterprise design systems: https://www.aufaitux.com/blog/color-tokens-enterprise-design-systems-best-practices/

## Implementation Blueprint

### 1. Comprehensive Semantic Color Structure

```typescript
interface SemanticColors {
  // Frame & Structure (LCARS signature elements)
  frame: {
    primary: string;        // Main frame color
    secondary: string;      // Secondary frame elements
    accent: string;         // Frame accents and highlights
    divider: string;        // Frame dividers
    corner: string;         // Corner piece color
    sidebar: string;        // Sidebar default color
    topbar: string;         // Top/bottom bar default
  };
  
  // Interactive Elements
  action: {
    primary: string;        // Primary buttons/controls
    primaryHover: string;   // Primary hover state
    primaryActive: string;  // Primary pressed state
    secondary: string;      // Secondary actions
    secondaryHover: string;
    secondaryActive: string;
    disabled: string;       // Disabled state
    focus: string;          // Focus indicators
  };
  
  // Navigation & Menu
  navigation: {
    item: string;           // Menu item default
    itemHover: string;      // Menu item hover
    itemActive: string;     // Current/selected item
    itemDisabled: string;   // Disabled menu item
    indicator: string;      // Active page indicator
    breadcrumb: string;     // Breadcrumb links
  };
  
  // Status & Alerts (with severity levels)
  status: {
    info: string;           // Information
    infoLight: string;      // Info variant
    success: string;        // Success/positive
    successLight: string;   
    warning: string;        // Warning
    warningLight: string;
    warningCritical: string; // High priority warning
    error: string;          // Error/failure
    errorLight: string;
    errorCritical: string;  // Critical error
    neutral: string;        // Neutral status
  };
  
  // Content & Typography
  content: {
    primary: string;        // Primary text
    secondary: string;      // Secondary text
    tertiary: string;       // Muted/disabled text
    inverse: string;        // Text on dark backgrounds
    link: string;           // Links default
    linkHover: string;      // Links hover
    linkVisited: string;    // Visited links
    code: string;           // Code/monospace text
    heading: string;        // Headings
  };
  
  // Backgrounds & Surfaces
  background: {
    base: string;           // Page background
    elevated: string;       // Raised surfaces
    elevatedHigher: string; // Modals/overlays
    depressed: string;      // Inset areas
    overlay: string;        // Overlay scrim
    stripe: string;         // Alternating rows
  };
  
  // Data Visualization
  data: {
    series1: string;        // Chart series 1
    series2: string;        // Chart series 2
    series3: string;        // Chart series 3
    series4: string;        // Chart series 4
    series5: string;        // Chart series 5
    positive: string;       // Positive values
    negative: string;       // Negative values
    neutral: string;        // Neutral/zero values
  };
  
  // Special LCARS Elements
  lcars: {
    sweep: string;          // Curved sweep elements
    elbow: string;          // Elbow connectors
    pill: string;           // Pill-shaped buttons
    bracket: string;        // Bracket elements
    terminal: string;       // Terminal/console text
    hologram: string;       // Holographic elements
    alert: string;          // Red alert color
    caution: string;        // Yellow alert color
  };
}
```

### 2. Theme Variant Mappings

```typescript
// Theme variants map semantic purposes to actual LCARS colors
const themeVariants = {
  voyager: {
    frame: {
      primary: lcarsColors.evening,      // #2255FF
      secondary: lcarsColors.cool,        // #5588FF
      accent: lcarsColors.honey,          // #FFCC99
      // ... etc
    }
  },
  tng: {
    frame: {
      primary: lcarsColors.orange,        // #FF9900
      secondary: lcarsColors.lilac,       // #CC99CC
      accent: lcarsColors.paleBlue,       // #9999CC
      // ... etc
    }
  },
  ds9: {
    frame: {
      primary: lcarsColors.bigBlue,       // #6666FF
      secondary: lcarsColors.purple,      // #CC6699
      accent: lcarsColors.mango,          // #FF9966
      // ... etc
    }
  }
};
```

### 3. Migration Strategy

#### Phase 1: Extend Current System
1. Keep existing LCARS color definitions
2. Expand semantic categories to cover all use cases
3. Add theme variant support
4. Create migration utilities

#### Phase 2: Update Components
1. Update theme provider to support new structure
2. Create color accessor hook: `useSemanticColor()`
3. Migrate components one by one
4. Maintain backward compatibility layer

#### Phase 3: Deprecate Legacy
1. Mark appearance-based names as deprecated
2. Add console warnings for legacy usage
3. Provide automated migration script
4. Remove legacy support in next major version

### 4. Implementation Tasks

1. **Expand Semantic Color Types** (`theme.types.ts`)
   - Define comprehensive SemanticColors interface
   - Add theme variant types
   - Update Theme interface

2. **Create Theme Variants** (`themeVariants.ts`)
   - Map semantic purposes to LCARS colors for each variant
   - Ensure contrast compliance
   - Document usage guidelines

3. **Build Migration Utilities** (`theme.migration.ts`)
   - Color usage analyzer
   - Automated refactoring helpers
   - Deprecation warnings

4. **Update Theme Provider** (`theme.tsx`)
   - Support theme variant switching
   - Add semantic color context
   - Maintain backward compatibility

5. **Create Color Hook** (`useSemanticColor.ts`)
   - Type-safe color accessor
   - IntelliSense support
   - Usage tracking for migration

6. **Migrate Components**
   - Start with Frame component
   - Update color prop types
   - Test all variants

7. **Documentation & Stories**
   - Update Storybook stories
   - Create migration guide
   - Add color usage examples

## Validation Gates

```bash
# TypeScript compilation
npm run build

# Linting
npm run lint

# Storybook visual testing
npm run storybook
# Manually verify all components render correctly with each theme variant

# Component testing checklist
# - [ ] Frame component works with all theme variants
# - [ ] Corner components use semantic colors
# - [ ] Sidebar components theme correctly
# - [ ] No hardcoded color values remain
# - [ ] Console shows no deprecation warnings
# - [ ] All Storybook stories render correctly
```

## Success Criteria
1. All components use semantic color tokens
2. Theme switching works without visual breaks
3. Backward compatibility maintained
4. Zero TypeScript errors
5. All Storybook stories functional
6. Clear migration path documented

## Implementation References

### Files to Update:
- `/src/providers/theme/theme.types.ts` - Expand interfaces
- `/src/providers/theme/defaultTheme.ts` - Update default mappings
- `/src/providers/theme/theme.tsx` - Enhance provider
- `/src/providers/theme/themeVariants.ts` - NEW: Theme variants
- `/src/providers/theme/useSemanticColor.ts` - NEW: Color hook
- `/src/components/**/*.tsx` - Update all components

### Patterns to Follow:
- Use existing semantic structure as base
- Follow current TypeScript patterns
- Maintain existing file organization
- Use established naming conventions

## Gotchas & Considerations

1. **Contrast Compliance**: Some LCARS colors may not meet WCAG standards. Document which semantic tokens are accessibility-safe.

2. **Component Props**: Components currently accept `ThemeColors` type. Need strategy for graceful migration.

3. **Storybook Integration**: Stories may need updates to showcase theme variants.

4. **Performance**: Theme switching should not cause re-renders of unchanged components.

5. **Developer Experience**: Provide clear IntelliSense and TypeScript errors for incorrect usage.

## Confidence Score: 8/10

The PRP provides comprehensive context and clear implementation steps. The existing semantic layer provides a solid foundation to build upon. Main complexity lies in maintaining backward compatibility while migrating components. With the detailed blueprint and validation gates, successful one-pass implementation is highly achievable.