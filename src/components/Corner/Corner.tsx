
import { useTheme } from "../../providers/theme/theme";
import type { ThemeColors, ThemeFrameSize } from "../../providers/theme/theme.types";
import { useSemanticColor } from "../../providers/theme/useSemanticColor";
import './corner.css';
import { InnerCornerPart } from "./InnerCornerPart";
import { MainCornerPart } from "./MainCornerPart";

export interface CornerProps {
    color?: ThemeColors;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    verticalSize: ThemeFrameSize;
    horizontalSize: ThemeFrameSize; 
}

export const Corner = ({ position , verticalSize, horizontalSize, color }: CornerProps) => {
    const theme = useTheme();
    const hzMum = theme.frame.size[horizontalSize];
    const vtNum = theme.frame.size[verticalSize];
    // Use semantic color with backward compatibility
    const customColor = color ? useSemanticColor(color, 'Corner') : null;
    const defaultColor = useSemanticColor('frame.corner');
    const htmlColor = customColor || defaultColor;
    const innerSize = Math.min(vtNum, hzMum);
    const style : React.CSSProperties = {
        position : 'absolute',
        width: vtNum + innerSize,
        height: hzMum + innerSize,
    }
    switch (position) {
        case 'top-left':
            style.left = 0;
            style.top = 0;
            break;
        case 'top-right':
            style.right = 0;
            style.top = 0;
            break;
        case 'bottom-left':
            style.left = 0;
            style.bottom = 0;
            break;
        case 'bottom-right':
            style.right = 0;
            style.bottom = 0;
            break;
    }

   
    
    return (
        <div style={style}>
            <MainCornerPart cornerSize={innerSize} width={vtNum} height={hzMum} color={htmlColor} position={position} />
            <InnerCornerPart size={innerSize} color={htmlColor} position={position} />
            
        </div>
    )
}