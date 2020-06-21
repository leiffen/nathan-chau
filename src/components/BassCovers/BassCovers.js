import React from "react";

import "./BassCovers.css";
import Card from "../Card/Card.js";

import kiteTN from "../../Images/kite_tn.png";
import quitsmokingTN from "../../Images/quitsmoking_tn.png";
import lemonTN from "../../Images/lemon_tn.png";
import littleguyTN from "../../Images/littleguy_tn.png";
import afterusTN from "../../Images/afterus_tn.png";
import kkhouseTN from "../../Images/kkhouse_tn.png";

const Basscovers = () => (
    <div id="basscovers">
        <div className="basscover-title">Bass Covers</div>
        <div id="contianer-basscover">
            <Card link="https://youtu.be/7f4Zq1gZeLE" image={kiteTN} />
            <Card link="https://youtu.be/dObxR0pXQHY" image={quitsmokingTN} />
            <Card link="https://youtu.be/TwPA4HXtjAA" image={lemonTN} />
            <Card link="https://youtu.be/ZLI62bI5X7A" image={littleguyTN} />
            <Card link="https://youtu.be/R5jL43hlI5A" image={afterusTN} />
            <Card link="https://youtu.be/U8bB1bp_Tto" image={kkhouseTN} />
        </div>
    </div>
);

export default Basscovers;
