import React, { useState, useEffect } from "react";
// import { useStore } from 'react-redux'
import { Grid, Row, Col } from "react-flexbox-grid";

import Footer from "../../components/Footer";
import Section from "../../components/common/Section";
import HeaderH1 from "../../components/common/HeaderH1";
import HeaderH2 from "../../components/common/HeaderH2";
import Paragraph from "../../components/common/Paragraph";
import styles from "./Home.module.scss";
import Phone from "../../components/common/phone";
import Screen2 from "../../assets/img/phonescreens/screen_2.png";

// import purpleImages from '../../assets/img/misc/pruple_dots.svg'
/**
 * @author zilahir,martincserep
 * @function Homepage
 * */

const Homepage = () => {
  // const store = useStore()
  // const { test } = store.getState()
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
  }, [isPageLoaded]);

  return (
    <>
      <Grid fluid className={styles.fluid}>
        <Row>
          <Col lg={12} xs={12}>
            <div className={styles.sectionContainer}>
              <Section xsOffset={0}>
                <HeaderH1 key="header-bottom" text="Nora" />
                <HeaderH2 key="p" text="COVID-19 Bot" />
                <Paragraph
                  key="p"
                  text="Corona Virus Self Awarness Bot that addresses typical questions about the COVID-19 virus to help you to know about corona virus. It provides awarness about Covid-19 social distancing, self isolation, quarantine."
                />
                <Phone key="image-bottom">
                  <div
                    style={{
                      backgroundImage: `url(${Screen2})`,
                      width: "100%",
                      height: "100%",
                      backgroundSize: "cover",
                      backgroundPosition: "50% 50%",
                    }}
                  />
                </Phone>
              </Section>
            </div>
          </Col>
        </Row>
        <Footer />
      </Grid>
      
    </>
  );
};

export default Homepage;
