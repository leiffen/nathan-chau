import React from 'react';

import './Banner.css';
import BrandIcon from '../Icon/BrandIcon';
import { faLinkedin ,faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import resume from '../../Files/Resume.pdf';

const banner = props => (
    <div class="background">
        <div class="container">
            <p class="subtitle">
                <em>Hey, I'm</em>
            </p>
            <p class="title">
                <strong>NATHAN CHAU</strong>
            </p>
            <div class="icons">
                <BrandIcon hyperLink="https://www.linkedin.com/in/nathankcchau/" iconClass={faLinkedin}/>
                <BrandIcon hyperLink="https://github.com/leiffen" iconClass={faGithubSquare}/>
                <BrandIcon hyperLink= {resume} iconClass={faFile}/>
            </div>
        </div>
    </div>
);

export default banner;