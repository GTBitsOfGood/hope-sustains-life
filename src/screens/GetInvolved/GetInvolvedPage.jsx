import React from "react";
import classes from "./GetInvolvedPage.module.css";
import urls from "../../../utils/urls";
import NavCard from "./NavCard";

function GetInvolvedPage() {
  return (
    <div className={classes.screen}>
      <div className={classes.mainContainer}>
        <div className={classes.title}>
          Their education is fueled by your generosity
        </div>
        <div className={classes.grid}>
          <NavCard
            img="/static/BangladeshImage.png"
            link={urls.pages.joinClassroom}
            content={
              "Join a community of donors that are opening up opportunities to the next generation of children."
            }
            buttonData={"Fund a Classroom"}
          />
          <NavCard
            img="/static/libraryHeaderPic.png"
            link={urls.pages.joinLibrary}
            content={
              "Join a group of private donors who assist with advancing the vision of Hope Sustains Life and also make sure we are meeting our 100% transparency promise."
            }
            buttonData={"Join the Library"}
          />
          <NavCard
            img="/static/ourWork.png"
            link={urls.pages.joinLibrary}
            content={
              "Learn more about other ways to get involved with Hope Sustains Life."
            }
            buttonData={"Other Opportunities"}
          />
        </div>
      </div>
    </div>
  );
}

export default GetInvolvedPage;
