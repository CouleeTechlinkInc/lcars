
import { useTheme } from "../../providers/theme/theme";
import type { ThemeColors, ThemeFrameSize } from "../../providers/theme/theme.types";
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
    const htmlColor = theme.color[color ?? 'main'];
    const innerSize = Math.min( (vtNum + hzMum) / 2 , vtNum, hzMum);

   
    
    return (
        <div style={{
            position : 'relative',
            width: vtNum + innerSize,
            height: hzMum + innerSize,
        }}>
            <MainCornerPart cornerSize={innerSize} width={vtNum} height={hzMum} color={htmlColor} position={position} />
            <InnerCornerPart size={innerSize} color={htmlColor} position={position} />
            
        </div>
    )
}