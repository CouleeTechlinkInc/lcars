import type { ThemeVariantConfig, SemanticColors } from './theme.types';
import { lcarsColors } from './theme.utils';

/**
 * Voyager theme variant - Blue-based color scheme from Star Trek: Voyager
 */
const voyagerSemanticColors: SemanticColors = {
  frame: {
    primary: lcarsColors.evening,        // #2255FF - Deep blue
    secondary: lcarsColors.cool,         // #5588FF - Light blue
    accent: lcarsColors.honey,           // #FFCC99 - Warm accent
    divider: lcarsColors.midnight,       // #1111EE - Dark blue
    corner: lcarsColors.evening,         // #2255FF
    sidebar: lcarsColors.cool,           // #5588FF
    topbar: lcarsColors.evening,         // #2255FF
  },
  action: {
    primary: lcarsColors.orange,         // #FF9900
    primaryHover: lcarsColors.mango,     // #FF9966
    primaryActive: lcarsColors.pumpkin,  // #FF8800
    secondary: lcarsColors.lilac,        // #CC99CC
    secondaryHover: lcarsColors.purple,  // #CC6699
    secondaryActive: lcarsColors.magenta, // #CC4499
    disabled: lcarsColors.gray,          // #999999
    focus: lcarsColors.skyBlue,          // #9999FF
  },
  navigation: {
    item: lcarsColors.cool,              // #5588FF
    itemHover: lcarsColors.skyBlue,      // #9999FF
    itemActive: lcarsColors.green,       // #33CC99
    itemDisabled: lcarsColors.galaxy,    // #444A77
    indicator: lcarsColors.honey,        // #FFCC99
    breadcrumb: lcarsColors.ghost,       // #88BBFF
  },
  status: {
    info: lcarsColors.cool,              // #5588FF
    infoLight: lcarsColors.ice,          // #BBCCFF
    success: lcarsColors.green,          // #33CC99
    successLight: lcarsColors.bluey,     // #33BBFF
    warning: lcarsColors.tangerine,      // #FF8833
    warningLight: lcarsColors.peach,     // #FFBB99
    warningCritical: lcarsColors.orange, // #FF9900
    error: lcarsColors.cardinal,         // #CC2233
    errorLight: lcarsColors.brick,       // #CC6666
    errorCritical: lcarsColors.mars,     // #FF2200
    neutral: lcarsColors.gray,           // #999999
  },
  content: {
    primary: lcarsColors.ghost,          // #88BBFF
    secondary: lcarsColors.cool,         // #5588FF
    tertiary: lcarsColors.sage,          // #7788CC
    inverse: lcarsColors.moonshine,      // #DDEEFF
    link: lcarsColors.skyBlue,           // #9999FF
    linkHover: lcarsColors.bigBlue,      // #6666FF
    linkVisited: lcarsColors.paleBlue,   // #9999CC
    code: lcarsColors.green,             // #33CC99
    heading: lcarsColors.evening,        // #2255FF
  },
  background: {
    base: '#000000',                     // Black
    elevated: '#111111',                 // Slightly elevated
    elevatedHigher: '#222222',           // Modal/overlay background
    depressed: '#000033',                // Deep blue-black
    overlay: 'rgba(0, 0, 0, 0.8)',       // Semi-transparent black
    stripe: '#0a0a0a',                   // Alternating row color
  },
  data: {
    series1: lcarsColors.orange,         // #FF9900
    series2: lcarsColors.cool,           // #5588FF
    series3: lcarsColors.green,          // #33CC99
    series4: lcarsColors.purple,         // #CC6699
    series5: lcarsColors.honey,          // #FFCC99
    positive: lcarsColors.green,         // #33CC99
    negative: lcarsColors.cardinal,      // #CC2233
    neutral: lcarsColors.gray,           // #999999
  },
  lcars: {
    sweep: lcarsColors.evening,          // #2255FF
    elbow: lcarsColors.cool,             // #5588FF
    pill: lcarsColors.honey,             // #FFCC99
    bracket: lcarsColors.midnight,       // #1111EE
    terminal: lcarsColors.green,         // #33CC99
    hologram: lcarsColors.ice,           // #BBCCFF
    alert: lcarsColors.cardinal,         // #CC2233
    caution: lcarsColors.tangerine,      // #FF8833
  },
  // Legacy compatibility (deprecated)
  interface: {
    active: lcarsColors.green,           // #33CC99
    inactive: lcarsColors.galaxy,        // #444A77
    hover: lcarsColors.skyBlue,          // #9999FF
    pressed: lcarsColors.paleBlue,       // #9999CC
  },
  system: {
    success: lcarsColors.green,          // #33CC99
    warning: lcarsColors.tangerine,      // #FF8833
    error: lcarsColors.cardinal,         // #CC2233
    info: lcarsColors.cool,              // #5588FF
  },
};

