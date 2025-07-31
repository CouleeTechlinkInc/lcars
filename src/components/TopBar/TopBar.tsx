import { useTheme } from "../../providers/theme/theme";
import type { ThemeColors, ThemeFrameSize } from "../../providers/theme/theme.types";
import { useSemanticColor } from "../../providers/theme/useSemanticColor";

export interface TopBarProps {
    children?: React.ReactNode;
    height?: ThemeFrameSize;
    color?: ThemeColors;
    position?: 'top' | 'bottom';
    left?: number;
    right?: number;
}
export const TopBar = ({ children , height , color , position , left , right }: TopBarProps) => {
    const theme = useTheme();
    const heightNum = theme.frame.size[height ?? 'md'];
    // Use semantic color with backward compatibility
    const customColor = color ? useSemanticColor(color, 'TopBar') : null;
    const defaultColor = useSemanticColor('frame.topbar');
    const backgroundColor = customColor || defaultColor;
    return (
        <div style={{
            backgroundColor: backgroundColor,
            height: heightNum,
            position: 'absolute',
            left: left || 0,
            right: right || 0,
            [position || 'top']: 0,
        }}>
            {children}
        </div>
    )
}