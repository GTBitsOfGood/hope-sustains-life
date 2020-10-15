import React from "react";
import classes from "./OurStoryPage.module.css";
import { Button, Row, Col, Image } from "react-bootstrap";

import TanzaniaImage from "../../../public/static/tanzania.jpg";
import BangledeshImage from "../../../public/static/bangledesh.jpg";
import HaitiImage from "../../../public/static/haiti.jpg";

import TheodoreImage from "../../../public/static/Theodore_headshot.jpg";
import BernardImage from "../../../public/static/Bernard_headshot.jpg";
import IssueTacklingImage from "../../../public/static/martin-bekerman.jpg";
import DonatePicture from "../../../public/static/seth-doyle-78210-unsplash.jpg";

const OurStoryPage = () => (
    <>
    <div className={classes.general}>
      <h1 className={classes.centerText}>Our Mission</h1>
      <p className={classes.centered}>
        "Hope Sustains Life is a nonprofit that looks at utilzing technology and
        innovation to provide education to every refugee in the world".
      </p>
    </div>

    <div className={classes.ourStory}>
      <Row>
        <Col md={4} className = {classes.ourStoryHeader}>
          <p>Our <span className = {classes.blueHeaderText}>Story</span></p>
        </Col>
        <Col md={8}>
          <p className={classes.ourStoryBody}>
            He who opens a school door, closes a prison. 
            These wise words from Victor Hugo resonated deeply within me and my father. 
            My parents are immigrants from Haiti, and came to the US in the 1960s with the hope of making a better life for themselves. 
            While we lived a comfortable life, we often thought back to our village. 
            So many children in Gonaive could only dream of receiving a proper education, unable to receive the help they need to break out from the lifestyle they’re trapped in. 
            As both a parent and a teacher, my father could not let that go on any longer. We were inspired to act and founded Hope Sustains Life in 2011. 
            The mantra stands for more than our organization name, it encompasses our core belief. 
            We have but only one goal: giving refugees and other vulnerable communities the chance to become something greater. 
            Refugees are often forced to stay in camps for, on average, fifteen to twenty years. 
            Their children are robbed of their right to a proper education, and that is an injustice that cannot be ignored. 
            Hope Sustains Life began as a father-son duo’s dream, we hope it will help every refugee child achieve theirs.
          </p>
        </Col>
      </Row>
    </div>

    <div className={classes.issueTackling}>
      <Row>
        <Col>
          <p> 
            Education is not a privilege; it is a right and yet over three million children are unable to attend school, 
            many of them being refugees. Refugees have had to abandon their homes to find a place where they can 
            begin anew. However, when building a new life from the ground up, their children often do not get to 
            experience school life.
            
            Hope Sustains Life helps these children find a way to improve their lives and learn how to be independent. 
            Every child out of school is one less leader, one less inventor, one less entrepreneur. One school at a time, 
            we can help every child reach their full potential.
            
            The world’s changing too fast for these people to keep up. We level the playing field by envisioning 
            innovative solutions and leveraging the latest technology to bring it to life. It’s a large task, one that we 
            cannot even think of doing on our own. Each donor helps one child become one step closer to becoming a 
            person who can walk on their own two feet.</p>
        </Col>
        <Col>
          <p>The Issue We're Tackling</p>
        </Col>
      </Row>
    </div>

    {/* <div className={classes.ourTeam}>
      <p className={classes.ourTeamText}>
        All great things begin small and Hope Sustains Life is no different. For years, it has just been my father and I working together as a two-man team to slowly 
        start building up Haiti. There was no lack of NGOs helping the country, but it felt like not much was being done. With just the two of us, we began with 
        small, but sustainable projects to help the community in meaningful ways. With a new marketing team joining us and plans to start an internship program, 
        Hope Sustains Life is growing bigger and bigger. Bit by bit, we hope to expand our reach and help the international refugee population.
      </p>
    
    </div>
    <div className={classes.donate}>
    
    </div> */}



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
  </>
);

export default OurStoryPage;
