import React from "react";
import { useSpring, animated } from "react-spring";

import "./NetworkError.css";

function NetworkError() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="NetworkError" style={props}>
      Network error
    </animated.div>
  );
}

export default NetworkError;
