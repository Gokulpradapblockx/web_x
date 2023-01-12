import React from "react";
import Chooseus from "../components/Chooseus";
const Why = () => {
  return (
    <div className="About">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <div className="why">
            <h1>
              <span>Why</span> <br />
              Choose us
            </h1>
          </div>
        </div>
        <div className="opacity container-fluid col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <h1>Choose</h1>
        </div>
      </div>
      <Chooseus/>
    </div>    
  );
};

export default Why;
