import React from 'react';
import "styles/pages/Workout.scss";
import Timer from "components/controls/Timer.js";

const Workout = () => {
  
  return (
    <div className="workout-container">
      <Timer />
    </div>
  );
};

export default Workout;