# PRP: TopBar Component for LCARS v2 UI Library

## Executive Summary
Create a TopBar component that mirrors the Sidebar component's implementation patterns, integrating seamlessly with the existing Frame component and theme system. This component will provide horizontal bar functionality for the LCARS UI, supporting theme-based sizing and colors.

## Context and Requirements

### Primary Requirements
1. **Pattern Consistency**: Follow the exact same coding style and patterns as the Sidebar component
2. **Frame Integration**: Seamlessly integrate with the existing Frame component
3. **Theme Support**: Use the theme provider for all styling decisions
4. **Size Variants**: Support sm, md, lg sizes from the theme system
5. **TypeScript**: Proper interfaces following existing patterns
6. **Storybook**: Comprehensive stories for documentation

### Research Findings

#### Existing Patterns Analysis
Based on the codebase analysis, the following patterns must be followed:

1. **Component Structure** (from Sidebar.tsx):
   ```typescript
   export interface ComponentProps {
       children?: React.ReactNode;
       size?: ThemeFrameSize;
       color?: ThemeColors;
       position?: 'specific-positions';
       positioning-props?: number;
   }
   ```

2. **Theme Integration**:
   - Import `useTheme` hook and theme types
   - Use theme values for dimensions and colors
   - Default values: size='md', color='main'

3. **Absolute Positioning**:
   - Components use absolute positioning within Frame
   - Position calculations consider corner components
   - Dynamic style objects based on props

4. **Frame Integration Pattern** (from Frame.tsx):
   - Frame manages topWidth and bottomWidth properties
   - Corner calculations: `Math.min(verticalSize, horizontalSize)`
   - Conditional rendering based on 'none' values

#### LCARS Design Principles
From research on LCARS UI patterns:
- Horizontal bars are key visual elements in LCARS interfaces
- They serve as both decorative elements and functional containers
- Characteristic rounded corners (handled by Corner components)
- Pastel color tones from the theme system

### Component Specification

#### TopBar Interface
```typescript
export interface TopBarProps {
    children?: React.ReactNode;
    height?: ThemeFrameSize;
    color?: ThemeColors;
    position?: 'top' | 'bottom';
    left?: number;
    right?: number;
}
```

#### Implementation Blueprint

```typescript
// Pseudocode for TopBar implementation
1. Import dependencies (useTheme, theme types)
2. Define TopBarProps interface
3. Create TopBar functional component:
   - Extract theme using useTheme()
   - Calculate height from theme.frame.size[height ?? 'md']
   - Get backgroundColor from theme.color[color ?? 'main']
   - Return div with absolute positioning:
     - height: calculated from theme
     - width: dynamic based on left/right props
     - position: absolute
     - [position]: 0 (top or bottom)
     - left/right: props or 0
     - backgroundColor: from theme
```

#### Frame Integration Changes
The Frame component needs updates to:
1. Import TopBar component
2. Add TopBar rendering logic after Sidebar components
3. Calculate proper left/right positioning considering corners:
   - Left position: leftWidth !== 'none' ? leftWidthNum + cornerSize : 0
   - Right position: rightWidth !== 'none' ? rightWidthNum + cornerSize : 0

### File Structure
```
src/components/
├── TopBar/
│   └── TopBar.tsx
├── Frame/
│   └── Frame.tsx (modified)
└── ...

src/stories/
├── TopBar.stories.tsx (new)
└── Frame.stories.tsx (potentially updated)
```

### Implementation Tasks

1. **Create TopBar Component** (/src/components/TopBar/TopBar.tsx)
   - Follow Sidebar.tsx patterns exactly
   - Implement proper TypeScript interfaces
   - Use theme provider for styling
   - Support all required props

2. **Update Frame Component** (/src/components/Frame/Frame.tsx)
   - Import TopBar component
   - Add TopBar rendering logic
   - Calculate proper positioning with corner offsets
   - Maintain existing functionality

3. **Create TopBar Stories** (/src/stories/TopBar.stories.tsx)
   - Follow Frame.stories.tsx patterns
   - Include all prop variations
   - Add visual examples
   - Use fullscreen layout with black background

4. **Integration Testing**
   - Verify TopBar renders correctly in Frame
   - Test all size and color combinations
   - Ensure proper positioning with corners
   - Validate responsive behavior

### Validation Gates

```bash
# TypeScript compilation
npm run build

# Linting
npm run lint

# Storybook verification
npm run storybook
# Then manually verify:
# - TopBar stories render correctly
# - Frame stories show TopBar integration
# - All props work as expected
# - Visual consistency with LCARS design
```

### Critical Implementation Notes

1. **Positioning Logic**: TopBar must account for corner components when calculating left/right positions. The formula should be:
   - Left: `leftWidth !== 'none' ? theme.frame.size[leftWidth] + Math.min(leftSize, topSize) : 0`
   - Right: `rightWidth !== 'none' ? theme.frame.size[rightWidth] + Math.min(rightSize, topSize) : 0`

2. **Style Object Pattern**: Follow the exact pattern from Sidebar:
   ```typescript
   const style: React.CSSProperties = {
       backgroundColor,
       height: heightNum,
       position: 'absolute',
       // ... other properties
   }
   ```

3. **Default Props**: Use the same pattern as Sidebar for defaults in the function signature

4. **Theme Access**: Always destructure theme values at the component level, not inline

### Success Criteria
- [ ] TopBar component follows exact Sidebar patterns
- [ ] Frame integration works seamlessly
- [ ] All theme sizes and colors supported
- [ ] TypeScript types are properly defined
- [ ] Storybook stories demonstrate all features
- [ ] No linting errors
- [ ] Build passes successfully

### References and Resources

1. **Internal References**:
   - `/src/components/Sidebar/Sidebar.tsx` - Pattern reference
   - `/src/components/Frame/Frame.tsx` - Integration point
   - `/src/providers/theme/theme.types.ts` - Type definitions
   - `/src/stories/Frame.stories.tsx` - Story patterns

2. **External Resources**:
   - LCARS Design Guidelines: http://www.lcars-terminal.de/tutorial/guideline.htm
   - React TypeScript Patterns: https://react-typescript-cheatsheet.netlify.app/docs/advanced/patterns_by_usecase/
   - Storybook Best Practices: https://storybook.js.org/docs/writing-stories

## Confidence Score: 9/10

The high confidence score is based on:
- Clear existing patterns to follow (Sidebar component)
- Well-defined theme system and types
- Straightforward integration approach
- Comprehensive validation gates
- All necessary context included

The only minor uncertainty is around the exact corner offset calculations, but the pattern is clear from the Frame component's existing logic.