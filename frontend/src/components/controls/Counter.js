import React, { useState } from 'react';
// import useInterval from 'components/UseInterval';
import "styles/components/controls/Counter.scss";

const Counter = () => {

  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  }

  const minus = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }
  

  return (
    <section className="counter-container">
      <article className="counter-header">
        카운터
      </article>
      <article className="counter-body">
        <section>
          <article>
            {count}
          </article>
          <article>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={reset}>리셋</button>
          </article>
        </section>
      </article>
      <article className="counter-footer">
      </article>
    </section>
  );
};

export default Counter;