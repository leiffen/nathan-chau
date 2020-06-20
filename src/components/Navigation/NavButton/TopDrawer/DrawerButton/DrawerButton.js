import React from "react";

import "./DrawerButton.css";

function DrawerButton({ click, show }) {
    const line = show ? "toggle-button-line-open" : "toggle-button-line";

    return (
        <div className="toggle-button" onClick={click}>
            <div className={line} />
        </div>
    );
}

export default DrawerButton;
