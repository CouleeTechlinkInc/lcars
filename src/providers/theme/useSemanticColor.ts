import { useTheme } from './theme';
import { logColorDeprecation, migrateColorAtRuntime } from './theme.migration';
import type { ThemeColors } from './theme.types';

/**
 * Type-safe semantic color paths
 */
export type SemanticColorPath = 
  // Frame & Structure
  | 'frame.primary'
  | 'frame.secondary'
  | 'frame.accent'
  | 'frame.divider'
  | 'frame.corner'
  | 'frame.sidebar'
  | 'frame.topbar'
  // Interactive Elements
  | 'action.primary'
  | 'action.primaryHover'
  | 'action.primaryActive'
  | 'action.secondary'
  | 'action.secondaryHover'
  | 'action.secondaryActive'
  | 'action.disabled'
  | 'action.focus'
  // Navigation & Menu
  | 'navigation.item'
  | 'navigation.itemHover'
  | 'navigation.itemActive'
  | 'navigation.itemDisabled'
  | 'navigation.indicator'
  | 'navigation.breadcrumb'
  // Status & Alerts
  | 'status.info'
  | 'status.infoLight'
  | 'status.success'
  | 'status.successLight'
  | 'status.warning'
  | 'status.warningLight'
  | 'status.warningCritical'
  | 'status.error'
  | 'status.errorLight'
  | 'status.errorCritical'
  | 'status.neutral'
  // Content & Typography
  | 'content.primary'
  | 'content.secondary'
  | 'content.tertiary'
  | 'content.inverse'
  | 'content.link'
  | 'content.linkHover'
  | 'content.linkVisited'
  | 'content.code'
  | 'content.heading'
  // Backgrounds & Surfaces
  | 'background.base'
  | 'background.elevated'
  | 'background.elevatedHigher'
  | 'background.depressed'
  | 'background.overlay'
  | 'background.stripe'
  // Data Visualization
  | 'data.series1'
  | 'data.series2'
  | 'data.series3'
  | 'data.series4'
  | 'data.series5'
  | 'data.positive'
  | 'data.negative'
  | 'data.neutral'
  // Special LCARS Elements
  | 'lcars.sweep'
  | 'lcars.elbow'
  | 'lcars.pill'
  | 'lcars.bracket'
  | 'lcars.terminal'
  | 'lcars.hologram'
  | 'lcars.alert'
  | 'lcars.caution';

/**
 * Hook to get semantic colors with type safety and migration support
 * 
 * @example
 * ```typescript
 * const frameColor = useSemanticColor('frame.primary');
 * const statusColor = useSemanticColor('status.success');
 * ```
 */
export function useSemanticColor(path: SemanticColorPath): string;
export function useSemanticColor(path: ThemeColors, componentName?: string): string;
export function useSemanticColor(
  path: SemanticColorPath | ThemeColors,
  componentName?: string
): string {
  const theme = useTheme();
  
  // Handle semantic paths
  if (path.includes('.')) {
    const parts = path.split('.');
    let current: any = theme.colors.semantic;
    
    for (const part of parts) {
      if (current && current[part]) {
        current = current[part];
      } else {
        console.error(`Invalid semantic color path: ${path}`);
        return theme.colors.semantic.frame.primary; // Fallback
      }
    }
    
    return current;
  }
  
  // Handle legacy color names with deprecation warning
  const isLegacy = ['main', 'alt1', 'alt2'].includes(path);
  const isAppearanceBased = path in theme.colors.lcars;
  
  if (isLegacy || isAppearanceBased) {
    logColorDeprecation(path as ThemeColors, componentName);
    
    // Try to migrate to semantic color
    const migratedColor = migrateColorAtRuntime(path as ThemeColors, theme.colors.semantic);
    if (migratedColor) {
      return migratedColor;
    }
  }
  
  // Fallback to legacy accessor
  if (path in theme.color) {
    return theme.color[path as ThemeColors];
  }
  
  console.error(`Unknown color: ${path}`);
  return theme.colors.semantic.frame.primary; // Fallback
}

/**
 * Hook to get multiple semantic colors at once
 * 
 * @example
 * ```typescript
 * const { primary, secondary } = useSemanticColors({
 *   primary: 'frame.primary',
 *   secondary: 'frame.secondary'
 * });
 * ```
 */
export function useSemanticColors<T extends Record<string, SemanticColorPath>>(
  paths: T
): Record<keyof T, string> {
  const theme = useTheme();
  const result: Record<string, string> = {};
  
  for (const key in paths) {
    result[key] = getSemanticColor(theme, paths[key]);
  }
  
  return result as Record<keyof T, string>;
}

/**
 * Get color value from a semantic path without using hooks
 * Useful for non-component contexts
 */
export function getSemanticColor(
  theme: ReturnType<typeof useTheme>,
  path: SemanticColorPath
): string {
  const parts = path.split('.');
  let current: any = theme.colors.semantic;
  
  for (const part of parts) {
    if (current && current[part]) {
      current = current[part];
    } else {
      console.error(`Invalid semantic color path: ${path}`);
      return theme.colors.semantic.frame.primary; // Fallback
    }
  }
  
  return current;
}

/**
 * Type guard to check if a string is a valid semantic color path
 */
export function isSemanticColorPath(path: string): path is SemanticColorPath {
  const validPaths: SemanticColorPath[] = [
    // Frame & Structure
    'frame.primary',
    'frame.secondary',
    'frame.accent',
    'frame.divider',
    'frame.corner',
    'frame.sidebar',
    'frame.topbar',
    // Interactive Elements
    'action.primary',
    'action.primaryHover',
    'action.primaryActive',
    'action.secondary',
    'action.secondaryHover',
    'action.secondaryActive',
    'action.disabled',
    'action.focus',
    // Navigation & Menu
    'navigation.item',
    'navigation.itemHover',
    'navigation.itemActive',
    'navigation.itemDisabled',
    'navigation.indicator',
    'navigation.breadcrumb',
    // Status & Alerts
    'status.info',
    'status.infoLight',
    'status.success',
    'status.successLight',
    'status.warning',
    'status.warningLight',
    'status.warningCritical',
    'status.error',
    'status.errorLight',
    'status.errorCritical',
    'status.neutral',
    // Content & Typography
    'content.primary',
    'content.secondary',
    'content.tertiary',
    'content.inverse',
    'content.link',
    'content.linkHover',
    'content.linkVisited',
    'content.code',
    'content.heading',
    // Backgrounds & Surfaces
    'background.base',
    'background.elevated',
    'background.elevatedHigher',
    'background.depressed',
    'background.overlay',
    'background.stripe',
    // Data Visualization
    'data.series1',
    'data.series2',
    'data.series3',
    'data.series4',
    'data.series5',
    'data.positive',
    'data.negative',
    'data.neutral',
    // Special LCARS Elements
    'lcars.sweep',
    'lcars.elbow',
    'lcars.pill',
    'lcars.bracket',
    'lcars.terminal',
    'lcars.hologram',
    'lcars.alert',
    'lcars.caution',
  ];
  
  return validPaths.includes(path as SemanticColorPath);
}