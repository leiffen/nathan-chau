import React from 'react';

import './Projects.css';
import Card from '../Card/Card.js';

import i from '../../Images/kite_thubnail.png';

const projects = props => (
    <div id="projects">
        <div className="about-title">
            Projects
        </div>
        <div id="contianer-project">
            <Card link="" image={i}/>
            <Card link="" image={i}/>
            <Card link="" image={i}/>
            <Card link="" image={i}/>
        </div>
    </div>
);

export default projects;