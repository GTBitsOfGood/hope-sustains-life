import React from "react";
import classes from "./IndexPage.module.css";
import { Button, Row, Col } from "react-bootstrap";
import TanzaniaImage from "../../../public/static/tanzania.jpg";
import BangledeshImage from "../../../public/static/bangledesh.jpg";
import HaitiImage from "../../../public/static/haiti.jpg";

const IndexPage = () => (
  <>
    <div className={classes.general}>
      <h1 className={classes.centerText}>HOPE SUSTAINS LIFE</h1>
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
        <img src={TanzaniaImage} className="pictures" />
        <div className="centered">Tanzania</div>
      </a>
      <a href="/about/bangledesh" className="pictures">
        <img src={BangledeshImage} />
      </a>
      <a href="/about/haiti" className="pictures">
        <img src={HaitiImage} />
      </a>
    </div>
  </>
);

export default IndexPage;
