import React, { useState } from 'react';
// import useInterval from 'components/UseInterval';
import "styles/components/controls/SetCounter.scss";

const SetCounter = () => {

  const [count, setCount] = useState(0);
  const [set, setSet] = useState(0);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState('N/A');
  const [isEdit, setEdit] = useState(false);

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      saveName();
    }
  }
  
  const plus = () => {
    setCount(count + 1);
  }

  const minus = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  }

  const reset = () => {
    setCount(0);
    setSet(0);
    setTotal(0);
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

  const addSet = (e) => {
    setTotal(total + count);
    setSet(set + 1);
    setCount(0);
  }

  return (
    <section className="counter-container">
      <article className="counter-header">
        {isEdit ? <input id="name" value={name} onKeyUp={onKeyUp} onChange={changeName}></input> : <span>{name}</span>}
        {isEdit ? <button onClick={() => saveName()}>저장</button> : <button onClick={() => editName()}>편집</button>}
      </article>
      <article className="counter-body">
        <section>
          <article className='counter-body-count'>
            <section className='counter-body-column'>
              <span>Count</span>
              <span>Set</span>
              <span>Total</span>
            </section>
            <section className='counter-body-number'>
              <span>{count}</span>
              <span>{set}</span>
              <span>{total}</span>
            </section>
          </article>
          <article className='control-button-wrapper'>
            <button className='small' onClick={plus}>+</button>
            <button className='small' onClick={minus}>-</button>
            <button className='small' onClick={addSet}>Set</button>
            <button className='small' onClick={reset}>리셋</button>
          </article>
        </section>
      </article>
      <article className="counter-footer">
      </article>
    </section>
  );
};

export default SetCounter;