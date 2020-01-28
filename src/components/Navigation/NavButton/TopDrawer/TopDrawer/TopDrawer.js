import React, {Component} from 'react';

import './TopDrawer.css';

class topDrawer extends Component {

    scrollTo = page => {
        document.getElementById(page).scrollIntoView();
        this.props.click();
    }

    render() {

        let drawerClasses = 'top-drawer';

        if (this.props.show) {
            drawerClasses = 'top-drawer open';
        }

        return (
            <div className = {drawerClasses}>
                <div>
                    <div>
                        <ul>
                            <li onClick={()=>this.scrollTo('home')}>Home</li>
                            <li onClick={()=>this.scrollTo('about')}>About</li>
                            <li onClick={()=>this.scrollTo('projects')}>Projects</li>
                            <li onClick={()=>this.scrollTo('covers')}>Covers</li>
                        </ul>   
                    </div>
                </div>
            </div> 
        );
    }  
}

export default topDrawer;