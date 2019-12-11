import React, {Component} from 'react';

import './DrawerButton.css';

class drawerButton extends Component {
    render() {
        let line = "toggle-button-line";
        
        if(this.props.show) {
            line = "toggle-button-line-open"
        }

        return(
            <div className = "toggle-button" onClick={this.props.click}>
                <div className = {line}/>
                <div className = {line}/>
                <div className = {line}/>
            </div>
        );
    }
};

export default drawerButton;