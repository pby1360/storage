import React, { useState } from 'react';
import "styles/components/controls/Timer.scss";

const Timer = () => {

  const [time, setTime] = useState(0);

  const startTimer = () => {
    console.log('startTimer');
    let timer = setInterval(() => {
      console.log('setTime');
      setTime(time + 1);
    }, 1000);
  };

  return (
    <section className="timer-container" draggable={true}>
      <article className="timer-header">
        타이머
      </article>
      <article className="timer-body">
        <section>
          <article>
            {time}
          </article>
          <article>
            <button onClick={startTimer}>시작</button>
            <button>리셋</button>
            <button>정지</button>
          </article>
        </section>
      </article>
      <article className="timer-footer">
        푸터
      </article>
    </section>
  );
};

export default Timer;