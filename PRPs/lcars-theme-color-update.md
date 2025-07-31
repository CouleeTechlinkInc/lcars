# Project Requirements Prompt (PRP): LCARS v2 Theme System Color Update

## Project Overview
Update the LCARS v2 UI component library theme system to include comprehensive, purpose-driven colors from the official LCARS color scheme used in Star Trek: The Next Generation, Deep Space Nine, and Voyager.

## Objectives & Scope

### Primary Objectives
1. Replace the current basic color scheme (main, alt1, alt2) with a comprehensive, purpose-driven color system
2. Implement all official LCARS colors from Star Trek series
3. Create semantic color naming that reflects usage and purpose
4. Maintain backward compatibility with existing components
5. Ensure TypeScript type safety throughout the theme system

### Scope
- Update theme type definitions in `/src/providers/theme/theme.types.ts`
- Update default theme implementation in `/src/providers/theme/theme.tsx`
- Ensure all components using the theme remain functional
- Update Storybook stories to showcase new color options

## Technical Requirements

### Current Implementation Analysis
The current theme system uses:
- Basic colors: `main`, `alt1`, `alt2`
- Status colors: `active`, `inactive`, `warning`, `error`
- Text colors: `primary`, `secondary`, `accent`
- Components reference colors via `ThemeColors` type

### New Color System Structure

Based on research from the example CSS file and official LCARS documentation, implement:

#### Core LCARS Colors (from Voyager standard)
```typescript
// Primary interface colors
orange: '#FF9900'      // Primary interactive elements
mango: '#FF9966'       // Secondary interactive elements
lilac: '#CC99CC'       // Tertiary elements
purple: '#CC6699'      // Accent elements
brick: '#CC6666'       // Alert/warning elements
naples: '#FFCC99'      // Highlight elements
paleBlue: '#9999CC'    // Information displays
skyBlue: '#9999FF'     // Active states
bigBlue: '#6666FF'     // Nemesis/Defiant blue
gray: '#999999'        // Inactive states
```

#### Extended LCARS Palette
```typescript
// Full color system from example.css analysis
evening: '#2255FF'     // Primary frame color (currently "main")
midnight: '#1111EE'    // Deep accent blue
cool: '#5588FF'        // Light blue accent (currently "alt2")
honey: '#FFCC99'      // Warm accent (currently "alt1")
cardinal: '#CC2233'    // Critical/error states
tangerine: '#FF8833'   // Warning states
green: '#33CC99'       // Success/active states
galaxy: '#444A77'      // Muted inactive states
ghost: '#88BBFF'       // Text primary
moonshine: '#DDEEFF'   // Text highlight
wheat: '#CCAA88'       // Neutral warm
roseblush: '#CC6666'   // Alert variations
```

#### Semantic Color Mapping
```typescript
// Purpose-driven aliases
interface SemanticColors {
  // Frame elements
  frame: {
    primary: string;    // evening (#25F)
    secondary: string;  // cool (#58F)
    tertiary: string;   // honey (#FC9)
    accent: string;     // midnight (#11E)
  };
  
  // Interface states
  interface: {
    active: string;     // green (#3C9)
    inactive: string;   // galaxy (#444A77)
    hover: string;      // skyBlue (#99F)
    pressed: string;    // paleBlue (#99C)
  };
  
  // System states
  system: {
    success: string;    // green (#3C9)
    warning: string;    // tangerine (#F83)
    error: string;      // cardinal (#C23)
    info: string;       // cool (#58F)
  };
  
  // Content
  content: {
    primary: string;    // ghost (#8BF)
    secondary: string;  // evening (#26F)
    accent: string;     // moonshine (#DEF)
    link: string;       // cool (#58F)
  };
}
```

### Implementation Blueprint

#### Phase 1: Type System Update
```typescript
// theme.types.ts - Pseudocode approach
export type LCARSColorName = 
  | 'evening' | 'midnight' | 'cool' | 'honey' | 'cardinal'
  | 'tangerine' | 'green' | 'galaxy' | 'ghost' | 'moonshine'
  | 'orange' | 'mango' | 'lilac' | 'purple' | 'brick'
  | 'naples' | 'paleBlue' | 'skyBlue' | 'bigBlue' | 'gray'
  | 'wheat' | 'roseblush' | 'martian' | 'ice' | 'gold'
  | 'mars' | 'peach' | 'butterscotch' | 'tomato' | 'violet'
  | 'african-violet' | 'almond' | 'almond-creme' | 'bluey'
  | 'sky' | 'sunflower' | 'magenta' | 'violet-creme' | 'space-white';

// Maintain backward compatibility
export type ThemeColors = LCARSColorName | 'main' | 'alt1' | 'alt2';

// Extended theme interface
export interface Theme {
  colors: {
    // All LCARS colors
    lcars: Record<LCARSColorName, string>;
    
    // Semantic mappings
    semantic: SemanticColors;
    
    // Legacy support
    main: string;  // Maps to evening
    alt1: string;  // Maps to honey
    alt2: string;  // Maps to cool
    
    // Existing structure maintained
    background: string;
    text: {
      primary: string;
      secondary: string;
      accent: string;
    };
    status: {
      active: string;
      inactive: string;
      warning: string;
      error: string;
    };
  };
  // ... rest of theme structure unchanged
}
```

