import React from "react";

import "./Home.css";
import BrandIcon from "../Icon/BrandIcon";
import {
    faLinkedin,
    faGithubSquare,
    faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import resume from "../../Files/Resume.pdf";

function Main() {
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
                    <BrandIcon
                        hyperLink="https://www.linkedin.com/in/nathankcchau/"
                        iconClass={faLinkedin}
                    />
                    <BrandIcon
                        hyperLink="https://github.com/leiffen"
                        iconClass={faGithubSquare}
                    />
                    <BrandIcon hyperLink={resume} iconClass={faFile} />
                    <BrandIcon
                        hyperLink="https://www.youtube.com/channel/UCvzsdNHcJSWwZR_MRH6uVsQ"
                        iconClass={faYoutubeSquare}
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;
