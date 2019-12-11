import React, {Component} from 'react';

import './NavBar.css';

class navBar extends Component {

    scrollTo = page => {
        document.getElementById(page).scrollIntoView();
    }

    render() {
        return (
            <div className="navbar">
                <ul>
                    <li onClick={()=>this.scrollTo('home')}>Home</li>
                    <li onClick={()=>this.scrollTo('about')}>About</li>
                </ul>
            </div>
        );
    }
}

export default navBar;