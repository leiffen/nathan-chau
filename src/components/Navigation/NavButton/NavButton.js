import React from "react";

import "./NavButton.css";
import DrawerButton from "./TopDrawer/DrawerButton/DrawerButton";
import TopDrawer from "./TopDrawer/TopDrawer/TopDrawer";

function NavButton({ drawerClickHandler, show }) {
    return (
        <div className="navbar-mobile">
            <DrawerButton click={drawerClickHandler} show={show} />
            <TopDrawer click={drawerClickHandler} show={show} />
        </div>
    );
}

export default NavButton;
