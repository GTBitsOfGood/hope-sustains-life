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
import OurStoryHeader from "../../../public/static/our-story-header.png";

const OurStoryPage = () => (
  <>
    <div className={classes.header}>
      <h1 className={classes.headerTitle}>Our Mission</h1>
      <br /><br />
      <p className={classes.headerText}>
        &quot;Hope Sustains Life is a nonprofit that looks at utilzing
        technology and innovation to provide education to every refugee in the
        world.&quot;
      </p>
    </div>
    <div className={classes.ourStory}>
      <Row>
        <Col md={4} className={classes.centerContent}>
          <h1 className={classes.blueLineStory}>
            Our <span className={classes.blueText}>Story</span>
          </h1>
        </Col>
        <Col md={8} className={classes.centerContent}>
          <p className={classes.bodyText}>
            He who opens a school door, closes a prison.
            <br /> <br />
            These wise words from Victor Hugo resonated deeply within me and my
            father. My parents are immigrants from Haiti, and came to the US in
            the 1960s with the hope of making a better life for themselves.
            While we lived a comfortable life, we often thought back to our
            village. So many children in Gonaive could only dream of receiving a
            proper education, unable to receive the help they need to break out
            from the lifestyle they’re trapped in. As both a parent and a
            teacher, my father could not let that go on any longer.
            <br /> <br />
            We were inspired to act and founded Hope Sustains Life in 2011. The
            mantra stands for more than our organization name, it our core
            belief. We have but only one goal: giving refugees and vulnerable
            communities the chance to become something greater. Refugees are
            often forced to stay in camps for, on average, fifteen to twenty
            years. Their children are robbed of their right to a proper
            education, and that is an injustice that cannot be ignored.
            <br /> <br />
            Hope Sustains Life began as a father-son duo’s dream, we hope it
            will help every refugee child achieve theirs.
          </p>
        </Col>
      </Row>
    </div>

    <div className={classes.issueTackling}>
      <Row>
        <Col className={classes.centerContent}>
          <p className={classes.bodyText}>
            Education is not a privilege; it is a right and yet over three
            million children are unable to attend school, many of them being
            refugees. Refugees have had to abandon their homes to find a place
            where they can begin anew. However, when building a new life from
            the ground up, their children often do not get to experience school
            life.
            <br /> <br />
            Hope Sustains Life helps these children find a way to improve their
            lives and learn how to be independent. Every child out of school is
            one less leader, one less inventor, one less entrepreneur. One
            school at a time, we can help every child reach their full
            potential.
            <br /> <br />
            The world’s changing too fast for these people to keep up. We level
            the playing field by envisioning innovative solutions and leveraging
            the latest technology to bring it to life. It’s a large task, one
            that we cannot even think of doing on our own. Each donor helps one
            child become one step closer to becoming a person who can walk on
            their own two feet.
          </p>
        </Col>
        <Col md={4} className={classes.centerContent}>
          <h1 className={classes.blueLineIssue}>
            The Issue{" "}
            <span className={classes.blueText}>We&apos;re Tackling</span>
          </h1>
        </Col>
      </Row>
    </div>

    <div className={classes.ourTeam}>
      <h1>
            Our{" "}
        <span className={classes.blueText}>Team</span>
      </h1>

      <p className={classes.ourTeamText}>
        All great things begin small and Hope Sustains Life is no different. For years, it has just been my father and I working together as a two-man team to slowly 
        start building up Haiti. There was no lack of NGOs helping the country, but it felt like not much was being done. With just the two of us, we began with 
        small, but sustainable projects to help the community in meaningful ways. With a new marketing team joining us and plans to start an internship program, 
        Hope Sustains Life is growing bigger and bigger. Bit by bit, we hope to expand our reach and help the international refugee population.
      </p>

      <Row>
        <Col className={classes.centerContent}>
          {/* <div className={classes.Bernard}></div> */}
          <Image src={BernardImage} className="pictures" fluid />
        </Col>
        <Col md={4} className={classes.centerContent}>
          <h1>Bernard Michel</h1>
          <h2 className={classes.blueText2}>Co-Founder / CEO</h2>
          <p className={classes.ourTeamText}>
            Bernard has been working as a clinical researcher in the US for 8 years. He also volunteers
            at Catholic Charities of Atlanta. It was a perfect opportunity for him to help refugees, like his parents,
            settle into the U.S. and begin their new lives. Bernard followed his father's footsteps by earning his own black belt 
            in Judo. The inspiration doesn't stop there. When his father, Theodore, would return from his trips to Haiti, Bernard would get
            the chance to fiddle with his photographs and nurture his passion in photo and video editing. Through the camera lenses, Bernard could 
            see the love his father had for Haiti and how its people suffered.          
          </p>
        </Col>
      </Row>


      <Row>
        <Col className={classes.centerContent}>
          <Image src={TheodoreImage} className="pictures" fluid />
        </Col>
        <Col md={4} className={classes.centerContent}>
          <h1>Theodore Michel</h1>
          <h2 className={classes.blueText2}>Founder</h2>
          <p className={classes.ourTeamText}>
            Theodore is an immigrant from Haiti who was forced to leave home and come to the
            US in the 1960's to flee from a dictatorship. He became a teacher, winning the Teacher
            of the Year award in New York City in 1993. In his spare time, he likes to practice
            Kyokushin and Shotokan, which are two forms of martial arts, eventually earning a black
            belt in both. Theodore has dedicated his life to ensuring that those he left behind in Haiti get
            a fair chance at a life filled with love and hope, just as his family got.
          </p>
        </Col>
      </Row>


    
    </div>
    <div className={classes.donate}>
    
    </div>
  </>
);

export default OurStoryPage;
