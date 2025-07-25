export type ThemeColors = 'main' | 'alt1' | 'alt2';
export type ThemeFrameSize = 'sm' | 'md' | 'lg';

export interface Theme {
    color: Record<ThemeColors, string> & {
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