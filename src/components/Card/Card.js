import React from "react";

import "./Card.css";

const Card = ({ link, image }) => (
    <div className="card">
        <a href={link}>
            <img src={image} alt=""></img>
        </a>
    </div>
);

export default Card;
