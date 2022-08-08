import React from 'react';
import { useState } from 'react';
import "styles/pages/Workout.scss";
// import Controls from 'components/controls/Controls';
import Stopwatch from "components/controls/Stopwatch.js";
import Counter from "components/controls/Counter.js";

const Workout = () => {

  const [space, setSpace] = useState([]);
  const controls = [ Stopwatch, Counter ];

  const addControl = (name) => {

    let component = null;
    if (name === 'Stopwatch') {
      component = <Stopwatch name='Stopwatch' />;
    } else if (name === 'Counter') {
      component = <Counter name='Counter' />;
    }
    
    setSpace([ ...space, component ]);
  }

  // const addTimer = () => {
  //   console.log("addTimer");
  // }
  // const addCounter = () => {
  //   setSpace([ ...space, <Counter />]);
  // }
  const removeControl = (index) => {
    space.splice(index, 1);
    setSpace([ ...space ]);
  }
  
  return (
    <div className="workout-container">
      <section className="workout-controls">
        {controls.map((control, index) => {
          return (
            <article key={index} className="workout-control">
              <button onClick={() => addControl(control.name)}>{control.name}</button>
            </article>
          )
        })}
      </section>
      <section className="workout-workspace">
        {space.map((control, index) => {
          return (
            <div className="workout-workspace-control" key={index}>
              <div className="control-header">
                #{index} {control.props.name}
                <button onClick={() => removeControl(index)}>x</button>
              </div>
              <div className="control-body">
                {control}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Workout;
