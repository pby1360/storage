import useInterval from 'components/UseInterval';
import React, { useState } from 'react';
import "styles/components/controls/Stopwatch.scss";

const Stopwatch = () => {

  const [time, setTime] = useState(0);
  const [isActive, setActive] = useState(false);
  const [name, setName] = useState('N/A');
  const [isEdit, setEdit] = useState(false);
  

  useInterval(() => {
    setTime(time + 1);
  }, isActive ? 1000 : null);

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      saveName();
    }
  }

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

  const editName = () => {
    setEdit(true);
  }

  const saveName = () => {
    setEdit(false);
  }

  const changeName = (e) => {
    setName(e.target.value);
  }

  const getTime = () => {
    return new Date(time * 1000).toISOString().substring(11, 19);
  }
  

  return (
    <section className="stopwatch-container">
      <article className="stopwatch-header">
        {isEdit ? <input id="name" value={name} onKeyUp={onKeyUp} onChange={changeName}></input> : <span>{name}</span>}
        {isEdit ? <button onClick={() => saveName()}>저장</button> : <button onClick={() => editName()}>편집</button>}
      </article>
      <article className="stopwatch-body">
        <section>
          <article className='stopwatch-body-time'>
            {getTime()}
          </article>
          <article className='control-button-wrapper'>
            <button className='small' onClick={start}>시작</button>
            <button className='small' onClick={stop}>정지</button>
            <button className='small' onClick={reset}>리셋</button>
          </article>
        </section>
      </article>
      <article className="stopwatch-footer">
      </article>
    </section>
  );
};

export default Stopwatch;