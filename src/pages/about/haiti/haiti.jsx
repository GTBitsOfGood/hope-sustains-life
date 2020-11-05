import React, { useState, useEffect } from 'react';
import classes from "./haiti.module.css";
import { Image, Button } from "react-bootstrap";
import HaitiImage from "../../../../public/static/HaitiImage.png"

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import { displayMobileView }  from "../../../../utils/screen"


function Haiti () {
    const [isMobile, setIsMobile] = useState(displayMobileView);
  
    useEffect(
        () => {
        setIsMobile(displayMobileView)
    });

    const displayView = (isMobile) => {
        if (isMobile) {
        return (<>
            {isMobile && <MobileView/>}

        <div className={classes.general}>
            <h1 className={classes.centerText}>Haiti</h1>
        </div>

        <div className={classes.space}></div>

        <div className={classes.grid}>
            <Image src={HaitiImage} className={classes.gridImage} />
            <div>
                <h1 className={classes.dubedou}>Dubedou</h1>
                <h1 className={classes.haiti}>Haiti</h1>
                <p className={classes.gridText}>This is where it all began! Back in 2011 was where the father and son<br></br> duo started helping and where the co-founder, Theordore, would<br></br> 
                    spend his summers as a child. The project initially started small with<br></br> providing 
                    food and building an artesian well for the locals but then<br></br> we saw how so many 
                    children were missing out on an education in<br></br> a country where only 20% of eligible 
                    children for secondary school<br></br> are enrolled. Our goal now is to partner with local nonprofits and<br></br> the 
                    government to initiate the process of building a school for the<br></br> village of Dubedou. When building the school, the impact is not<br></br> only the children who will receive a formal education but the<br></br> community and the jobs that will be provided during this process.<br></br> Students from local universities will also have access to good<br></br>paying jobs as they come on as teachers.</p>
            </div>
        </div>

        <div className={classes.space}></div>
        <div className={classes.space}></div>

        <div className={classes.background}>
            <h1 className={classes.donateText}>Don’t wait to change the<br></br>world...the world needs the <br></br>change you can bring now</h1>
            <div className={classes.buttonDiv}>
                <button className={classes.donateButton}>Donate</button>
            </div>
        </div>
    </>
        )
        } else {
            return (<>
                {!isMobile && <BrowserView/>}

                <div className={classes.general}>
            <h1 className={classes.centerText}>Haiti</h1>
        </div>

        <div className={classes.space}></div>

        <div className={classes.grid}>
            <Image src={HaitiImage} className={classes.gridImage} />
            <div>
                <h1 className={classes.dubedou}>Dubedou</h1>
                <h1 className={classes.haiti}>Haiti</h1>
                <p className={classes.gridText}>This is where it all began! Back in 2011 was where the father and son<br></br> duo started helping and where the co-founder, Theordore, would<br></br> 
                    spend his summers as a child. The project initially started small with<br></br> providing 
                    food and building an artesian well for the locals but then<br></br> we saw how so many 
                    children were missing out on an education in<br></br> a country where only 20% of eligible 
                    children for secondary school<br></br> are enrolled. Our goal now is to partner with local nonprofits and<br></br> the 
                    government to initiate the process of building a school for the<br></br> village of Dubedou. When building the school, the impact is not<br></br> only the children who will receive a formal education but the<br></br> community and the jobs that will be provided during this process.<br></br> Students from local universities will also have access to good<br></br>paying jobs as they come on as teachers.</p>
            </div>
        </div>

        <div className={classes.space}></div>
        <div className={classes.space}></div>

        <div className={classes.background}>
            <h1 className={classes.donateText}>Don’t wait to change the<br></br>world...the world needs the <br></br>change you can bring now</h1>
            <div className={classes.buttonDiv}>
                <button className={classes.donateButton}>Donate</button>
            </div>
        </div>
        </>
            )
        }
    }
                
    return (
        displayView(isMobile)
      );
    }

export default Haiti;