/**
 * TNG theme variant - Orange/Purple-based color scheme from Star Trek: The Next Generation
 */
const tngSemanticColors: SemanticColors = {
  frame: {
    primary: lcarsColors.orange,         // #FF9900 - Primary orange
    secondary: lcarsColors.lilac,        // #CC99CC - Secondary purple
    accent: lcarsColors.paleBlue,        // #9999CC - Blue accent
    divider: lcarsColors.purple,         // #CC6699
    corner: lcarsColors.orange,          // #FF9900
    sidebar: lcarsColors.lilac,          // #CC99CC
    topbar: lcarsColors.orange,          // #FF9900
  },
  action: {
    primary: lcarsColors.bigBlue,        // #6666FF
    primaryHover: lcarsColors.skyBlue,   // #9999FF
    primaryActive: lcarsColors.evening,  // #2255FF
    secondary: lcarsColors.honey,        // #FFCC99
    secondaryHover: lcarsColors.peach,   // #FFBB99
    secondaryActive: lcarsColors.naples, // #FFCC99
    disabled: lcarsColors.gray,          // #999999
    focus: lcarsColors.paleBlue,         // #9999CC
  },
  navigation: {
    item: lcarsColors.lilac,             // #CC99CC
    itemHover: lcarsColors.purple,       // #CC6699
    itemActive: lcarsColors.bigBlue,     // #6666FF
    itemDisabled: lcarsColors.galaxy,    // #444A77
    indicator: lcarsColors.orange,       // #FF9900
    breadcrumb: lcarsColors.ghost,       // #88BBFF
  },
  status: {
    info: lcarsColors.paleBlue,          // #9999CC
    infoLight: lcarsColors.ice,          // #BBCCFF
    success: lcarsColors.green,          // #33CC99
    successLight: lcarsColors.bluey,     // #33BBFF
    warning: lcarsColors.honey,          // #FFCC99
    warningLight: lcarsColors.peach,     // #FFBB99
    warningCritical: lcarsColors.orange, // #FF9900
    error: lcarsColors.brick,            // #CC6666
    errorLight: lcarsColors.roseblush,   // #CC6666
    errorCritical: lcarsColors.cardinal, // #CC2233
    neutral: lcarsColors.gray,           // #999999
  },
  content: {
    primary: lcarsColors.ghost,          // #88BBFF
    secondary: lcarsColors.lilac,        // #CC99CC
    tertiary: lcarsColors.sage,          // #7788CC
    inverse: lcarsColors.moonshine,      // #DDEEFF
    link: lcarsColors.paleBlue,          // #9999CC
    linkHover: lcarsColors.skyBlue,      // #9999FF
    linkVisited: lcarsColors.purple,     // #CC6699
    code: lcarsColors.green,             // #33CC99
    heading: lcarsColors.orange,         // #FF9900
  },
  background: {
    base: '#000000',                     // Black
    elevated: '#111111',                 // Slightly elevated
    elevatedHigher: '#222222',           // Modal/overlay background
    depressed: '#110011',                // Deep purple-black
    overlay: 'rgba(0, 0, 0, 0.8)',       // Semi-transparent black
    stripe: '#0a0a0a',                   // Alternating row color
  },
  data: {
    series1: lcarsColors.orange,         // #FF9900
    series2: lcarsColors.lilac,          // #CC99CC
    series3: lcarsColors.bigBlue,        // #6666FF
    series4: lcarsColors.green,          // #33CC99
    series5: lcarsColors.honey,          // #FFCC99
    positive: lcarsColors.green,         // #33CC99
    negative: lcarsColors.brick,         // #CC6666
    neutral: lcarsColors.gray,           // #999999
  },
  lcars: {
    sweep: lcarsColors.orange,           // #FF9900
    elbow: lcarsColors.lilac,            // #CC99CC
    pill: lcarsColors.paleBlue,          // #9999CC
    bracket: lcarsColors.purple,         // #CC6699
    terminal: lcarsColors.green,         // #33CC99
    hologram: lcarsColors.ice,           // #BBCCFF
    alert: lcarsColors.cardinal,         // #CC2233
    caution: lcarsColors.honey,          // #FFCC99
  },
  // Legacy compatibility (deprecated)
  interface: {
    active: lcarsColors.green,           // #33CC99
    inactive: lcarsColors.galaxy,        // #444A77
    hover: lcarsColors.skyBlue,          // #9999FF
    pressed: lcarsColors.paleBlue,       // #9999CC
  },
  system: {
    success: lcarsColors.green,          // #33CC99
    warning: lcarsColors.tangerine,      // #FF8833
    error: lcarsColors.cardinal,         // #CC2233
    info: lcarsColors.cool,              // #5588FF
  },
};

