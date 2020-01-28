import React, {Component} from 'react';

import './Card.css';

class card extends Component {

    render() {
        return (
            <div className="card">
                <a href={this.props.link}>
                    <img src={this.props.image} alt=""></img>    
                </a>
            </div>
        );
    }
}

export default card;