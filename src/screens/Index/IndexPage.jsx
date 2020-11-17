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
import OurWorkImage from "../../../public/static/ourWork2.png";
import HomeImage from "../../../public/static/home-bg.jpg";
import urls from "../../../utils/urls";

const IndexPage = () => (
  <>
    <Card className="bg-dark text-white">
      <Card.Img src={HomeImage} alt="Card image" />
      <Card.ImgOverlay className={classes.homeOverlay}>
        <Card.Title className={classes.homeTitle}>
          HOPE SUSTAINS LIFE
        </Card.Title>
        <Card.Text className={classes.homeSubtitle}>
          Educating the future, one student at a time
        </Card.Text>
        <Button
          href={urls.pages.ourStory}
          className="btn centerButton"
          type="submit"
          style={{
            backgroundColor: "#00ae99",
            borderColor: "#00ae99",
          }}
        >
          Learn More
        </Button>
      </Card.ImgOverlay>
    </Card>
    <div className={classes.space}></div>
    <div className={classes.images}>
      <a href={urls.pages.tanzania}>
        <Image src={TanzaniaImage} className="pictures" fluid />
      </a>
      <a href={urls.pages.bangledesh}>
        <Image src={BangledeshImage} className="pictures" fluid />
      </a>
      <a href={urls.pages.haiti}>
        <Image src={HaitiImage} className="pictures" fluid />
      </a>
    </div>

    <div className={classes.space}></div>

    <div className={classes.ourPrinciples}>
      <Image src={LineImage} />
      <h1 className={classes.leftWord}>OUR</h1>
      <h1 className={classes.rightWord}>PRINCIPLES</h1>
      <Image src={LineImage} />
    </div>

    <div className={classes.ourPrinciplesImages}>
      <div className={classes.impactImage}>
        <Image src={ImpactImage} className={"pictures"} />
      </div>
      <div className={classes.innovationImage}>
        <Image src={InnovationImage} className="pictures" />
      </div>
      <div className={classes.transparencyImage}>
        <Image src={TransparencyImage} className="pictures" />
      </div>
    </div>

    <div className={classes.impactInnovationTransp}>
      <h2 className={classes.impact}>Impact</h2>
      <h2 className={classes.innovation}>Innovation</h2>
      <h2 className={classes.transparency}>Transparency</h2>
    </div>
    <div className={classes.paragraphs}>
      <div className={classes.impactP}>
        <p>
          We make sure to provide GPS locations and photos of the schools we
          have built or partnered with to show the impact we have had on the
          refugee population and the surrounding community
        </p>
      </div>
      <div className={classes.innovationP}>
        <p>
          Traditional methods have not been working for many years. Our team
          works on developing breakthrough solutions to build or support schools
          for the refugee population.
        </p>
      </div>
      <div className={classes.transparencyP}>
        <p>
          We make sure 100% of your money goes to funding our educational
          projects for the refugee population.
        </p>
      </div>
    </div>

    <div className={classes.space}></div>

    <div className={classes.ourPrinciples}>
      <Image src={LineImage} />
      <h1 className={classes.leftWord}>WHERE</h1>
      <h1 className={classes.rightWord}>WE ARE</h1>
      <Image src={LineImage} />
    </div>

    <div className={classes.space}></div>

    <div className={classes.ourPrinciples}>
      <Image src={LineImage} />
      <h1 className={classes.leftWord}>OUR</h1>
      <h1 className={classes.rightWord}>WORK</h1>
      <Image src={LineImage} />
    </div>
    <Card style={{ width: "80%", marginLeft: "auto", marginRight: "auto", marginTop:"40px"}} className="bg-dark text-white">
        <Card.Img src={OurWorkImage} alt="Card image" />
        <Card.ImgOverlay className={classes.donateCardOverlay}>
          <Card.Title
            className={classes.titleText}
          >
            Make A Difference.
          </Card.Title>
          <Card.Text className={classes.homeSubtitle}>
          Read about what we're working on and how we plan to do it.
        </Card.Text>
        <Button
          href={urls.pages.ourStory}
          className="btn centerButton"
          type="submit"
          style={{
            backgroundColor: "#00ae99",
            borderColor: "#00ae99",
          }}
        >
          View More
        </Button>
        </Card.ImgOverlay>
      </Card>
  </>
);

export default IndexPage;
