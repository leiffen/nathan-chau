import React from 'react';

import './BrandIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const brandIcon = props => (
    <a href={props.hyperLink} rel="noopener noreferrer" target="_blank">
        <FontAwesomeIcon icon={props.iconClass} size="3x" className="icon"></FontAwesomeIcon>
    </a>
);

export default brandIcon;