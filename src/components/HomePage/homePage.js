import React, { Fragment } from "react";
import DespirtionFeature from "./DespirtionFeature";
import MortgageCalculator from "./MortgageCalculator";
import SectionOne from "./SectionOne";
import Education from"./Education";


function HomePage() {
  return (
    <Fragment>
      <SectionOne />
      <DespirtionFeature />
      <MortgageCalculator/>
      <Education/>
    </Fragment>
  );
}

export default HomePage;
