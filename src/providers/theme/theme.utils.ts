import type { Theme, ThemeColors, LCARSColorName } from './theme.types';

/**
 * Complete LCARS color palette from Star Trek series
 * Colors are organized by purpose and usage patterns
 */
export const lcarsColors: Record<LCARSColorName, string> = {
  // Core Voyager colors
  orange: '#FF9900',          // Primary interactive elements
  mango: '#FF9966',           // Secondary interactive elements
  lilac: '#CC99CC',           // Tertiary elements
  purple: '#CC6699',          // Accent elements
  brick: '#CC6666',           // Alert/warning elements
  naples: '#FFCC99',          // Highlight elements
  paleBlue: '#9999CC',        // Information displays
  skyBlue: '#9999FF',         // Active states
  bigBlue: '#6666FF',         // Nemesis/Defiant blue
  gray: '#999999',            // Inactive states
  
  // Extended palette
  evening: '#2255FF',         // Primary frame color (was main)
  midnight: '#1111EE',        // Deep accent blue
  cool: '#5588FF',            // Light blue accent (was alt2)
  honey: '#FFCC99',           // Warm accent (was alt1)
  cardinal: '#CC2233',        // Critical/error states
  tangerine: '#FF8833',       // Warning states
  green: '#33CC99',           // Success/active states
  galaxy: '#444A77',          // Muted inactive states
  ghost: '#88BBFF',           // Text primary
  moonshine: '#DDEEFF',       // Text highlight
  wheat: '#CCAA88',           // Neutral warm
  roseblush: '#CC6666',       // Alert variations
  
  // Additional LCARS colors
  mars: '#FF2200',
  martian: '#FFAA00',
  ice: '#BBCCFF',
  gold: '#FFBB00',
  peach: '#FFBB99',
  butterscotch: '#FFAA77',
  tomato: '#FF5555',
  violet: '#9944FF',
  'african-violet': '#CC99FF',
  almond: '#FF9966',
  'almond-creme': '#FFDDBB',
  bluey: '#33BBFF',
  sky: '#AACCFF',
  sunflower: '#FFCC00',
  magenta: '#CC4499',
  'violet-creme': '#FF99CC',
  'space-white': '#FFEEDD',
  goldfinch: '#FFBB00',
  camel: '#CC9966',
  candlelight: '#FFEEAA',
  'evening-shade': '#1155CC',
  dandelion: '#FFDD00',
  'gold-pressed-latinum': '#FFFF99',
  rust: '#BB4411',
  tamarillo: '#CC4444',
  twilight: '#2244AA',
  ocean: '#0055BB',
  pacific: '#0088FF',
  pumpkin: '#FF8800',
  sage: '#7788CC',
  'sandy-desert': '#EEAA66',
  'text-block': '#889977',
  viol: '#9977AA',
  wisteria: '#9999FF'
};

/**
 * Helper function to get a theme color with backward compatibility
 * @param theme - The theme object
 * @param color - The color name to retrieve
 * @returns The hex color value
 */
export function getThemeColor(theme: Theme, color: ThemeColors): string {
  // Check legacy names first for backward compatibility
  if (color === 'main') return theme.colors.main;
  if (color === 'alt1') return theme.colors.alt1;
  if (color === 'alt2') return theme.colors.alt2;
  
  // Check LCARS colors
  if (color in theme.colors.lcars) {
    return theme.colors.lcars[color as LCARSColorName];
  }
  
  // Fallback to main color with warning
  console.warn(`Unknown color: ${color}, falling back to main color`);
  return theme.colors.main;
}