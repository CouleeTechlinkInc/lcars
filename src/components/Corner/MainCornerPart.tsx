
export interface MainCornerPartProps {
    width: number;
    height: number;
    color: string;
    cornerSize: number;
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

}

export const MainCornerPart = ({ width, height, color, position  , cornerSize}: MainCornerPartProps) => {
    const style : React.CSSProperties = {
        position: 'absolute',
        width : width + cornerSize,
        height : height + cornerSize,
        backgroundColor: color,
    }
    const radius = Math.max(width, height);
    switch (position) {
        case 'top-left':
            style.top = 0;
            style.left = 0;
            style.borderTopLeftRadius = radius;
            break;
        case 'top-right':
            style.top = 0;
            style.right = 0;
            style.borderTopRightRadius = radius;
            break;
        case 'bottom-left':
            style.bottom = 0;
            style.left = 0;
            style.borderBottomLeftRadius = radius;
            break;
        case 'bottom-right':
            style.bottom = 0;
            style.right = 0;
            style.borderBottomRightRadius = radius;
            break;
    }
    return (
        <div className="main-corner-part" style={style}>
            <div className="main-corner-part-inner"></div>
        </div>
    )
}