import '../scss/popup.scss';

const PopupHOC = ( Component ) => {

    const Popup = ( props ) => (
        <div className="popup-background" onClick = { () => props.popupClose() }>
            <div className="popup" onClick= { (e) => e.stopPropagation() }>
                <div className="header">
                    <h3>{ props.popupTitle }</h3>
                    <button onClick = { () => props.popupClose() } > &times; </button>
                </div>
                <div className="content">
                    <Component { ...props } />
                </div>        
            </div>
        </div>
    )

    return Popup ;
}

export default PopupHOC ;
