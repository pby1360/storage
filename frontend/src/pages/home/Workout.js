import React from 'react';
import { useState } from 'react';
import 'styles/pages/Workout.scss';
// import Controls from 'components/controls/Controls';
import Stopwatch from 'components/controls/Stopwatch.js';
import Counter from 'components/controls/Counter.js';
import SetCounter from 'components/controls/SetCounter.js';
import Timer from 'components/controls/Timer.js';

const Workout = () => {

  const [space, setSpace] = useState([]);
  const controls = [ Stopwatch, Timer, Counter, SetCounter ];

  const addControl = (name) => {

    let component = null;
    if (name === 'Stopwatch') {
      component = <Stopwatch name='Stopwatch' />;
    } else if (name === 'Timer') {
      component = <Timer name='Timer' />;
    } else if (name === 'Counter') {
      component = <Counter name='Counter' />;
    } else if (name === 'SetCounter') {
      component = <SetCounter name='Set Counter' />;
    }
    setSpace([ ...space, component ]);
  }

  const removeControl = (index) => {
    space.splice(index, 1);
    setSpace([ ...space ]);
  }

  const clearControl = () => {
    if (window.confirm('작업을 초기화 하시겠습니까?')) {
      setSpace([]);
    }
  }
  
  return (
    <div className='workout-container'>
      <section className='workout-pannel'>
        <section className='workout-controls'>
          {controls.map((control, index) => {
            return (
              <article key={index} className='workout-control'>
                <button onClick={() => addControl(control.name)}>{control.name}</button>
              </article>
            )
          })}
        </section>
        <section className='workout-buttons'>
          <button onClick={() => clearControl()}>Clear</button>
          {/* <button>Save</button> */}
        </section>
      </section>
      <section className='workout-workspace'>
        {space.map((control, index) => {
          return (
            <div className='workout-workspace-control' key={index}>
              <div className='control-header'>
                #{index} {control.props.name}
                <button onClick={() => removeControl(index)}>x</button>
              </div>
              <div className='control-body'>
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
