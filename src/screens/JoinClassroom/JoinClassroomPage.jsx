import React from "react";
import styles from "./JoinClassroomPage.module.css";
import MainPic from "../../../public/static/main-classroom.png";
import ClassroomPic1 from "../../../public/static/classroom1.png";
import ClassroomPic2 from "../../../public/static/classroom2.png";
import ClassroomPic3 from "../../../public/static/classroom3.png";
import ClassroomPic4 from "../../../public/static/classroom4.png";
import ClassroomPic5 from "../../../public/static/classroom5.png";
import ClassroomPic6 from "../../../public/static/classroom6.png";
import ClassroomPic7 from "../../../public/static/classroom7.png";
import ClassroomPic8 from "../../../public/static/classroom8.png";
import ClassroomPic9 from "../../../public/static/classroom9.png";

import classes from "./JoinClassroomPage.module.css";
import { Image, Col, Row } from "react-bootstrap";
import { displayMobileView } from "../../../utils/screen";

function JoinClassroomPage() {
  const isMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };
  const mobileView = isMobile();

  if (mobileView) {
    return (
      <>
        <div>
          <div>
            <Image fluid src={MainPic} className={classes.picture} />
            <h1 className={classes.pageName}>The Classroom</h1>
          </div>
          <div className={styles.mainContainer}>
            <div className={classes.card}>
              <h1 className={classes.title}>
                Everyone <span className={classes.blueText}>welcome!</span>
              </h1>
              <br />
              <p>
                The Classroom is our community of donors. Their contributions
                are put straight back into the project fund.
              </p>
              <p>
                The Classroom is our group of public donors that are opening up
                opportunities to the next generation of children. Their{" "}
                <br></br>donations are put into the necessities that we take for
                granted: the school, their school materials, and the meals. This{" "}
                <br></br>community can follow as blogs are posted on world
                updates and how the Hope Sustains Life projects are progressing.
              </p>
              <br />
              <br />
              <Col md={2}>
                <h1 className={classes.greenUnderline}>
                  &emsp;&emsp;The{" "}
                  <span className={classes.blueText}>Impact</span>
                </h1>
              </Col>
              <br />
              <br />
              <p>
                Education gives these young minds HOPE. Your contribution is an
                investment in the astounding number of refugee <br></br>children
                out of school. Imagine navigating the world without anything or
                anyone to believe in you. Education paves a <br></br>brighter
                path to becoming self-sufficient individuals that are capable of
                achieving incredible feats, just as long as <br></br>they’re
                given the tools to harness those strengths.
              </p>
              <br />
              <br />
              <Col md={2}>
                <h1 className={classes.greenUnderline}>
                  &emsp;&emsp;How To{" "}
                  <span className={classes.blueText}>Join</span>
                </h1>
              </Col>
              <br />
              <br />
              <p>
                Check out the Our Work page and donate to aid the projects that
                we’re currently involved with. If you have any further <br></br>
                questions, visit our Contact Us page and shoot us an email.
              </p>
              <br />
              <br />
            </div>
          </div>
          <div className={classes.pictures}>
            <Row>
              <Col md={3}>
                {" "}
                <Image
                  className={classes.classroom1}
                  src={ClassroomPic1}
                ></Image>
              </Col>
              <Col>
                <Col style={{ marginLeft: "40px" }} md={5}>
                  <Image
                    src={ClassroomPic4}
                    className={classes.classroom4}
                  ></Image>
                </Col>
                <Col style={{ marginLeft: "40px", marginTop: "10px" }} md={5}>
                  <Image
                    src={ClassroomPic5}
                    className={classes.classroom5}
                  ></Image>
                </Col>
              </Col>
              <Col>
                <Col style={{ marginTop: "10px", marginRight: "150px" }}>
                  <Image
                    src={ClassroomPic6}
                    className={classes.classroom6}
                  ></Image>
                </Col>
                <Col style={{ marginTop: "10px" }}>
                  <Image
                    src={ClassroomPic7}
                    className={classes.classroom7}
                  ></Image>
                </Col>
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col>
                <Image
                  src={ClassroomPic2}
                  className={classes.classroom2}
                ></Image>
              </Col>
              <Col style={{ marginLeft: "10px" }}>
                <Image
                  src={ClassroomPic8}
                  className={classes.classroom8}
                ></Image>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col>
                <Image
                  src={ClassroomPic3}
                  className={classes.classroom3}
                ></Image>
              </Col>
              <Col style={{ marginRight: "190px" }}>
                <Image
                  src={ClassroomPic9}
                  className={classes.classroom9}
                ></Image>
              </Col>
            </Row>
          </div>
          <br />
          <br />
          <div className={classes.background}>
            <h1 className={classes.donateText}>
              Don’t wait to change the<br></br>world...the world needs the{" "}
              <br></br>change you can bring now
            </h1>
            <div className={classes.buttonDiv}>
              <button className={classes.donateButton}>Donate</button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <div>
            <Image fluid src={MainPic} className={classes.picture} />
            <h1 className={classes.pageName}>The Classroom</h1>
          </div>
          <div className={styles.mainContainer}>
            <div className={classes.card}>
              <h1 className={classes.title}>
                Everyone <span className={classes.blueText}>welcome!</span>
              </h1>
              <br />
              <p>
                The Classroom is our community of donors. Their contributions
                are put straight back into the project fund.
              </p>
              <p>
                The Classroom is our group of public donors that are opening up
                opportunities to the next generation of children. Their{" "}
                <br></br>donations are put into the necessities that we take for
                granted: the school, their school materials, and the meals. This{" "}
                <br></br>community can follow as blogs are posted on world
                updates and how the Hope Sustains Life projects are progressing.
              </p>
              <br />
              <br />
              <Col md={2}>
                <h1 className={classes.greenUnderline}>
                  &emsp;&emsp;The{" "}
                  <span className={classes.blueText}>Impact</span>
                </h1>
              </Col>
              <br />
              <br />
              <p>
                Education gives these young minds HOPE. Your contribution is an
                investment in the astounding number of refugee <br></br>children
                out of school. Imagine navigating the world without anything or
                anyone to believe in you. Education paves a <br></br>brighter
                path to becoming self-sufficient individuals that are capable of
                achieving incredible feats, just as long as <br></br>they’re
                given the tools to harness those strengths.
              </p>
              <br />
              <br />
              <Col md={2}>
                <h1 className={classes.greenUnderline}>
                  &emsp;&emsp;How To{" "}
                  <span className={classes.blueText}>Join</span>
                </h1>
              </Col>
              <br />
              <br />
              <p>
                Check out the Our Work page and donate to aid the projects that
                we’re currently involved with. If you have any further <br></br>
                questions, visit our Contact Us page and shoot us an email.
              </p>
              <br />
              <br />
            </div>
          </div>
          <div className={classes.pictures}>
            <Row>
              <Col md={3}>
                {" "}
                <Image
                  className={classes.classroom1}
                  src={ClassroomPic1}
                ></Image>
              </Col>
              <Col>
                <Col style={{ marginLeft: "40px" }} md={5}>
                  <Image
                    src={ClassroomPic4}
                    className={classes.classroom4}
                  ></Image>
                </Col>
                <Col style={{ marginLeft: "40px", marginTop: "10px" }} md={5}>
                  <Image
                    src={ClassroomPic5}
                    className={classes.classroom5}
                  ></Image>
                </Col>
              </Col>
              <Col>
                <Col style={{ marginTop: "10px", marginRight: "150px" }}>
                  <Image
                    src={ClassroomPic6}
                    className={classes.classroom6}
                  ></Image>
                </Col>
                <Col style={{ marginTop: "10px" }}>
                  <Image
                    src={ClassroomPic7}
                    className={classes.classroom7}
                  ></Image>
                </Col>
              </Col>
            </Row>
            <Row style={{ marginTop: "10px" }}>
              <Col>
                <Image
                  src={ClassroomPic2}
                  className={classes.classroom2}
                ></Image>
              </Col>
              <Col style={{ marginLeft: "10px" }}>
                <Image
                  src={ClassroomPic8}
                  className={classes.classroom8}
                ></Image>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col>
                <Image
                  src={ClassroomPic3}
                  className={classes.classroom3}
                ></Image>
              </Col>
              <Col style={{ marginRight: "190px" }}>
                <Image
                  src={ClassroomPic9}
                  className={classes.classroom9}
                ></Image>
              </Col>
            </Row>
          </div>
          <br />
          <br />
          <div className={classes.background}>
            <h1 className={classes.donateText}>
              Don’t wait to change the<br></br>world...the world needs the{" "}
              <br></br>change you can bring now
            </h1>
            <div className={classes.buttonDiv}>
              <button className={classes.donateButton}>Donate</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JoinClassroomPage;
