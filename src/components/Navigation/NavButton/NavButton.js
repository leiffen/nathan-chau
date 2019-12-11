import React, {Component} from 'react';

import './NavButton.css';
import DrawerButton from './TopDrawer/DrawerButton/DrawerButton';
import TopDrawer from './TopDrawer/TopDrawer/TopDrawer';

class navButton extends Component {

    render() {
        return (
            <div className="navbar-mobile">
                <DrawerButton click={this.props.drawerClickHandler} show={this.props.show}/>
                <TopDrawer click={this.props.drawerClickHandler} show={this.props.show}/>
            </div>
        );
    } 
}

export default navButton;