import React from 'react';
import { useState } from 'react';
import "styles/pages/Workout.scss";
import Stopwatch from "components/controls/Stopwatch.js";
import Counter from "components/controls/Counter.js";

const Workout = () => {

  const [space, setSpace] = useState([]);

  const addStopwatch = () => {
    console.log("stopwatch");
    setSpace([ ...space, <Stopwatch />]);
  }
  const addTimer = () => {
    console.log("addTimer");
  }
  const addCounter = () => {
    setSpace([ ...space, <Counter />]);
  }
  const removeControl = (index) => {
    console.log("removeControl");
    console.log(space);
    space.splice(index, 1);
    setSpace([ ...space ]);
  }
  
  return (
    <div className="workout-container">
      <section className="workout-controls">
        <article className="workout-control">
          <button onClick={addStopwatch}>Stopwatch</button>
        </article>
        <article className="workout-control">
        <button onClick={addTimer}>Timer</button>
        </article>
        <article className="workout-control">
        <button onClick={addCounter}>Counter</button>
        </article>
      </section>
      <section className="workout-workspace">
        {space.map((control, index) => {
          return (
            <div className="workout-workspace-control" key={index}>
              <div className="control-header">
                #{index}
                <button onClick={() => removeControl(index)}>x</button>
              </div>
              <div className="control-body">
                {control}
              </div>
            </div>
          );
        })}
      </section>
      {/* <Stopwatch />
      <Stopwatch /> */}
    </div>
  );
};

export default Workout;
