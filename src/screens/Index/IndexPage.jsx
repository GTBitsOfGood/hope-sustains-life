import React from "react";
import classes from "./IndexPage.module.css";
import { Button, Row, Col, Image } from "react-bootstrap";
import TanzaniaImage from "../../../public/static/tanzania.jpg";
import BangledeshImage from "../../../public/static/bangledesh.jpg";
import HaitiImage from "../../../public/static/haiti.jpg";
import urls from "../../../utils/urls";

const IndexPage = () => (
  <div className={classes.pageContainer}>
    <div className={classes.general}>
      <h1 className={classes.centerText}>HOPE SUSTAINS LIFE</h1>
      <p className={classes.centered}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <Row>
        <Col></Col>
        <Col md="auto">
          <Button
            href={urls.pages.learnMore}
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
  </div>
);

export default IndexPage;
