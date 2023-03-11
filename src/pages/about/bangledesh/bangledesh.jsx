import React from "react";
import classes from "./bangledesh.module.css";
import { Image, Button } from "react-bootstrap";
import HaitiImage from "../../../../public/static/HaitiImage.png";
import BangledeshPic from "../../../../public/static/realBangledeshPic.png";
import question from "../../../../public/static/question.svg";
import construction from "../../../../public/static/construction.svg";
import { displayMobileView } from "../../../../utils/screen";
import urls from "../../../../utils/urls";
import Link from "next/link";

function Bangledesh() {
  const isMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };

  const mobileView = isMobile();
  return (
    <>
      <div className={classes.general}>
        <h1 className={classes.centerText}>Coxx Bazaar, Bangladash</h1>
        <h1 className={classes.dubedou}>Kutupalong refugee camp</h1>
      </div>

      <div className={classes.space}></div>

      <div
      className={mobileView ? classes.mobileContainer : classes.gridOutterContainer}>

      <div
        className={mobileView ? classes.mobileContainer : classes.gridContainer}
      >
        <Image
          src={HaitiImage}
          className={mobileView ? classes.mobileImage : classes.gridImage}
        />
        <div
          className={
            mobileView ? classes.mobileDescription : classes.description
          }
        >
          <div
          className={classes.textcontainer}>
            <h2>What We Want to Build</h2>
          <p className={classes.gridText}>
            Kutupalong refugee camp is one of the newly established refugee
            camps within the UNHCR network. It is mainly made of Rohingya
            refugees that fled neighbouring Myanmar due to ethnic and religious
            persecution by the government. As of June 2020, the camp has over
            800,000 refugees many of them being children who do not have access
            to a proper education.
          </p>
          </div>
        </div>
          <Image
          src={question}
          className={mobileView ? classes.mobileImage : classes.grildicon}
        />
      </div>
        <div className={classes.space}></div>
      <div
        className={mobileView ? classes.mobileContainer : classes.gridContainer}
      >
        <Image
          src={BangledeshPic}
          className={mobileView ? classes.mobileImage : classes.gridImage}
        />
        <div
          className={
            mobileView ? classes.mobileDescription : classes.description
          }
        >
          <div
          className={classes.textcontainer}>
            <h2>Our Goal + Progress</h2>
          <p className={classes.gridText}>
            HSL is currently in the process of scouting
            nearby communities where we will be able to partner with the local
            governments to establish a safe and reliable infrastructure for
            education.
          </p>
          </div>
        </div>
          <Image
          src={construction}
          className={mobileView ? classes.mobileImage : classes.grildicon}
        />
      </div>
      </div>

      <div className={classes.space}></div>
      <div className={classes.space}></div>

      <div className={classes.background}>
        {mobileView && (
          <div className="d-flex flex-column justify-content-center">
            <h1 className={classes.donateTextMobile}>
              Don’t wait to change the world...the world needs the change you
              can bring now
            </h1>
            <Link href={urls.pages.donate.index}>
              <Button className={classes.donateButton}>Donate</Button>
            </Link>
          </div>
        )}
        {!mobileView && (
          <>
            <h1 className={classes.donateText}>
              Don’t wait to change the<br></br>world...the world needs the{" "}
              <br></br>
              change you can bring now
            </h1>
            <div className={classes.buttonDiv}>
              <Link href={urls.pages.donate.index}>
                <Button className={classes.donateButton}>Donate</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Bangledesh;
