import React from "react";
import { CustomWidget } from "../components/common/CustomWidget";
import Homepage from "./Home";
import ForkMeOnGithub from "fork-me-on-github";

const Index = () => (
  <>
    <>
      <CustomWidget />
      <Homepage key="1" />
      <ForkMeOnGithub
        repo="https://github.com/Archish27/nora-covid-19-bot"
        colorBackground="#135afe"
        colorOctocat="white"
      />
    </>
  </>
);

export default Index;
