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
          style={mobileView ? { height: "100%", width: "300%" } : {}}
          src={OurWorkImage}
          alt="Card image"
        />
        <Card.ImgOverlay className={classes.homeOverlay}>
          <Card.Title className={mobileView ? {} : classes.cardTitle}>
            Our Work
          </Card.Title>
          <Card.Text className={mobileView ? {} : classes.cardSubtitle}>
            Educating the future, one student at a time
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <h1 className={classes.processTitle}>At a glance</h1>
      <div className={classes.processContainer}>
        <OurWorkCard image={MagnifyingGlass} text={text1} />
        <Image src={RightArrow} />
        <OurWorkCard image={TwoPeople} text={text2} />
        <Image src={RightArrow} />
        <OurWorkCard image={House} text={text3} />
        <Image src={RightArrow} />
        <OurWorkCard image={Handshake} text={text4} />
      </div>

      <OurLocationCard
        image={TanzaniaImage}
        title="Nyarugusu refugee camp"
        location="Kigoma, Tanzania"
        navlink={urls.pages.tanzania}
      />
      <OurLocationCard
        image={BangladeshImage}
        title="Kutupalong refugee camp"
        location="Coxx Bazaar, Bangladash"
        navlink={urls.pages.bangledesh}
      />
      <OurLocationCard
        image={HaitiImage}
        title="Dubedou"
        location="Haiti"
        navlink={urls.pages.haiti}
      />
    </>
  );
};
export default OurWorkPage;
