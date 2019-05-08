import React from "react";
import SnowStorm from "react-snowstorm";

const SeasonDisplay = props => {
  return (
    <div>
      <SnowStorm
        flakesMax={1000}
        flakesMaxActive={400}
        animationInterval={50}
        vMaxY={10}
        vMaxX={10}
      />
      <div className="seasons-bg">Latitude: {props.lat}</div>
    </div>
  );
};

export default SeasonDisplay;
