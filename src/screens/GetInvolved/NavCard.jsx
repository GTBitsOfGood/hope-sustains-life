import React from "react";
import classes from "./GetInvovledPage.module.css";
import Link from "next/link";
import { Button, Image } from "react-bootstrap";

function NavCard(props) {

    return (
      <div className={classes.navCard}>
        <Image
          src={props.img}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <br />
        <Link href={props.link}>
          <Button className={classes.Button}>{props.buttonData}</Button>
        </Link>
        <p className={classes.content}>{props.content}</p>
      </div>
    );
}

export default NavCard;