/**
 * DS9 theme variant - Darker, warmer color scheme from Star Trek: Deep Space Nine
 */
const ds9SemanticColors: SemanticColors = {
  frame: {
    primary: lcarsColors.bigBlue,        // #6666FF - Defiant blue
    secondary: lcarsColors.purple,       // #CC6699 - Purple
    accent: lcarsColors.mango,           // #FF9966 - Warm orange
    divider: lcarsColors.galaxy,         // #444A77 - Muted divider
    corner: lcarsColors.bigBlue,         // #6666FF
    sidebar: lcarsColors.purple,         // #CC6699
    topbar: lcarsColors.bigBlue,         // #6666FF
  },
  action: {
    primary: lcarsColors.mango,          // #FF9966
    primaryHover: lcarsColors.orange,    // #FF9900
    primaryActive: lcarsColors.pumpkin,  // #FF8800
    secondary: lcarsColors.wheat,        // #CCAA88
    secondaryHover: lcarsColors.camel,   // #CC9966
    secondaryActive: lcarsColors.rust,   // #BB4411
    disabled: lcarsColors.galaxy,        // #444A77
    focus: lcarsColors.violet,           // #9944FF
  },
  navigation: {
    item: lcarsColors.purple,            // #CC6699
    itemHover: lcarsColors.magenta,      // #CC4499
    itemActive: lcarsColors.mango,       // #FF9966
    itemDisabled: lcarsColors.galaxy,    // #444A77
    indicator: lcarsColors.gold,         // #FFBB00
    breadcrumb: lcarsColors.sage,        // #7788CC
  },
  status: {
    info: lcarsColors.bigBlue,           // #6666FF
    infoLight: lcarsColors.sage,         // #7788CC
    success: lcarsColors.green,          // #33CC99
    successLight: lcarsColors.bluey,     // #33BBFF
    warning: lcarsColors.gold,           // #FFBB00
    warningLight: lcarsColors.butterscotch, // #FFAA77
    warningCritical: lcarsColors.mango,  // #FF9966
    error: lcarsColors.tamarillo,        // #CC4444
    errorLight: lcarsColors.brick,       // #CC6666
    errorCritical: lcarsColors.rust,     // #BB4411
    neutral: lcarsColors.galaxy,         // #444A77
  },
  content: {
    primary: lcarsColors.sage,           // #7788CC
    secondary: lcarsColors.purple,       // #CC6699
    tertiary: lcarsColors.galaxy,        // #444A77
    inverse: lcarsColors['space-white'], // #FFEEDD
    link: lcarsColors.violet,            // #9944FF
    linkHover: lcarsColors['african-violet'], // #CC99FF
    linkVisited: lcarsColors.purple,     // #CC6699
    code: lcarsColors.green,             // #33CC99
    heading: lcarsColors.bigBlue,        // #6666FF
  },
  background: {
    base: '#000000',                     // Black
    elevated: '#0a0a11',                 // Slightly elevated with blue tint
    elevatedHigher: '#1a1a22',           // Modal/overlay background
    depressed: '#000022',                // Deep blue-black
    overlay: 'rgba(0, 0, 0, 0.85)',      // Darker overlay
    stripe: '#080810',                   // Alternating row color
  },
  data: {
    series1: lcarsColors.mango,          // #FF9966
    series2: lcarsColors.bigBlue,        // #6666FF
    series3: lcarsColors.purple,         // #CC6699
    series4: lcarsColors.gold,           // #FFBB00
    series5: lcarsColors.green,          // #33CC99
    positive: lcarsColors.green,         // #33CC99
    negative: lcarsColors.tamarillo,     // #CC4444
    neutral: lcarsColors.galaxy,         // #444A77
  },
  lcars: {
    sweep: lcarsColors.bigBlue,          // #6666FF
    elbow: lcarsColors.purple,           // #CC6699
    pill: lcarsColors.mango,             // #FF9966
    bracket: lcarsColors.galaxy,         // #444A77
    terminal: lcarsColors.green,         // #33CC99
    hologram: lcarsColors.sage,          // #7788CC
    alert: lcarsColors.rust,             // #BB4411
    caution: lcarsColors.gold,           // #FFBB00
  },
  // Legacy compatibility (deprecated)
  interface: {
    active: lcarsColors.green,           // #33CC99
    inactive: lcarsColors.galaxy,        // #444A77
    hover: lcarsColors.violet,           // #9944FF
    pressed: lcarsColors['african-violet'], // #CC99FF
  },
  system: {
    success: lcarsColors.green,          // #33CC99
    warning: lcarsColors.gold,           // #FFBB00
    error: lcarsColors.tamarillo,        // #CC4444
    info: lcarsColors.bigBlue,           // #6666FF
  },
};

