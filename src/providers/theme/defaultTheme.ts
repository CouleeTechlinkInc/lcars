import type { Theme, ThemeColors } from './theme.types';
import { lcarsColors } from './theme.utils';
import { themeVariants } from './themeVariants';

// Default theme uses Voyager variant
const voyagerSemantic = themeVariants.voyager.semantic;

// Default theme based on LCARS styling from example.css
export const defaultTheme: Theme = {
  // Default to Voyager variant
  variant: 'voyager',
  
  colors: {
    // All LCARS colors
    lcars: lcarsColors,
    
    // Semantic mappings from Voyager variant
    semantic: voyagerSemantic,
    
    // Legacy support - map to semantic colors
    main: voyagerSemantic.frame.primary,     // #2255FF
    alt1: voyagerSemantic.frame.accent,      // #FFCC99
    alt2: voyagerSemantic.frame.secondary,   // #5588FF
    
    // Existing structure maintained
    background: voyagerSemantic.background.base,
    text: {
      primary: voyagerSemantic.content.primary,
      secondary: voyagerSemantic.content.secondary,
      accent: voyagerSemantic.content.inverse,
    },
    status: {
      active: voyagerSemantic.status.success,
      inactive: voyagerSemantic.status.neutral,
      warning: voyagerSemantic.status.warning,
      error: voyagerSemantic.status.error,
    },
  },
  
  // Legacy color accessor for backward compatibility
  // This creates a flattened view of all colors for the old color prop
  color: {
    // Legacy colors
    main: voyagerSemantic.frame.primary,
    alt1: voyagerSemantic.frame.accent,
    alt2: voyagerSemantic.frame.secondary,
    // All LCARS colors
    ...lcarsColors,
    // System colors - flattened for backward compatibility
    background: voyagerSemantic.background.base,
  } as Record<ThemeColors, string> & { background: string },
  
  frame: {
    size: {
      sm: 16,
      md: 100,
      lg: 130,
    },
    border: {
      radius: {
        sm: 20,
        md: 26,
        lg: 40,
      },
      width: 5,
    },
  },
  spacing: {
    xs: 5,
    sm: 10,
    md: 15,
    lg: 25,
    xl: 50,
  },
  typography: {
    fontFamily: "'Antonio', 'Arial Narrow', 'Avenir Next Condensed', sans-serif",
    fontSize: {
      sm: '0.88rem',
      md: '1.35rem',
      lg: '1.64rem',
    },
  },
};