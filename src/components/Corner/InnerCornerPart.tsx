import { useTheme } from "../../providers/theme/theme";

export interface InnerCornerPartProps {
    size: number;
    color: string;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const InnerCornerPart = ({size, color, position }: InnerCornerPartProps) => {
    const theme = useTheme();
    const backgroundColor = theme.color.background;
    
    const backgroundStyle : React.CSSProperties = {
        position: 'absolute',
        width: size,
        height: size,
    }
    
    const style : React.CSSProperties = {
        width: size,
        height: size,
        backgroundColor: backgroundColor,
    }
    
    switch (position) {
        case 'top-left':
            backgroundStyle.bottom = 0;
            backgroundStyle.right = 0;
            backgroundStyle.background = `linear-gradient(to bottom right, ${color} 50%, ${backgroundColor} 50%)`;
            style.borderTopLeftRadius = size;
            break;
        case 'top-right':
            backgroundStyle.bottom = 0;
            backgroundStyle.left = 0;
            backgroundStyle.background = `linear-gradient(to bottom left, ${color} 50%, ${backgroundColor} 50%)`;
            style.borderTopRightRadius = size;
            break;
        case 'bottom-left':
            backgroundStyle.top = 0;
            backgroundStyle.right = 0;
            backgroundStyle.background = `linear-gradient(to top right, ${color} 50%, ${backgroundColor} 50%)`;
            style.borderBottomLeftRadius = size;
            break;
        case 'bottom-right':
            backgroundStyle.top = 0;
            backgroundStyle.left = 0;
            backgroundStyle.background = `linear-gradient(to top left, ${color} 50%, ${backgroundColor} 50%)`;
            style.borderBottomRightRadius = size;
            break;
    }
    
    return (
        <div className="inner-corner-bg" style={backgroundStyle}>
            <div className="inner-corner" style={style}></div>
        </div>
    )
}