import React from "react";
import classes from "./IndexPage.module.css";
import { Button, Row, Col, Image, Card } from "react-bootstrap";
import TanzaniaImage from "../../../public/static/tanzania.jpg";
import BangledeshImage from "../../../public/static/bangledesh.jpg";
import HaitiImage from "../../../public/static/haiti.jpg";
import ImpactImage from "../../../public/static/impact.png";
import InnovationImage from "../../../public/static/innovation.png";
import TransparencyImage from "../../../public/static/transparency.png";
import LineImage from "../../../public/static/line-1.png";
import OurWorkImage from "../../../public/static/ourWork.png";
import { displayMobileView } from "../../../utils/screen.js";
import HomeImage from "../../../public/static/home-bg.jpg";
import HomePrinciple from "../../components/HomePrinciple";
import {
  impactText,
  innovationText,
  transparencyText,
} from "./PrincipleDescriptions";
import urls from "../../../utils/urls";
import Link from "next/link";
import Footer from "../../components/Footer";

const IndexPage = () => {
  const isMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };

  const mobileView = isMobile();
  return (
    <>
      <Card
        className={
          mobileView
            ? `bg-dark text-white ${classes.mobileHeaderCard}`
            : "bg-dark text-white"
        }
      >
        <Card.Img
          style={mobileView ? { height: "100%", width: "300%" } : {}}
          src={HomeImage}
          alt="Card image"
        />
        <Card.ImgOverlay className={classes.homeOverlay}>
          <Card.Title
            style={
              mobileView ? { marginRight: "auto", marginLeft: "auto" } : {}
            }
            className={mobileView ? classes.mobileHomeTitle : classes.homeTitle}
          >
            HOPE SUSTAINS LIFE
          </Card.Title>
          <Card.Text
            style={
              mobileView
                ? { fontSize: "20px", marginLeft: "auto", marginRight: "auto" }
                : {}
            }
            className={classes.homeSubtitle}
          >
            Educating the future, one student at a time
          </Card.Text>
          <Link href={urls.pages.ourStory}>
            <Button
              className={
                mobileView ? classes.mobileLearnMore : classes.learnMore
              }
            >
              Learn More
            </Button>
          </Link>
        </Card.ImgOverlay>
      </Card>
      <div className={classes.space}></div>
      <div className={mobileView ? "" : classes.images}>
        <Link href={urls.pages.tanzania}>
          <Image
            src={TanzaniaImage}
            className={mobileView ? {} : classes.pictures}
            fluid
          />
        </Link>
        <Link href={urls.pages.bangledesh}>
          <Image
            src={BangledeshImage}
            className={mobileView ? {} : classes.pictures}
            fluid
          />
        </Link>
        <Link href={urls.pages.haiti}>
          <Image
            style={mobileView ? { marginBottom: "20%" } : {}}
            src={HaitiImage}
            className={mobileView ? {} : classes.pictures}
            fluid
          />
        </Link>
      </div>

      <div className={classes.space}></div>

      <div className={classes.ourPrinciples}>
        <Image src={LineImage} />
        <h1 className={mobileView ? classes.mobileLeftWord : classes.leftWord}>
          OUR
        </h1>
        <h1
          className={mobileView ? classes.mobileRightWord : classes.rightWord}
        >
          PRINCIPLES
        </h1>
        <Image src={LineImage} />
      </div>

      <div
        className={
          mobileView
            ? classes.mobilePrinciplesContainer
            : classes.principlesContainer
        }
      >
        <HomePrinciple
          image={ImpactImage}
          title="Impact"
          text={impactText}
          isMobile={mobileView}
        />
        <HomePrinciple
          image={InnovationImage}
          title="Innovation"
          text={innovationText}
          isMobile={mobileView}
        />
        <HomePrinciple
          image={TransparencyImage}
          title="Transparency"
          text={transparencyText}
          isMobile={mobileView}
        />
      </div>
      <div className={classes.ourPrinciples}>
        <Image src={LineImage} />
        <h1
          style={
            mobileView
              ? { fontSize: 20, marginRight: -10, paddingLeft: 20 }
              : {}
          }
          className={classes.leftWord}
        >
          WHERE
        </h1>
        <h1
          style={mobileView ? { fontSize: 20, paddingRight: 20 } : {}}
          className={classes.rightWord}
        >
          WE&nbsp;ARE
        </h1>
        <Image src={LineImage} />
      </div>

      <iframe
        src="https://www.mapscout.io/hopesustainslife"
        style={{
          borderWidth: 0,
          marginTop: "40px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
        name="mapscout"
        scrolling="no"
        frameBorder="0"
        height="814px"
        width="90%"
        className={classes.centerMap}
        allowFullScreen
      />

      <div className={classes.space}></div>

      <div
        style={mobileView ? { marginBottom: "20%" } : {}}
        className={classes.ourPrinciples}
      >
        <Image src={LineImage} />
        <h1
          style={
            mobileView
              ? { fontSize: 20, marginRight: -10, paddingLeft: 20 }
              : {}
          }
          className={classes.leftWord}
        >
          OUR
        </h1>
        <h1
          style={mobileView ? { fontSize: 20, paddingRight: 20 } : {}}
          className={classes.rightWord}
        >
          WORK
        </h1>
        <Image src={LineImage} />
      </div>

      <Card
        className={
          mobileView
            ? `bg-dark text-white ${classes.mobileHeaderCard}`
            : `bg-dark text-white ${classes.differenceCard}`
        }
      >
        <Card.Img
          style={mobileView ? { height: "100%", width: "120%" } : {}}
          src={OurWorkImage}
          alt="Card image"
        />
        <Card.ImgOverlay className={classes.donateCardOverlay}>
          <Card.Title
            style={mobileView ? { fontSize: 15 } : {}}
            className={classes.titleText}
          >
            Make A Difference.
          </Card.Title>
          <Card.Text
            className={
              mobileView
                ? classes.mobileHomeSubtitle
                : classes.differenceSubtitle
            }
          >
            Read about what we're working on and how we plan to do it.
          </Card.Text>
          <Link href={urls.pages.ourStory}>
            <Button
              className={mobileView ? classes.mobileViewMore : classes.viewMore}
            >
              View More
            </Button>
          </Link>
        </Card.ImgOverlay>
      </Card>
      <Footer />
    </>
  );
};
export default IndexPage;
