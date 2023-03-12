import React from "react";
import classes from "./DonationSection.module.css";
import { displayMobileView } from "../../../utils/screen";
import Link from "next/link";
import urls from "../../../utils/urls";
import { Button } from "react-bootstrap";

const DonationSection = () => {
  const isMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };
  const mobileView = isMobile();

  return (
    <div>
      {mobileView && (
        <div className="d-flex flex-column justify-content-center">
          <h1 className={classes.donateTextMobile}>
            Don’t wait to change the world... the world needs the change you can
            bring now.
          </h1>
          <Link href={urls.pages.donate.index}>
            <Button className={classes.donateButton}>Donate</Button>
          </Link>
        </div>
      )}
      {!mobileView && (
        <>
          <h1 className={classes.donateText}>
            Don’t wait to change the world... the world needs the change you can
            bring now.
          </h1>
          <div className={classes.buttonDiv}>
            <Link href={urls.pages.donate.index}>
              <Button className={classes.donateButton}>Donate</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default DonationSection;