/**
 * Discovery theme variant - Modern, high-contrast color scheme from Star Trek: Discovery
 */
const discoverySemanticColors: SemanticColors = {
  frame: {
    primary: lcarsColors.pacific,        // #0088FF - Bright blue
    secondary: lcarsColors.ocean,        // #0055BB - Deep ocean blue
    accent: lcarsColors.gold,            // #FFBB00 - Gold accent
    divider: lcarsColors.twilight,       // #2244AA - Dark blue
    corner: lcarsColors.pacific,         // #0088FF
    sidebar: lcarsColors.ocean,          // #0055BB
    topbar: lcarsColors.pacific,         // #0088FF
  },
  action: {
    primary: lcarsColors.gold,           // #FFBB00
    primaryHover: lcarsColors.sunflower, // #FFCC00
    primaryActive: lcarsColors.dandelion, // #FFDD00
    secondary: lcarsColors.pacific,      // #0088FF
    secondaryHover: lcarsColors.bluey,   // #33BBFF
    secondaryActive: lcarsColors.ocean,  // #0055BB
    disabled: lcarsColors['text-block'], // #889977
    focus: lcarsColors['gold-pressed-latinum'], // #FFFF99
  },
  navigation: {
    item: lcarsColors.pacific,           // #0088FF
    itemHover: lcarsColors.bluey,        // #33BBFF
    itemActive: lcarsColors.gold,        // #FFBB00
    itemDisabled: lcarsColors['text-block'], // #889977
    indicator: lcarsColors['gold-pressed-latinum'], // #FFFF99
    breadcrumb: lcarsColors.sky,         // #AACCFF
  },
  status: {
    info: lcarsColors.pacific,           // #0088FF
    infoLight: lcarsColors.sky,          // #AACCFF
    success: lcarsColors.green,          // #33CC99
    successLight: lcarsColors.bluey,     // #33BBFF
    warning: lcarsColors.sunflower,      // #FFCC00
    warningLight: lcarsColors.candlelight, // #FFEEAA
    warningCritical: lcarsColors.gold,   // #FFBB00
    error: lcarsColors.tomato,           // #FF5555
    errorLight: lcarsColors['almond-creme'], // #FFDDBB
    errorCritical: lcarsColors.mars,     // #FF2200
    neutral: lcarsColors['text-block'],  // #889977
  },
  content: {
    primary: lcarsColors.sky,            // #AACCFF
    secondary: lcarsColors.pacific,      // #0088FF
    tertiary: lcarsColors.sage,          // #7788CC
    inverse: lcarsColors['space-white'], // #FFEEDD
    link: lcarsColors.gold,              // #FFBB00
    linkHover: lcarsColors['gold-pressed-latinum'], // #FFFF99
    linkVisited: lcarsColors.sunflower,  // #FFCC00
    code: lcarsColors.green,             // #33CC99
    heading: lcarsColors.pacific,        // #0088FF
  },
  background: {
    base: '#000000',                     // Black
    elevated: '#001122',                 // Blue-tinted elevation
    elevatedHigher: '#002244',           // Modal/overlay background
    depressed: '#000011',                // Very deep blue-black
    overlay: 'rgba(0, 0, 17, 0.9)',      // Blue-tinted overlay
    stripe: '#000a14',                   // Alternating row color
  },
  data: {
    series1: lcarsColors.gold,           // #FFBB00
    series2: lcarsColors.pacific,        // #0088FF
    series3: lcarsColors.green,          // #33CC99
    series4: lcarsColors.tomato,         // #FF5555
    series5: lcarsColors.violet,         // #9944FF
    positive: lcarsColors.green,         // #33CC99
    negative: lcarsColors.tomato,        // #FF5555
    neutral: lcarsColors['text-block'],  // #889977
  },
  lcars: {
    sweep: lcarsColors.pacific,          // #0088FF
    elbow: lcarsColors.ocean,            // #0055BB
    pill: lcarsColors.gold,              // #FFBB00
    bracket: lcarsColors.twilight,       // #2244AA
    terminal: lcarsColors.green,         // #33CC99
    hologram: lcarsColors['gold-pressed-latinum'], // #FFFF99
    alert: lcarsColors.tomato,           // #FF5555
    caution: lcarsColors.sunflower,      // #FFCC00
  },
  // Legacy compatibility (deprecated)
  interface: {
    active: lcarsColors.green,           // #33CC99
    inactive: lcarsColors['text-block'], // #889977
    hover: lcarsColors.bluey,            // #33BBFF
    pressed: lcarsColors.ocean,          // #0055BB
  },
  system: {
    success: lcarsColors.green,          // #33CC99
    warning: lcarsColors.sunflower,      // #FFCC00
    error: lcarsColors.tomato,           // #FF5555
    info: lcarsColors.pacific,           // #0088FF
  },
};

/**
 * Theme variant configurations
 */
export const themeVariants: Record<string, ThemeVariantConfig> = {
  voyager: {
    name: 'voyager',
    semantic: voyagerSemanticColors,
  },
  tng: {
    name: 'tng',
    semantic: tngSemanticColors,
  },
  ds9: {
    name: 'ds9',
    semantic: ds9SemanticColors,
  },
  discovery: {
    name: 'discovery',
    semantic: discoverySemanticColors,
  },
};

/**
 * Get theme variant by name
 */
export function getThemeVariant(variant: string): ThemeVariantConfig {
  return themeVariants[variant] || themeVariants.voyager;
}

/**
 * Create a custom theme variant
 */
export function createCustomVariant(semantic: SemanticColors): ThemeVariantConfig {
  return {
    name: 'custom',
    semantic,
  };
}