import React from "react";
import classes from "./haiti.module.css";
import { Image, Button } from "react-bootstrap";
import HaitiImage from "../../../../public/static/HaitiImage.png";
import BangledeshPic from "../../../../public/static/realBangledeshPic.png";
import question from "../../../../public/static/question.svg";
import construction from "../../../../public/static/construction.svg";
import { displayMobileView } from "../../../../utils/screen";
import Link from "next/link";
import urls from "../../../../utils/urls";
import Footer from "../../../components/Footer";

function Haiti() {
  const isMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };

  const mobileView = isMobile();

  return (
    <>
      <div className={classes.general}>
        <h1 className={classes.centerText}>Dubedou, Haiti</h1>
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
            <div className={classes.textheader}>
            <Image
          src={question}
          className={mobileView ? classes.mobileImage : classes.gridIcon}
        />
            <h2>What We Want to Build</h2>
          </div>
          <p className={classes.gridText}>
            This is where it all began! Back in 2011 was where the father and
            son duo started helping and where the co-founder, Theordore, would
            spend his summers as a child. The project initially started small
            with providing food and building an artesian well for the locals but
            then we saw how so many children were missing out on an education in
            a country where only 20% of eligible children for secondary school
            are enrolled.
          </p>
          </div>
        </div>
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
            <div className={classes.textheader}>
            <Image
          src={construction}
          className={mobileView ? classes.mobileImage : classes.gridIcon}
        />
            <h2>Our Goal + Progress</h2>
            </div>
          <p className={classes.gridText}>
            Our goal now is to partner with local nonprofits andthe government 
            to initiate the process of building a school for the village of Dubedou. 
            When building the school, the impact is not only the children who will 
            receive a formal education but the communityand the jobs that will 
            be provided during this process. Students from local universities 
            will also have access to good paying jobs as they come on as teachers.
          </p>
          </div>
        </div>
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
      <div className={classes.space}></div>
      <Footer />
    </>
  );
}

export default Haiti;
