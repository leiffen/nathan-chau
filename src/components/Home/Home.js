import React, {Component} from 'react';

import './Home.css';
import BrandIcon from '../Icon/BrandIcon';
import { faLinkedin ,faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

import resume from '../../Files/Resume.pdf';

class main extends Component {
    render() {

        return (
            <div id="home">
                <div className="container">
                    <p className="title">
                        <strong>Nathan Chau</strong>
                    </p>
                    <p className="subtitle">
                        <em>Software Developer and Bassist</em>
                    </p>
                    <div className="icons">
                        <BrandIcon hyperLink="https://www.linkedin.com/in/nathankcchau/" iconClass={faLinkedin}/>
                        <BrandIcon hyperLink="https://github.com/leiffen" iconClass={faGithubSquare}/>
                        <BrandIcon hyperLink= {resume} iconClass={faFile}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default main;