import React from "react";

import mobilePatternDivider from "../assets/images/pattern-divider-mobile.svg";
import desktopPatternDivider from "../assets/images/pattern-divider-desktop.svg";

function Advice({ advice }) {
  return (
    <>
      <h1 className={`advice-header`}>ADVICE #{advice && advice.slip.id}</h1>
      <p className={`advice-body`}>“{advice && advice.slip.advice}”</p>
      <div className="pattern-divider">
        <img
          id="mobile-pattern-divider"
          src={mobilePatternDivider}
          alt="pattern-divider"
        />
        <img
          id="desktop-pattern-divider"
          src={desktopPatternDivider}
          alt="pattern-divider"
        />
      </div>
    </>
  );
}

export default Advice;
