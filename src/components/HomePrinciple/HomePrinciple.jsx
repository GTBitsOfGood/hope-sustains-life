import React from "react";
import { Image } from "react-bootstrap";
import classes from "./HomePrinciple.module.css";

/**
 * Component for Home Principle
 */

const HomePrinciple = ({ image, title, text, isMobile = false }) => {
  return (
    <div className={isMobile ? classes.mobileCard : classes.card}>
      <Image className={classes.icon} src={image} fluid />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default HomePrinciple;
