import React from "react";
import classes from "./GetInvovledPage.module.css";
import urls from "../../../utils/urls";
import Link from "next/link";
import { Button } from "react-bootstrap";
import NavCard from "./NavCard";

function GetInvolvedPage() {

  const contents = (
    <>
      <div className={classes.title}>
        Their education is fueled by your generosity
      </div>
      <div className={classes.grid}>
        <NavCard
          img="/static/BangladeshImage.png"
          link={urls.pages.joinClassroom}
          content={
            <p>
              Join a community of donors that directly fund the something of a
              classroom
            </p>
          }
          buttonData={"Fund a Classroom"}
        />
        <NavCard
          img="/static/libraryHeaderPic.png"
          link={urls.pages.joinLibrary}
          content={
            <p>Join the library - a group of donors that help ADDD MOREEE</p>
          }
          buttonData={"Join the Library"}
        />
        <NavCard
          img="/static/BangladeshImage.png"
          link={urls.pages.joinLibrary}
          content={
            <p>
              Learn more about other ways to get involved with Hope Sustains
              Life
            </p>
          }
          buttonData={"Other Opportunities"}
        />
      </div>
    </>
  );

  return (
    <div className={classes.screen}>
      <div className={classes.mainContainer}>
        <div>{contents}</div>
      </div>
    </div>
  );
}

export default GetInvolvedPage;
