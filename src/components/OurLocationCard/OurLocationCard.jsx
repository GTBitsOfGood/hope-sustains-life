import React from "react";
import { Image, Button } from "react-bootstrap";
import classes from "./OurLocationCard.module.css";
import Link from "next/link";

/**
 * Component for Our Location Cards
 */

const OurLocationCard = ({ image, title, location, navlink }) => {
  return (
    <div className={classes.roundedCard}>
      <Image className={classes.icon} src={image} fluid rounded />
      <div className={classes.locationDescription}>
        <h2 className={classes.locationTitle}>{title}</h2>
        <h1 className={classes.location}>{location}</h1>
        <Link href={navlink}>
          <Button className={classes.viewMore}>View More</Button>
        </Link>
      </div>
    </div>
  );
};

export default OurLocationCard;
