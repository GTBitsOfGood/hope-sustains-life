import React from "react";
import classes from "./OurWorkPage.module.css";
import { Button, Row, Col, Image, Card } from "react-bootstrap";
import { displayMobileView } from "../../../utils/screen.js";
import {
  OurWorkImage,
  TanzaniaImage,
  BangladeshImage,
  HaitiImage,
} from "../../../public/static/OurWorkImages";
import {
  MagnifyingGlass,
  TwoPeople,
  House,
  Handshake,
  RightArrow,
  DownArrow,
} from "../../../public/static/OurWorkIcons";
import OurWorkCard from "../../components/OurWorkCard";
import { text1, text2, text3, text4 } from "./OurWorkText.jsx";
import OurLocationCard from "../../components/OurLocationCard";
import urls from "../../../utils/urls";

const OurWorkPage = () => {
  const isMobile = () => {
    const mobile = displayMobileView();
    return mobile;
  };

  const mobileView = isMobile();

  return (
    <>
      <Card
        style={
          mobileView
            ? {
                height: "80%",
                width: "100%",
                alignItems: "center",
                marginBottom: "10%",
              }
            : {}
        }
        className="bg-dark text-white"
      >
        <Card.Img
          style={mobileView ? { height: "100%", width: "200%" } : {}}
          src={OurWorkImage}
          alt="Card image"
        />
        <Card.ImgOverlay className={classes.homeOverlay}>
          <Card.Title
            className={mobileView ? classes.mobileCardTitle : classes.cardTitle}
          >
            Our Work
          </Card.Title>
          <Card.Text
            className={
              mobileView ? classes.mobileCardSubtitle : classes.cardSubtitle
            }
          >
            Educating the future, one student at a time
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <h1
        className={
          mobileView ? classes.mobileProcessTitle : classes.processTitle
        }
      >
        At a glance
      </h1>
      {!mobileView && (
        <div className={classes.processContainer}>
          <OurWorkCard image={MagnifyingGlass} text={text1} />
          <Image src={RightArrow} />
          <OurWorkCard image={TwoPeople} text={text2} />
          <Image src={RightArrow} />
          <OurWorkCard image={House} text={text3} />
          <Image src={RightArrow} />
          <OurWorkCard image={Handshake} text={text4} />
        </div>
      )}
      {mobileView && (
        <div className={classes.mobileProcessContainer}>
          <OurWorkCard
            image={MagnifyingGlass}
            text={text1}
            isMobile={mobileView}
          />
          <Image src={DownArrow} />
          <OurWorkCard image={TwoPeople} text={text2} isMobile={mobileView} />
          <Image src={DownArrow} />
          <OurWorkCard image={House} text={text3} isMobile={mobileView} />
          <Image src={DownArrow} />
          <OurWorkCard image={Handshake} text={text4} isMobile={mobileView} />
        </div>
      )}

      <OurLocationCard
        image={TanzaniaImage}
        title="Nyarugusu refugee camp"
        location="Kigoma, Tanzania"
        navlink={urls.pages.tanzania}
        isMobile={mobileView}
      />
      <OurLocationCard
        image={BangladeshImage}
        title="Kutupalong refugee camp"
        location="Coxx Bazaar, Bangladash"
        navlink={urls.pages.bangledesh}
        isMobile={mobileView}
      />
      <OurLocationCard
        image={HaitiImage}
        title="Dubedou"
        location="Haiti"
        navlink={urls.pages.haiti}
        isMobile={mobileView}
      />
    </>
  );
};
export default OurWorkPage;
