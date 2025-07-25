import { useTheme } from "../../providers/theme/theme";
import type { ThemeColors, ThemeFrameSize } from "../../providers/theme/theme.types";
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
    const backgroundColor = theme.color[color ?? 'main'];
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