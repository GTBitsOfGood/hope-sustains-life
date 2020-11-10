import React from "react";
import classes from "./bangledesh.module.css";
import { Image, Button } from "react-bootstrap";
import BangledeshPic from "../../../../public/static/realBangledeshPic.png";
import { displayMobileView } from "../../../../utils/screen";

function Bangledesh() {
  const isMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };

  const mobileView = isMobile();

  if (mobileView) {
    return (
      <>
        <div className={classes.general}>
          <h1 className={classes.centerText}>Bangladesh</h1>
        </div>

        <div className={classes.space}></div>

        <div className={classes.grid}>
          <Image src={BangledeshPic} className={classes.gridImage} />
          <div>
            <h1 className={classes.dubedou}>Kutupalong refugee camp</h1>
            <h1 className={classes.haiti}>Coxx Bazaar, Bangladash</h1>
            <p className={classes.gridText}>
              Kutupalong refugee camp is one of the newly established refugee
              <br></br> camps within the UNHCR network. It is mainly made of
              Rohingya<br></br> refugees that fled neighbouring Myanmar due to
              ethnic and<br></br> religious persecution by the government. As of
              June 2020, the<br></br> camp has over 800,000 refugees many of
              them being children who<br></br> do not have access to a proper
              education. HSL is currently in the<br></br> process of scouting
              nearby communities where we will be able to<br></br> partner with
              the local governments to establish a safe and reliable<br></br>{" "}
              infrastructure for education.
            </p>
          </div>
        </div>

        <div className={classes.space}></div>
        <div className={classes.space}></div>

        <div className={classes.background}>
          <h1 className={classes.donateText}>
            Don’t wait to change the<br></br>world...the world needs the{" "}
            <br></br>change you can bring now
          </h1>
          <div className={classes.buttonDiv}>
            <button className={classes.donateButton}>Donate</button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={classes.general}>
          <h1 className={classes.centerText}>Bangladesh</h1>
        </div>

        <div className={classes.space}></div>

        <div className={classes.grid}>
          <Image src={BangledeshPic} className={classes.gridImage} />
          <div>
            <h1 className={classes.dubedou}>Kutupalong refugee camp</h1>
            <h1 className={classes.haiti}>Coxx Bazaar, Bangladash</h1>
            <p className={classes.gridText}>
              Kutupalong refugee camp is one of the newly established refugee
              <br></br> camps within the UNHCR network. It is mainly made of
              Rohingya<br></br> refugees that fled neighbouring Myanmar due to
              ethnic and<br></br> religious persecution by the government. As of
              June 2020, the<br></br> camp has over 800,000 refugees many of
              them being children who<br></br> do not have access to a proper
              education. HSL is currently in the<br></br> process of scouting
              nearby communities where we will be able to<br></br> partner with
              the local governments to establish a safe and reliable<br></br>{" "}
              infrastructure for education.
            </p>
          </div>
        </div>

        <div className={classes.space}></div>
        <div className={classes.space}></div>

        <div className={classes.background}>
          <h1 className={classes.donateText}>
            Don’t wait to change the<br></br>world...the world needs the{" "}
            <br></br>change you can bring now
          </h1>
          <div className={classes.buttonDiv}>
            <button className={classes.donateButton}>Donate</button>
          </div>
        </div>
      </>
    );
  }
}

export default Bangledesh;
