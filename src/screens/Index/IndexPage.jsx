import React from "react";
import classes from "./IndexPage.module.css";
import { Button, Row, Col } from "react-bootstrap";

const IndexPage = () => (
    <div className={classes.general}>
          <h1 className={classes.centerText}>HOPE SUSTAINS LIFE</h1>
          <Row>
            <Col></Col>
            <Col md="auto"><Button href="/learnmore" className="btn btn-success centerButton" type="submit">LEARN MORE</Button></Col>
            <Col></Col>
          </Row>
    </div>
);

export default IndexPage;
