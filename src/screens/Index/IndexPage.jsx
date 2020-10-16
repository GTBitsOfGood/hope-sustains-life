import React from "react";
import classes from "./IndexPage.module.css";
import { Button, Row, Col, Image } from "react-bootstrap";
import TanzaniaImage from "../../../public/static/tanzania.jpg";
import BangledeshImage from "../../../public/static/bangledesh.jpg";
import HaitiImage from "../../../public/static/haiti.jpg";
import ImpactImage from "../../../public/static/impact.png";
import InnovationImage from "../../../public/static/innovation.png";
import TransparencyImage from "../../../public/static/transparency.png";
import LineImage from "../../../public/static/line-1.png";
import OurWorkImage from "../../../public/static/ourWork.png";
import RectangleImage from "../../../public/static/ourWorkRectangle.png";


const IndexPage = () => (
  <>
    <div className={classes.general}>
      <h1 className={classes.centerText}>HOPE SUSTAINS LIFE</h1>
      <p className={classes.centered}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Row>
        <Col></Col>
        <Col md="auto">
          <Button
            href="/learnmore"
            className="btn btn-success centerButton"
            type="submit"
          >
            LEARN MORE
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </div>
    <div className={classes.space}></div>
    <div className={classes.images}>
      <a href="/about/tanzania">
        <Image src={TanzaniaImage} className="pictures" fluid />
        <div className="centered">Tanzania</div>
      </a>
      <a href="/about/bangledesh">
        <Image src={BangledeshImage} className="pictures" fluid />
      </a>
      <a href="/about/haiti">
        <Image src={HaitiImage} className="pictures" fluid />
      </a>
    </div>
    <div className={classes.space}></div>

    
    <div className={classes.ourPrinciples}>
      <Image src={LineImage} className={classes.lineOne} />
        <h1 className={classes.our}>OUR</h1>
        <h1 className={classes.principles}>PRINCIPLES</h1>
        <Image src={LineImage} className={classes.lineTwo} />
    </div>

    
    

    <div className={classes.images}>
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
          <p>We make sure to provide GPS locations and 
            photos of the schools we have built or partnered 
            with to show the impact we have had on the refugee 
            population and the surrounding community</p>
        </div>
        <div className={classes.innovationP}>
          <p>Traditional methods have not been working for many 
            years. Our team works on developing breakthrough solutions
            to build or support schools for the refugee population.</p>
        </div>
        <div className={classes.transparencyP}>
          <p>We make sure 100% of your money goes to funding our 
            educational projects for the refugee population.</p>
        </div>
      </div>

      <div className={classes.space}></div>

      <div className={classes.ourPrinciples}>
      <Image src={LineImage} className={classes.lineOne} />
        <h1 className={classes.where}>WHERE</h1>
        <h1 className={classes.weAre}>WE ARE</h1>
        <Image src={LineImage} className={classes.lineTwo} />
    </div>

    <div className={classes.space}></div>

    <div className={classes.ourPrinciples}>
    <Image src={LineImage} className={classes.lineOne} />
        <h1 className={classes.our}>OUR</h1>
        <h1 className={classes.principles}>WORK</h1>
        <Image src={LineImage} className={classes.lineTwo} />
    </div>

    <div className={classes.ourWorkGeneral}>
      <Image src={RectangleImage} className={classes.rectangle} fluid/>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col lg="auto">
        <Button className={classes.viewMoreButton}>
            View More
          </Button>
        </Col>
        <Col></Col>
        
      </Row>
    </div>

      
  
  </>
);

export default IndexPage;
