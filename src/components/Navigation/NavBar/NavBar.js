import React from "react";

import "./NavBar.css";

function NavBar() {
    const scrollTo = (page) => {
        document.getElementById(page).scrollIntoView();
    };

    return (
        <div className="navbar">
            <ul>
                <li onClick={() => scrollTo("home")}>Home</li>
                <li onClick={() => scrollTo("about")}>About</li>
                {/* <li onClick={()=>this.scrollTo('projects')}>Projects</li> */}
                <li onClick={() => scrollTo("basscovers")}>Bass Covers</li>
            </ul>
        </div>
    );
}

export default NavBar;
