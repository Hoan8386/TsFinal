interface Iprops {
    btnText?: string;
    btnIcons?: React.ReactNode;
    btnStyle?: React.CSSProperties;
    onClick?: () => void;
}
const ResizeButton = (props: Iprops) => {
    const { btnText, btnIcons, btnStyle, onClick } = props;

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    return (
        <button className="resize-button" style={btnStyle} onClick={onClick}>

            <span style={{ textTransform: "uppercase" }}>{btnText}</span>
            <>{btnIcons}</>
        </button>
    )
}

export default ResizeButton;