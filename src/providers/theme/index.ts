export { ThemeProvider, useTheme, useThemeContext, ThemeContext } from './theme';
export { defaultTheme } from './defaultTheme';
export { getThemeColor, lcarsColors } from './theme.utils';
export { useSemanticColor, useSemanticColors, getSemanticColor, isSemanticColorPath } from './useSemanticColor';
export type { SemanticColorPath } from './useSemanticColor';
export { themeVariants, getThemeVariant, createCustomVariant } from './themeVariants';
export { 
  logColorDeprecation, 
  analyzeColorUsage, 
  migrateColorProp, 
  isDeprecatedColor, 
  getSemanticSuggestions 
} from './theme.migration';
export type { MigrationReport } from './theme.migration';
export type { 
  Theme, 
  ThemeColors, 
  LCARSColorName, 
  SemanticColors, 
  ThemeFrameSize, 
  ThemeVariant, 
  ThemeVariantConfig 
} from './theme.types';