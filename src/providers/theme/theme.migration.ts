/**
 * Migration utilities for transitioning from appearance-based to semantic color names
 */

import type { ThemeColors } from './theme.types';

/**
 * Mapping of deprecated appearance-based names to suggested semantic paths
 */
export const colorMigrationMap: Record<string, string[]> = {
  // Legacy colors
  'main': ['frame.primary', 'content.heading'],
  'alt1': ['frame.accent', 'action.secondary'],
  'alt2': ['frame.secondary', 'navigation.item'],
  
  // LCARS appearance-based colors to semantic suggestions
  'evening': ['frame.primary', 'content.heading'],
  'midnight': ['frame.divider', 'lcars.bracket'],
  'cool': ['frame.secondary', 'status.info'],
  'honey': ['frame.accent', 'navigation.indicator'],
  'cardinal': ['status.error', 'lcars.alert'],
  'tangerine': ['status.warning', 'lcars.caution'],
  'green': ['status.success', 'action.primaryActive'],
  'galaxy': ['navigation.itemDisabled', 'action.disabled'],
  'ghost': ['content.primary'],
  'moonshine': ['content.inverse'],
  'orange': ['action.primary', 'data.series1'],
  'mango': ['action.primaryHover', 'lcars.pill'],
  'lilac': ['action.secondary', 'navigation.item'],
  'purple': ['action.secondaryHover', 'data.series4'],
  'brick': ['status.errorLight'],
  'paleBlue': ['content.linkVisited', 'action.pressed'],
  'skyBlue': ['content.link', 'action.focus'],
  'bigBlue': ['content.linkHover', 'lcars.sweep'],
  'gray': ['action.disabled', 'status.neutral'],
};

/**
 * Deprecation warning tracker to avoid spamming console
 */
const deprecationWarnings = new Set<string>();

/**
 * Log deprecation warning for color usage
 */
export function logColorDeprecation(
  colorName: ThemeColors,
  componentName?: string,
  suggestedAlternatives?: string[]
): void {
  const warningKey = `${colorName}-${componentName || 'unknown'}`;
  
  if (!deprecationWarnings.has(warningKey)) {
    deprecationWarnings.add(warningKey);
    
    const alternatives = suggestedAlternatives || colorMigrationMap[colorName] || [];
    const component = componentName ? ` in ${componentName}` : '';
    
    console.warn(
      `[LCARS Theme] Deprecated color usage: "${colorName}"${component}.\n` +
      `This appearance-based color name will be removed in a future version.\n` +
      `Consider using semantic colors instead:\n` +
      alternatives.map(alt => `  - theme.colors.semantic.${alt}`).join('\n') +
      '\n\nFor migration help, see: https://github.com/your-repo/lcars-v2/docs/color-migration.md'
    );
  }
}

/**
 * Analyze component for deprecated color usage
 */
export function analyzeColorUsage(
  componentCode: string,
  _componentName: string
): { deprecated: string[], suggestions: Record<string, string[]> } {
  const deprecated: string[] = [];
  const suggestions: Record<string, string[]> = {};
  
  // Pattern to match theme.color[colorName] or color prop usage
  const colorUsagePattern = /theme\.color\[['"]([^'"]+)['"]\]|color\s*=\s*['"]([^'"]+)['"]/g;
  
  let match;
  while ((match = colorUsagePattern.exec(componentCode)) !== null) {
    const colorName = match[1] || match[2];
    
    if (colorName in colorMigrationMap || ['main', 'alt1', 'alt2'].includes(colorName)) {
      deprecated.push(colorName);
      suggestions[colorName] = colorMigrationMap[colorName] || [];
    }
  }
  
  return { deprecated: [...new Set(deprecated)], suggestions };
}

/**
 * Migration helper to convert old color prop to semantic color
 */
export function migrateColorProp(
  color: ThemeColors | undefined,
  context: 'frame' | 'action' | 'navigation' | 'status' | 'content',
  defaultSemantic: string
): string {
  if (!color) {
    return defaultSemantic;
  }
  
  // Check if it's already a semantic path
  if (color.includes('.')) {
    return color;
  }
  
  // Log deprecation for appearance-based colors
  if (color in colorMigrationMap || ['main', 'alt1', 'alt2'].includes(color)) {
    const suggestions = colorMigrationMap[color] || [];
    const contextSuggestions = suggestions.filter(s => s.startsWith(context));
    
    logColorDeprecation(
      color,
      'Component',
      contextSuggestions.length > 0 ? contextSuggestions : suggestions
    );
  }
  
  // Return the semantic path based on context and color
  const migrationKey = `${context}.${color}`;
  return migrationKey;
}

/**
 * Create a migration report for a codebase
 */
export interface MigrationReport {
  totalFiles: number;
  filesWithDeprecated: number;
  deprecatedUsages: Array<{
    file: string;
    component: string;
    colors: string[];
    suggestions: Record<string, string[]>;
  }>;
  summary: {
    byColor: Record<string, number>;
    byComponent: Record<string, number>;
  };
}

/**
 * Generate migration report (placeholder for actual implementation)
 */
export function generateMigrationReport(files: Array<{ path: string; content: string }>): MigrationReport {
  const report: MigrationReport = {
    totalFiles: files.length,
    filesWithDeprecated: 0,
    deprecatedUsages: [],
    summary: {
      byColor: {},
      byComponent: {},
    },
  };
  
  // This would analyze each file and generate a comprehensive report
  // Implementation details omitted for brevity
  
  return report;
}

/**
 * Helper to check if a color name is deprecated
 */
export function isDeprecatedColor(color: string): boolean {
  return color in colorMigrationMap || ['main', 'alt1', 'alt2'].includes(color);
}

/**
 * Get semantic color suggestions for a deprecated color
 */
export function getSemanticSuggestions(
  deprecatedColor: string,
  usageContext?: 'frame' | 'action' | 'navigation' | 'status' | 'content'
): string[] {
  const allSuggestions = colorMigrationMap[deprecatedColor] || [];
  
  if (usageContext) {
    const contextSuggestions = allSuggestions.filter(s => s.startsWith(usageContext));
    return contextSuggestions.length > 0 ? contextSuggestions : allSuggestions;
  }
  
  return allSuggestions;
}

/**
 * Runtime color migration for backward compatibility
 */
export function migrateColorAtRuntime(
  color: ThemeColors,
  semanticColors: Record<string, any>
): string | null {
  // If it's already a semantic path, resolve it
  if (color.includes('.')) {
    const parts = color.split('.');
    let current = semanticColors;
    
    for (const part of parts) {
      if (current[part]) {
        current = current[part];
      } else {
        return null;
      }
    }
    
    return typeof current === 'string' ? current : null;
  }
  
  // For legacy colors, use the first suggested mapping
  const suggestions = colorMigrationMap[color];
  if (suggestions && suggestions.length > 0) {
    return migrateColorAtRuntime(suggestions[0] as ThemeColors, semanticColors);
  }
  
  return null;
}