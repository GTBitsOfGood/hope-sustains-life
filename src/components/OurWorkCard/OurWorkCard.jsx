import React from "react";
import { Image } from "react-bootstrap";
import classes from "./OurWorkCard.module.css";

/**
 * Component for Our Work Cards
 */

const OurWorkCard = ({ image, text }) => {
  return (
    <div className={classes.roundedCard}>
      <Image className={classes.icon} src={image}></Image>
      <p>{text}</p>
    </div>
  );
};

export default OurWorkCard;
