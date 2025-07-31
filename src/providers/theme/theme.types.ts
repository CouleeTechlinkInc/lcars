/**
 * Complete LCARS color palette from Star Trek: The Next Generation, Deep Space Nine, and Voyager
 */
export type LCARSColorName = 
  // Core Voyager colors
  | 'orange'          // #FF9900 - Primary interactive elements
  | 'mango'           // #FF9966 - Secondary interactive elements  
  | 'lilac'           // #CC99CC - Tertiary elements
  | 'purple'          // #CC6699 - Accent elements
  | 'brick'           // #CC6666 - Alert/warning elements
  | 'naples'          // #FFCC99 - Highlight elements
  | 'paleBlue'        // #9999CC - Information displays
  | 'skyBlue'         // #9999FF - Active states
  | 'bigBlue'         // #6666FF - Nemesis/Defiant blue
  | 'gray'            // #999999 - Inactive states
  
  // Extended palette
  | 'evening'         // #2255FF - Primary frame color
  | 'midnight'        // #1111EE - Deep accent blue
  | 'cool'            // #5588FF - Light blue accent
  | 'honey'           // #FFCC99 - Warm accent
  | 'cardinal'        // #CC2233 - Critical/error states
  | 'tangerine'       // #FF8833 - Warning states
  | 'green'           // #33CC99 - Success/active states
  | 'galaxy'          // #444A77 - Muted inactive states
  | 'ghost'           // #88BBFF - Text primary
  | 'moonshine'       // #DDEEFF - Text highlight
  | 'wheat'           // #CCAA88 - Neutral warm
  | 'roseblush'       // #CC6666 - Alert variations
  
  // Additional LCARS colors
  | 'mars'            // #FF2200
  | 'martian'         // #FFAA00
  | 'ice'             // #BBCCFF
  | 'gold'            // #FFBB00
  | 'peach'           // #FFBB99
  | 'butterscotch'    // #FFAA77
  | 'tomato'          // #FF5555
  | 'violet'          // #9944FF
  | 'african-violet'  // #CC99FF
  | 'almond'          // #FF9966
  | 'almond-creme'    // #FFDDBB
  | 'bluey'           // #33BBFF
  | 'sky'             // #AACCFF
  | 'sunflower'       // #FFCC00
  | 'magenta'         // #CC4499
  | 'violet-creme'    // #FF99CC
  | 'space-white'     // #FFEEDD
  | 'goldfinch'       // #FFBB00
  | 'camel'           // #CC9966
  | 'candlelight'     // #FFEEAA
  | 'evening-shade'   // #1155CC
  | 'dandelion'       // #FFDD00
  | 'gold-pressed-latinum' // #FFFF99
  | 'rust'            // #BB4411
  | 'tamarillo'       // #CC4444
  | 'twilight'        // #2244AA
  | 'ocean'           // #0055BB
  | 'pacific'         // #0088FF
  | 'pumpkin'         // #FF8800
  | 'sage'            // #7788CC
  | 'sandy-desert'    // #EEAA66
  | 'text-block'      // #889977
  | 'viol'            // #9977AA
  | 'wisteria'        // #9999FF';

/**
 * Comprehensive semantic color mappings for purpose-driven color usage
 */
export interface SemanticColors {
  // Frame & Structure (LCARS signature elements)
  frame: {
    primary: string;        // Main frame color
    secondary: string;      // Secondary frame elements
    accent: string;         // Frame accents and highlights
    divider: string;        // Frame dividers
    corner: string;         // Corner piece color
    sidebar: string;        // Sidebar default color
    topbar: string;         // Top/bottom bar default
  };
  
  // Interactive Elements
  action: {
    primary: string;        // Primary buttons/controls
    primaryHover: string;   // Primary hover state
    primaryActive: string;  // Primary pressed state
    secondary: string;      // Secondary actions
    secondaryHover: string;
    secondaryActive: string;
    disabled: string;       // Disabled state
    focus: string;          // Focus indicators
  };
  
  // Navigation & Menu
  navigation: {
    item: string;           // Menu item default
    itemHover: string;      // Menu item hover
    itemActive: string;     // Current/selected item
    itemDisabled: string;   // Disabled menu item
    indicator: string;      // Active page indicator
    breadcrumb: string;     // Breadcrumb links
  };
  
  // Status & Alerts (with severity levels)
  status: {
    info: string;           // Information
    infoLight: string;      // Info variant
    success: string;        // Success/positive
    successLight: string;   
    warning: string;        // Warning
    warningLight: string;
    warningCritical: string; // High priority warning
    error: string;          // Error/failure
    errorLight: string;
    errorCritical: string;  // Critical error
    neutral: string;        // Neutral status
  };
  
  // Content & Typography
  content: {
    primary: string;        // Primary text
    secondary: string;      // Secondary text
    tertiary: string;       // Muted/disabled text
    inverse: string;        // Text on dark backgrounds
    link: string;           // Links default
    linkHover: string;      // Links hover
    linkVisited: string;    // Visited links
    code: string;           // Code/monospace text
    heading: string;        // Headings
  };
  
  // Backgrounds & Surfaces
  background: {
    base: string;           // Page background
    elevated: string;       // Raised surfaces
    elevatedHigher: string; // Modals/overlays
    depressed: string;      // Inset areas
    overlay: string;        // Overlay scrim
    stripe: string;         // Alternating rows
  };
  
  // Data Visualization
  data: {
    series1: string;        // Chart series 1
    series2: string;        // Chart series 2
    series3: string;        // Chart series 3
    series4: string;        // Chart series 4
    series5: string;        // Chart series 5
    positive: string;       // Positive values
    negative: string;       // Negative values
    neutral: string;        // Neutral/zero values
  };
  
  // Special LCARS Elements
  lcars: {
    sweep: string;          // Curved sweep elements
    elbow: string;          // Elbow connectors
    pill: string;           // Pill-shaped buttons
    bracket: string;        // Bracket elements
    terminal: string;       // Terminal/console text
    hologram: string;       // Holographic elements
    alert: string;          // Red alert color
    caution: string;        // Yellow alert color
  };
  
  // Legacy interface compatibility (deprecated)
  interface?: {
    active: string;
    inactive: string;
    hover: string;
    pressed: string;
  };
  
  // Legacy system compatibility (deprecated)
  system?: {
    success: string;
    warning: string;
    error: string;
    info: string;
  };
}

/**
 * Legacy color names for backward compatibility
 */
export type LegacyColorName = 'main' | 'alt1' | 'alt2';

/**
 * All supported theme colors
 */
export type ThemeColors = LCARSColorName | LegacyColorName;

export type ThemeFrameSize = 'sm' | 'md' | 'lg';

/**
 * Available theme variants inspired by different Star Trek series
 */
export type ThemeVariant = 'voyager' | 'tng' | 'ds9' | 'discovery' | 'custom';

/**
 * Theme variant configuration
 */
export interface ThemeVariantConfig {
  name: ThemeVariant;
  semantic: SemanticColors;
}

export interface Theme {
  // Current theme variant
  variant: ThemeVariant;
  
  colors: {
    // All LCARS colors
    lcars: Record<LCARSColorName, string>;
    
    // Semantic mappings
    semantic: SemanticColors;
    
    // Legacy support - these map to LCARS colors
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
  
  // Legacy color accessor for backward compatibility
  color: Record<ThemeColors, string> & {
    background: string;
  };
  
  frame: {
    size: Record<ThemeFrameSize, number>;
    border: {
      radius: Record<ThemeFrameSize, number>;
      width: number;
    };
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      sm: string;
      md: string;
      lg: string;
    };
  };
}