import React from "react";

import Message from "../Message/Message";
import Icon from "../Icon/Icon";
import "./ErrorScreen.css";

function ErrorScreen(props) {
  return (
    <div className="ErrorScreen">
      <div className="ErrorScreen-box">
        <Icon iconClasses="fas fa-frown" secondary />
        <Message message="Oh bummer, there was a network error while trying to process your request." />
      </div>
    </div>
  );
}

export default ErrorScreen;
