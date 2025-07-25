import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { Theme } from './theme.types';

// Theme interface defining the structure


// Default theme based on LCARS styling from example.css
export const defaultTheme: Theme = {
  color: {
    main: '#25f',
    alt1: '#fc9',
    alt2: '#58f',
    background: '#000',
    text: {
      primary: '#8bf',
      secondary: '#26f',
      accent: '#def',
    },
    status: {
      active: '#3c9',
      inactive: '#444a77',
      warning: '#f83',
      error: '#c23',
    },
  },
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

// Create the theme context with default value
const ThemeContext = createContext<Theme>(defaultTheme);

// Theme provider props
interface ThemeProviderProps {
  children: ReactNode;
  theme?: Partial<Theme>;
}

// Deep merge function to combine default theme with custom theme
function deepMerge<T extends Record<string, any>>(target: T, source: Partial<T>): T {
  const result = { ...target };
  
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key], source[key] as any);
    } else if (source[key] !== undefined) {
      result[key] = source[key] as any;
    }
  }
  
  return result;
}

// Theme provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  theme: customTheme 
}) => {
  // Merge custom theme with default theme
  const mergedTheme = customTheme 
    ? deepMerge(defaultTheme, customTheme)
    : defaultTheme;

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = (): Theme => {
  const theme = useContext(ThemeContext);
  
  if (!theme) {
    // This should never happen due to default value, but keeping for safety
    console.warn('useTheme must be used within a ThemeProvider. Using default theme.');
    return defaultTheme;
  }
  
  return theme;
};

// Export the context for advanced use cases
export { ThemeContext };
