import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { Theme, ThemeVariant, SemanticColors } from './theme.types';
import { defaultTheme } from './defaultTheme';
import { getThemeVariant, createCustomVariant } from './themeVariants';
import { lcarsColors } from './theme.utils';

// Theme context value interface
interface ThemeContextValue {
  theme: Theme;
  variant: ThemeVariant;
  setVariant: (variant: ThemeVariant) => void;
  setCustomSemanticColors: (semantic: SemanticColors) => void;
}

// Create the theme context with default value
const ThemeContext = createContext<ThemeContextValue>({
  theme: defaultTheme,
  variant: 'voyager',
  setVariant: () => {},
  setCustomSemanticColors: () => {},
});

// Theme provider props
interface ThemeProviderProps {
  children: ReactNode;
  theme?: Partial<Theme>;
  variant?: ThemeVariant;
  customSemantic?: SemanticColors;
}

// Deep merge function to combine default theme with custom theme
function deepMerge(target: Theme, source: Partial<Theme>): Theme {
  const result = { ...target };
  
  for (const key in source) {
    const sourceValue = source[key as keyof Theme];
    const targetValue = result[key as keyof Theme];
    
    if (sourceValue && typeof sourceValue === 'object' && !Array.isArray(sourceValue) &&
        targetValue && typeof targetValue === 'object' && !Array.isArray(targetValue)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result as any)[key] = deepMerge(
        targetValue as any, 
        sourceValue as any
      );
    } else if (sourceValue !== undefined) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (result as any)[key] = sourceValue;
    }
  }
  
  return result;
}

// Create theme with variant
function createThemeWithVariant(
  baseTheme: Theme,
  variant: ThemeVariant,
  customSemantic?: SemanticColors
): Theme {
  const variantConfig = variant === 'custom' && customSemantic
    ? createCustomVariant(customSemantic)
    : getThemeVariant(variant);
  
  // Update the theme with the variant's semantic colors
  const theme: Theme = {
    ...baseTheme,
    variant,
    colors: {
      ...baseTheme.colors,
      semantic: variantConfig.semantic,
      // Update legacy mappings based on variant
      main: variantConfig.semantic.frame.primary,
      alt1: variantConfig.semantic.frame.accent,
      alt2: variantConfig.semantic.frame.secondary,
      // Update existing structure for backward compatibility
      text: {
        primary: variantConfig.semantic.content.primary,
        secondary: variantConfig.semantic.content.secondary,
        accent: variantConfig.semantic.content.inverse,
      },
      status: {
        active: variantConfig.semantic.status.success,
        inactive: variantConfig.semantic.status.neutral,
        warning: variantConfig.semantic.status.warning,
        error: variantConfig.semantic.status.error,
      },
    },
  };
  
  // Update legacy color accessor
  theme.color = {
    // Legacy colors
    main: theme.colors.main,
    alt1: theme.colors.alt1,
    alt2: theme.colors.alt2,
    // All LCARS colors
    ...lcarsColors,
    // System colors
    background: theme.colors.background,
  };
  
  return theme;
}

// Theme provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  theme: customTheme,
  variant: initialVariant = 'voyager',
  customSemantic,
}) => {
  const [variant, setVariant] = useState<ThemeVariant>(initialVariant);
  const [customSemanticColors, setCustomSemanticColors] = useState<SemanticColors | undefined>(customSemantic);
  
  // Create the theme with variant
  const theme = useMemo(() => {
    const baseTheme = customTheme 
      ? deepMerge(defaultTheme, customTheme)
      : defaultTheme;
    
    return createThemeWithVariant(baseTheme, variant, customSemanticColors);
  }, [customTheme, variant, customSemanticColors]);
  
  // Handler to change variant
  const handleSetVariant = useCallback((newVariant: ThemeVariant) => {
    setVariant(newVariant);
    if (newVariant !== 'custom') {
      setCustomSemanticColors(undefined);
    }
  }, []);
  
  // Handler to set custom semantic colors
  const handleSetCustomSemanticColors = useCallback((semantic: SemanticColors) => {
    setCustomSemanticColors(semantic);
    setVariant('custom');
  }, []);
  
  const contextValue = useMemo(
    () => ({
      theme,
      variant,
      setVariant: handleSetVariant,
      setCustomSemanticColors: handleSetCustomSemanticColors,
    }),
    [theme, variant, handleSetVariant, handleSetCustomSemanticColors]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): Theme => {
  const { theme } = useContext(ThemeContext);
  
  if (!theme) {
    // This should never happen due to default value, but keeping for safety
    console.warn('useTheme must be used within a ThemeProvider. Using default theme.');
    return defaultTheme;
  }
  
  return theme;
};

// Custom hook to use theme context (includes variant controls)
// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  
  return context;
};

// Export the context for advanced use cases
export { ThemeContext };
