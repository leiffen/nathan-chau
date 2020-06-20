import React from "react";

import "./BrandIcon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BrandIcon = ({ hyperLink, iconClass }) => (
    <a href={hyperLink} rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon
            icon={iconClass}
            size="3x"
            className="icon"
        ></FontAwesomeIcon>
    </a>
);

export default BrandIcon;