#### Phase 2: Default Theme Implementation
```typescript
// theme.tsx - Implementation approach
const lcarsColors = {
  // Core Voyager colors
  orange: '#FF9900',
  mango: '#FF9966',
  lilac: '#CC99CC',
  purple: '#CC6699',
  brick: '#CC6666',
  naples: '#FFCC99',
  paleBlue: '#9999CC',
  skyBlue: '#9999FF',
  bigBlue: '#6666FF',
  gray: '#999999',
  
  // Extended palette from example.css
  evening: '#2255FF',
  midnight: '#1111EE',
  cool: '#5588FF',
  honey: '#FFCC99',
  cardinal: '#CC2233',
  tangerine: '#FF8833',
  green: '#33CC99',
  galaxy: '#444A77',
  ghost: '#88BBFF',
  moonshine: '#DDEEFF',
  // ... complete list
};

// Create semantic mappings
const semanticColors = {
  frame: {
    primary: lcarsColors.evening,
    secondary: lcarsColors.cool,
    tertiary: lcarsColors.honey,
    accent: lcarsColors.midnight,
  },
  // ... rest of semantic mappings
};

// Maintain backward compatibility
export const defaultTheme: Theme = {
  colors: {
    lcars: lcarsColors,
    semantic: semanticColors,
    
    // Legacy mappings
    main: lcarsColors.evening,
    alt1: lcarsColors.honey,
    alt2: lcarsColors.cool,
    
    // Existing structure
    background: '#000000',
    text: {
      primary: lcarsColors.ghost,
      secondary: lcarsColors.evening,
      accent: lcarsColors.moonshine,
    },
    status: {
      active: lcarsColors.green,
      inactive: lcarsColors.galaxy,
      warning: lcarsColors.tangerine,
      error: lcarsColors.cardinal,
    },
  },
  // ... rest of theme unchanged
};
```

#### Phase 3: Component Compatibility Layer
```typescript
// Helper function for components
export function getThemeColor(theme: Theme, color: ThemeColors): string {
  // Check legacy names first
  if (color === 'main') return theme.colors.main;
  if (color === 'alt1') return theme.colors.alt1;
  if (color === 'alt2') return theme.colors.alt2;
  
  // Check LCARS colors
  if (color in theme.colors.lcars) {
    return theme.colors.lcars[color as LCARSColorName];
  }
  
  // Fallback to main
  console.warn(`Unknown color: ${color}, falling back to main`);
  return theme.colors.main;
}
```

### Error Handling Strategy
1. Maintain backward compatibility by keeping `main`, `alt1`, `alt2` as supported values
2. Provide clear migration warnings in console for deprecated color usage
3. Implement fallback to default color if unknown color is requested
4. Type-safe color selection with TypeScript unions

### Migration Path
1. Components continue to work with existing color props
2. New colors become available immediately
3. Gradual migration to semantic color names
4. Documentation updates to guide proper color usage

## Validation Gates

```bash
# TypeScript compilation check
npm run build

# Linting check
npm run lint

# Storybook build verification
npm run build-storybook

# Visual testing in Storybook
npm run storybook
# Then manually verify:
# - All existing stories render correctly
# - New color options appear in controls
# - Color changes apply correctly
# - No console errors or warnings

# Component usage verification
grep -r "ThemeColors\|useTheme" src/components/
# Ensure all components still compile

# Type safety verification
# Create a test file to verify type inference
echo "import { Theme } from './src/providers/theme/theme.types';
const testColor: Theme['colors']['lcars']['evening'] = '#2255FF';" > type-test.ts
npx tsc type-test.ts --noEmit
rm type-test.ts
```

## Testing Criteria
1. All existing components maintain current appearance with default theme
2. New colors are accessible via theme context
3. TypeScript provides proper autocomplete for new color names
4. Storybook controls show all available color options
5. No breaking changes to component APIs
6. Console warnings for deprecated usage patterns

## Code Quality Standards
1. Maintain existing code style and formatting
2. Add JSDoc comments for new color constants explaining their purpose
3. Update component prop documentation to reflect new color options
4. Ensure all color values follow proper hex format (#RRGGBB)
5. Group colors logically in the theme structure

## Documentation Requirements
1. Update theme type definitions with comprehensive comments
2. Add color usage guidelines as comments in theme.tsx
3. Create migration notes for moving from basic to semantic colors
4. Document the mapping between legacy and new color names

## References and Context

### Key Files to Modify
- `/src/providers/theme/theme.types.ts` - Type definitions
- `/src/providers/theme/theme.tsx` - Default theme implementation
- Components may need minor updates for better color support

### LCARS Color Documentation
- Official Voyager colors: https://www.thelcars.com/colors.php
- Extended palette from: `/src/example/example.css` (lines 1124-1682)
- Star Trek color guidelines: https://memory-alpha.fandom.com/wiki/Library_Computer_Access_and_Retrieval_System

### Design Principles
- Colors should reflect their usage (semantic naming)
- Maintain the authentic LCARS aesthetic
- Support both light and dark UI elements
- Enable quick state changes (alerts, status)

## Success Metrics
- Zero breaking changes to existing components
- All LCARS colors from reference materials implemented
- Clear, purpose-driven naming convention established
- Improved developer experience with better color discovery
- Maintains performance with no additional runtime overhead

## Confidence Score: 9/10

This PRP provides comprehensive context for implementing the LCARS color system update. The high confidence score reflects:
- Clear existing code structure analysis
- Complete color palette reference from example.css
- Detailed implementation blueprint with pseudocode
- Executable validation gates
- Strong backward compatibility approach
- Well-defined error handling strategy

The only uncertainty is potential edge cases in component usage that might require minor adjustments during implementation.