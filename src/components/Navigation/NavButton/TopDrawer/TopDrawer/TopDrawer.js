import React from "react";

import "./TopDrawer.css";

function TopDrawer({ click, show }) {
    const drawerClasses = show ? "top-drawer open" : "top-drawer";

    const scrollTo = (page) => {
        document.getElementById(page).scrollIntoView();
        click();
    };

    return (
        <div className={drawerClasses}>
            <div>
                <div>
                    <ul>
                        <li onClick={() => scrollTo("home")}>Home</li>
                        <li onClick={() => scrollTo("about")}>About</li>
                        {/* <li onClick={()=>scrollTo('projects')}>Projects</li> */}
                        <li onClick={() => scrollTo("basscovers")}>
                            Bass Covers
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TopDrawer;
