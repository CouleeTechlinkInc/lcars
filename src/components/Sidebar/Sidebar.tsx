import { useTheme } from "../../providers/theme/theme";
import type { ThemeColors, ThemeFrameSize } from "../../providers/theme/theme.types";
import { useSemanticColor } from "../../providers/theme/useSemanticColor";

export interface SidebarProps {
    children?: React.ReactNode;
    width?: ThemeFrameSize;
    color?: ThemeColors;
    position?: 'left' | 'right';
    top?: number;
    bottom?: number;
}
export const Sidebar = ({ children , width , color , position , top , bottom }: SidebarProps) => {
    const theme = useTheme();
    const widthNum = theme.frame.size[width ?? 'md'];
    // Use semantic color with backward compatibility
    const customColor = color ? useSemanticColor(color, 'Sidebar') : null;
    const defaultColor = useSemanticColor('frame.sidebar');
    const backgroundColor = customColor || defaultColor;
    return (
        <div style={{
            backgroundColor: backgroundColor,
            width: widthNum,
            position: 'absolute',
            top: top || 0,
            bottom: bottom || 0,
            [position || 'left']: 0,
        }}>
            {children}
        </div>
    )
}