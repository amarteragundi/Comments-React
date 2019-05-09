import React from "react";
import SnowStorm from "react-snowstorm";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());

  return (
    <div>
      {(season == "winter") ?
        (<SnowStorm
          flakesMaxActive={400}
          animationInterval={50}
          vMaxY={10}
          vMaxX={10}
        />) : ""
      }
      <div
        className={season == "winter" ? "seasons-winter" : "seasons-summer"}
      />
    </div>
  );
};

export default SeasonDisplay;
