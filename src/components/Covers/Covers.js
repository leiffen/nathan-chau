import React from 'react';

import './Covers.css';
import Card from '../Card/Card.js';

import i from '../../Images/kite_thubnail.png';

const covers = props => (
    <div id="covers">
        <div className="about-title">
            Covers
        </div>
        <div id="contianer-cover">
            <Card link="" image={i}/>
            <Card link="" image={i}/>
            <Card link="" image={i}/>
            <Card link="" image={i}/>
        </div>
    </div>
);

export default covers;