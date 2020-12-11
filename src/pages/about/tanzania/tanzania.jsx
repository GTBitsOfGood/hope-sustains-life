import React from "react";
import classes from "./tanzania.module.css";
import { Image, Button } from "react-bootstrap";
import HaitiImage from "../../../../public/static/HaitiImage.png";
import { displayMobileView } from "../../../../utils/screen";
import urls from "../../../../utils/urls";
import Link from "next/link";

function Tanzania() {
  const isMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };

  const mobileView = isMobile();
  if (mobileView) {
    return (
      <>
        <div className={classes.general}>
          <h1 className={classes.centerText}>Tanzania</h1>
        </div>

        <div className={classes.space}></div>

        <div className={classes.grid}>
          <Image src={HaitiImage} className={classes.gridImage} />
          <div>
            <h1 className={classes.dubedou}>Nyarugusu refugee camp</h1>
            <h1 className={classes.haiti}>Kigoma, Tanzania</h1>
            <p className={classes.gridText}>
              Nyarugusu Refugee Camp is one of the largest refugee camps in the
              <br></br> world with about 150,00 residents. This is where we plan
              on doing our<br></br> first refugee project! This is a camp of
              about 4200 secondary<br></br> students, mainly Congolese and
              Burundian. We are currently in the<br></br> process of partnering
              with one of the local churches outside of the<br></br> camp to
              assist with locating a place that is close and convenient for
              <br></br> the refugee population so that children will be able to
              travel safely to<br></br> and from school.
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
            <Link href={urls.pages.donate.index}>
              <Button className={classes.donateButton}>Donate</Button>
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={classes.general}>
          <h1 className={classes.centerText}>Tanzania</h1>
        </div>

        <div className={classes.space}></div>

        <div className={classes.grid}>
          <Image src={HaitiImage} className={classes.gridImage} />
          <div>
            <h1 className={classes.dubedou}>Nyarugusu refugee camp</h1>
            <h1 className={classes.haiti}>Kigoma, Tanzania</h1>
            <p className={classes.gridText}>
              Nyarugusu Refugee Camp is one of the largest refugee camps in the
              <br></br> world with about 150,00 residents. This is where we plan
              on doing our<br></br> first refugee project! This is a camp of
              about 4200 secondary<br></br> students, mainly Congolese and
              Burundian. We are currently in the<br></br> process of partnering
              with one of the local churches outside of the<br></br> camp to
              assist with locating a place that is close and convenient for
              <br></br> the refugee population so that children will be able to
              travel safely to<br></br> and from school.
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
            <Link href={urls.pages.donate.index}>
              <Button className={classes.donateButton}>Donate</Button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Tanzania;
