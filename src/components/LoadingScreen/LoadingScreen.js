import React from "react";

import Spinner from "../Spinner/Spinner";
import "./LoadingScreen.css";

function LoadingScreen(props) {
  return (
    <div className="LoadingScreen">
      <Spinner />
    </div>
  );
}

export default LoadingScreen;
