import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    icon: "sun"
  },
  winter: {
    text: "Burr, it is cold!",
    icon: "snowflake"
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}


const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <h1>
        <i className={`icon-left ${icon} icon`} />
        {text}
        <i className={`icon-right ${icon} icon`} />
      </h1>
    </div>
  );
};

export default SeasonDisplay;
