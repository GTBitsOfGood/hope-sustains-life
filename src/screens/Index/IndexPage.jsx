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
import urls from "../../../utils/urls";
import Link from "next/link";

const IndexPage = () => {
  const isMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };

  const mobileView = isMobile();
  return (
    <>
      <Card
        className={mobileView ? `bg-dark text-white ${classes.mobileHeaderCard}` : "bg-dark text-white"}
      >
        <Card.Img
          style={mobileView ? { height: "100%", width: "300%" } : {}}
          src={HomeImage}
          alt="Card image"
        />
        <Card.ImgOverlay className={classes.homeOverlay}>
          <Card.Title
            className={mobileView ? classes.mobileHomeTitle : classes.homeTitle}
          >
            HOPE SUSTAINS LIFE
          </Card.Title>
          <Card.Text
            style={mobileView ? { fontSize: 15 } : {}}
            className={classes.homeSubtitle}
          >
            Educating the future, one student at a time
          </Card.Text>
          <Link href={urls.pages.ourStory}>
            <Button
              className={mobileView ? classes.mobileLearnMore : classes.learnMore}
            >
              Learn More
            </Button>
          </Link>
        </Card.ImgOverlay>
      </Card>
      <div className={classes.space}></div>
      <div className={mobileView ? "" : classes.images}>
        <Link href={urls.pages.tanzania}>
          <Image src={TanzaniaImage} className="pictures" fluid />
        </Link>
        <Link href={urls.pages.bangledesh}>
          <Image src={BangledeshImage} className="pictures" fluid />
        </Link>
        <Link href={urls.pages.haiti}>
          <Image
            style={mobileView ? { marginBottom: "20%" } : {}}
            src={HaitiImage}
            className="pictures"
            fluid
          />
        </Link>
      </div>

      <div className={classes.space}></div>

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
          OUR
        </h1>
        <h1
          style={mobileView ? { fontSize: 20, paddingRight: 20 } : {}}
          className={classes.rightWord}
        >
          PRINCIPLES
        </h1>
        <Image src={LineImage} />
      </div>

      <div
        className={
          mobileView ? classes.mobileImages : classes.ourPrinciplesImages
        }
      >
        <div className={mobileView ? "" : classes.impactImage}>
          <Image
            style={mobileView ? { marginLeft: "10%" } : {}}
            src={ImpactImage}
            className={"pictures"}
          />
          {mobileView && (
            <>
              <h2 className={classes.mobileImagesText}>Impact</h2>
              <p className={classes.mobileImagesBody}>
                We make sure to provide GPS locations and photos of the schools
                we have built or partnered with to show the impact we have had
                on the refugee population and the surrounding community
              </p>
            </>
          )}
        </div>
        <div className={mobileView ? "" : classes.innovationImage}>
          <Image
            style={mobileView ? { marginLeft: "15%" } : {}}
            src={InnovationImage}
            className="pictures"
          />
          {mobileView && (
            <>
              <h2 className={classes.mobileImagesText}>Innovation</h2>
              <p className={classes.mobileImagesBody}>
                Traditional methods have not been working for many years. Our
                team works on developing breakthrough solutions to build or
                support schools for the refugee population.
              </p>
            </>
          )}
        </div>
        <div className={mobileView ? "" : classes.transparencyImage}>
          <Image
            style={mobileView ? { marginLeft: "10%" } : {}}
            src={TransparencyImage}
            className="pictures"
          />
          {mobileView && (
            <>
              <h2 className={classes.mobileImagesText}>Transparency</h2>
              <p className={classes.mobileImagesBody}>
                We make sure 100% of your money goes to funding our educational
                projects for the refugee population.
              </p>
            </>
          )}
        </div>
      </div>

      {!mobileView && (
        <>
          <div className={classes.impactInnovationTransp}>
            <h2 className={classes.impact}>Impact</h2>
            <h2 className={classes.innovation}>Innovation</h2>
            <h2 className={classes.transparency}>Transparency</h2>
          </div>
          <div className={classes.paragraphs}>
            <div className={classes.impactP}>
              <p>
                We make sure to provide GPS locations and photos of the schools
                we have built or partnered with to show the impact we have had
                on the refugee population and the surrounding community
              </p>
            </div>
            <div className={classes.innovationP}>
              <p>
                Traditional methods have not been working for many years. Our
                team works on developing breakthrough solutions to build or
                support schools for the refugee population.
              </p>
            </div>
            <div className={classes.transparencyP}>
              <p>
                We make sure 100% of your money goes to funding our educational
                projects for the refugee population.
              </p>
            </div>
          </div>
        </>
      )}

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
        style={{ borderWidth: 0 }}
        name="mapscout"
        scrolling="no"
        frameBorder="0"
        marginHeight="0px"
        marginWidth="0px"
        height="814px"
        width="100%"
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
        className={mobileView? `bg-dark text-white ${classes.mobileHeaderCard}` : "bg-dark text-white" }
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
            className={mobileView ? classes.mobileHomeSubtitle : classes.homeSubtitle}
          >
            Read about what we're working on and how we plan to do it.
          </Card.Text>
          <Link href={urls.pages.ourStory}>
          <Button className={mobileView ? classes.mobileViewMore : classes.viewMore}>
            View More
          </Button>
          </Link>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};
export default IndexPage;
