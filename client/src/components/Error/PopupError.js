
import React from "react";


function PopupError(props) {
    return (props.trigger) ? (
        <div>
            <div>
                <button>close</button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default PopupError;