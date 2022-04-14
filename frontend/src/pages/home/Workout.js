import React from 'react';
import "styles/pages/Workout.scss";
import Stopwatch from "components/controls/Stopwatch.js";

const Workout = () => {
  
  return (
    <div className="workout-container">
      <Stopwatch />
      <Stopwatch />
    </div>
  );
};

export default Workout;
