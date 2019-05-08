import React from "react";
import SnowStorm from "react-snowstorm";

const SeasonDisplay = props => {
  return (
    <div>
      <SnowStorm
        flakesMaxActive={400}
        animationInterval={50}
        vMaxY={10}
        vMaxX={10}
      />
    </div>
  );
};

export default SeasonDisplay;
