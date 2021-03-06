import useInterval from 'components/UseInterval';
import React, { useState } from 'react';
// import useInterval from 'components/UseInterval';
import "styles/components/controls/Stopwatch.scss";

const Stopwatch = () => {

  const [time, setTime] = useState(0);
  const [isActive, setActive] = useState(false);

  useInterval(() => {
    setTime(time + 1);
  }, isActive ? 1000 : null);

  const start = () => {
    setActive(true);
  }

  const stop = () => {
    setActive(false);
  }

  const reset = () => {
    setActive(false);
    setTime(0);
  }
  

  return (
    <section className="stopwatch-container">
      <article className="stopwatch-header">
        스톱워치
      </article>
      <article className="stopwatch-body">
        <section>
          <article>
            {time}
          </article>
          <article>
            <button onClick={start}>시작</button>
            <button onClick={stop}>정지</button>
            <button onClick={reset}>리셋</button>
          </article>
        </section>
      </article>
      <article className="stopwatch-footer">
      </article>
    </section>
  );
};

export default Stopwatch;