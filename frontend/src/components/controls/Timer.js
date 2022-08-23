import useInterval from 'components/UseInterval';
import React, { useEffect, useState } from 'react';
import 'styles/components/controls/Timer.scss';


const Timer = () => {

  const [name, setName] = useState('N/A');
  const [isNameEdit, setNameEdit] = useState(false);
  const [isTimeEdit, setTimeEdit] = useState(true);
  
  const [isActive, setActive] = useState(false);

  const [timeInput, setTimeInput] = useState({ hour: 0, minute: 0, seconds: 0 });

  const [time, setTime] = useState(0);

  useInterval(() => {
    if (time === 0) {
      setActive(false);
      return;
    }
    setTime(time - 1);
  }, isActive ? 1000 : null);

  const setTimer = (isEdit) => {
    setTimeEdit(isEdit);

    if (!isEdit) {
      const seconds = timeInput.hour * 3600 + timeInput.minute * 60 + timeInput.seconds;
      setTime(seconds);
    } else {
      stop();
    }
  }

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      saveName();
    }
  }

  const editName = () => {
    setNameEdit(true);
  }

  const saveName = () => {
    setNameEdit(false);
  }

  const changeName = (e) => {
    setName(e.target.value);
  }

  const onTimeInputChange = (e) => {
    setTimeInput({
      ...timeInput,
      [e.target.name]: parseInt(e.target.value)
    })
  }
  const plusHour = () => {
    if (timeInput.hour === 99) {
      return;
    }
    setTimeInput({ ...timeInput, hour: timeInput.hour + 1 });
  }
  const minusHour = () => {
    if (timeInput.hour === 0) {
      return;
    }
    setTimeInput({ ...timeInput, hour: timeInput.hour - 1 });
  }
  const plusMinute = () => {
    if (timeInput.minute === 59) {
      setTimeInput({ ...timeInput, minute: 0 });
    } else {
      setTimeInput({ ...timeInput, minute: timeInput.minute + 1 });
    }
  }
  const minusMinute = () => {
    if (timeInput.minute === 0) {
      return;
    }
    setTimeInput({ ...timeInput, minute: timeInput.minute - 1 });
  }
  const plusSeconds = () => {
    if (timeInput.seconds === 59) {
      setTimeInput({ ...timeInput, seconds: 0 });
    } else {
      setTimeInput({ ...timeInput, seconds: timeInput.seconds + 1 });
    }
  }
  const minusSeconds = () => {
    if (timeInput.seconds === 0) {
      return;
    }
    setTimeInput({ ...timeInput, seconds: timeInput.seconds - 1 });
  }

  const start = () => {
    setActive(true);
  }

  const stop = () => {
    setActive(false);
  }

  const reset = () => {
    setActive(false);
    const seconds = timeInput.hour * 3600 + timeInput.minute * 60 + timeInput.seconds;
    setTime(seconds);
  }

  const getTime = () => {
    return new Date(time * 1000).toISOString().substring(11, 19);
  }

  return (
    <div className='timer-container'>
      <section className='timer-header'>
        {isNameEdit ? <input id="name" value={name} onKeyUp={onKeyUp} onChange={changeName}></input> : <span>{name}</span>}
        {isNameEdit ? <button onClick={() => saveName()}>저장</button> : <button onClick={() => editName()}>편집</button>}
      </section>
      { isTimeEdit ?
        <section className='timer-body'>
          <article className='time-input-box'>
            <div className='time-input'>
              <input name='hour' value={timeInput.hour} onChange={onTimeInputChange}></input>
              <div className='time-buttons'>
                <button onClick={plusHour} >+</button>
                <button onClick={minusHour} >-</button>
              </div>
            </div>
            <div className='time-input'>
              <input name='minute' value={timeInput.minute} onChange={onTimeInputChange}></input>
              <div className='time-buttons'>
                <button onClick={plusMinute} >+</button>
                <button onClick={minusMinute} >-</button>
              </div>
            </div>
            <div className='time-input'>
              <input name='seconds' value={timeInput.seconds} onChange={onTimeInputChange}></input>
              <div className='time-buttons'>
                <button onClick={plusSeconds} >+</button>
                <button onClick={minusSeconds} >-</button>
              </div>
            </div>
          </article>
          <article className='control-button-wrapper'>
            <button className='small' onClick={() => setTimer(false)}>저장</button>
          </article>
        </section>
        : 
        <section className='timer-body'>
          <article className='timer-time-box'>
            <span>{getTime()}</span>
            <button onClick={() => setTimer(true)}>수정</button>
          </article>
          <article className='control-button-wrapper'>
            <button className='small' onClick={() => start()}>시작</button>
            <button className='small' onClick={() => stop()}>정지</button>
            <button className='small' onClick={() => reset()}>리셋</button>
          </article>
        </section>
      }
      <section className='timer-footer'></section>
    </div>
  );
};

export default Timer;