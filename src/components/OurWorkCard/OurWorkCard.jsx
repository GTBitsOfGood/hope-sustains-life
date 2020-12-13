import React from "react";
import { Image } from "react-bootstrap";
import classes from "./OurWorkCard.module.css";

/**
 * Component for Our Work Cards
 */

const OurWorkCard = ({ image, text, isMobile = false }) => {
  return (
    <div className={isMobile ? classes.mobileRoundedCard : classes.roundedCard}>
      <Image className={classes.icon} src={image}></Image>
      <p>{text}</p>
    </div>
  );
};

export default OurWorkCard;
