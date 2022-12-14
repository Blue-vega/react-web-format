import React from "react";
import { NavLink } from "react-router-dom";
import opps from "./image/opps.png";
import Error from "./Error.module.css";
const error = () => {
  return (
    <>
        <div className={Error.notFound404}>
          <img className={Error.errorimg} src={opps} alt="errorImage" />
        </div>
      <div className={Error.notFound}>
        <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
        <p>
          THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
          CHANGED OR IT'S TEMPORARILY UNAVILABLE{" "}
        </p>
        <button className={Error.homebtn}>
          <NavLink to="/"><span>Back to Home Page</span> </NavLink>
        </button>
      </div>
    </>
  );
};

export default error;
