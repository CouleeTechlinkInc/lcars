
import type { ThemeColors, ThemeFrameSize } from "../../providers/theme/theme.types";
import { Sidebar } from "../Sidebar/Sidebar";
import { Corner } from "../Corner/Corner";
import { useTheme } from "../../providers/theme/theme";

export type FrameProps = {
    children?: React.ReactNode;
    leftWidth?: ThemeFrameSize | 'none';
    rightWidth?: ThemeFrameSize | 'none';
    topWidth?: ThemeFrameSize | 'none';
    bottomWidth?: ThemeFrameSize | 'none';
    leftColor?: ThemeColors;
    rightColor?: ThemeColors;
    topColor?: ThemeColors;
    bottomColor?: ThemeColors;
}
export const Frame = ({ 
    children, 
    leftWidth = 'md', 
    rightWidth = 'none', 
    topWidth = 'sm', 
    bottomWidth = 'sm', 
    leftColor = 'main', 
    rightColor = 'main',
     topColor = 'main', 
     bottomColor = 'main' }: FrameProps) => {
    const theme = useTheme();
    const leftWidthNum = leftWidth === 'none' ? 0 : theme.frame.size[leftWidth];
    const rightWidthNum = rightWidth === 'none' ? 0 : theme.frame.size[rightWidth];
    const topWidthNum = topWidth === 'none' ? 0 : theme.frame.size[topWidth];
    const bottomWidthNum = bottomWidth === 'none' ? 0 : theme.frame.size[bottomWidth];

    // Calculate corner sizes for proper sidebar positioning
    const topLeftCornerSize = (leftWidth !== 'none' && topWidth !== 'none') ? 
        Math.min(leftWidthNum, topWidthNum) : 0;
    const topRightCornerSize = (rightWidth !== 'none' && topWidth !== 'none') ? 
        Math.min(rightWidthNum, topWidthNum) : 0;
    const bottomLeftCornerSize = (leftWidth !== 'none' && bottomWidth !== 'none') ? 
        Math.min(leftWidthNum, bottomWidthNum) : 0;
    const bottomRightCornerSize = (rightWidth !== 'none' && bottomWidth !== 'none') ? 
        Math.min(rightWidthNum, bottomWidthNum) : 0;

    return <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
    }}>
        {/* Left Sidebar */}
        {leftWidth !== 'none' && (
            <Sidebar
                width={leftWidth}
                color={leftColor}
                position="left"
                top={topWidth !== 'none' ? topWidthNum + topLeftCornerSize : 0}
                bottom={bottomWidth !== 'none' ? bottomWidthNum + bottomLeftCornerSize : 0}
            />
        )}

        {/* Right Sidebar */}
        {rightWidth !== 'none' && (
            <Sidebar
                width={rightWidth}
                color={rightColor}
                position="right"
                top={topWidth !== 'none' ? topWidthNum + topRightCornerSize : 0}
                bottom={bottomWidth !== 'none' ? bottomWidthNum + bottomRightCornerSize : 0}
            />
        )}

        {/* Top-Left Corner */}
        {leftWidth !== 'none' && topWidth !== 'none' && (
            <Corner
                position="top-left"
                verticalSize={leftWidth}
                horizontalSize={topWidth}
                color={leftColor}
            />
        )}

        {/* Top-Right Corner */}
        {rightWidth !== 'none' && topWidth !== 'none' && (
            <Corner
                position="top-right"
                verticalSize={rightWidth}
                horizontalSize={topWidth}
                color={rightColor}
            />
        )}

        {/* Bottom-Left Corner */}
        {leftWidth !== 'none' && bottomWidth !== 'none' && (
            <Corner
                position="bottom-left"
                verticalSize={leftWidth}
                horizontalSize={bottomWidth}
                color={leftColor}
            />
        )}

        {/* Bottom-Right Corner */}
        {rightWidth !== 'none' && bottomWidth !== 'none' && (
            <Corner
                position="bottom-right"
                verticalSize={rightWidth}
                horizontalSize={bottomWidth}
                color={rightColor}
            />
        )}

        {children}
    </div>
}