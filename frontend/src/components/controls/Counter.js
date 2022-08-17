import React, { useState } from 'react';
// import useInterval from 'components/UseInterval';
import "styles/components/controls/Counter.scss";

const Counter = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('N/A');
  const [isEdit, setEdit] = useState(false);

  const plus = () => {
    setCount(count + 1);
  }

  const minus = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
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

  return (
    <section className="counter-container">
      <article className="counter-header">
        {isEdit ? <input id="name" value={name} onChange={changeName}></input> : <span>{name}</span>}
        {isEdit ? <button onClick={() => saveName()}>저장</button> : <button onClick={() => editName()}>편집</button>}
      </article>
      <article className="counter-body">
        <section>
          <article>
            {count}
          </article>
          <article className='control-button-wrapper'>
            <button className='small' onClick={plus}>+</button>
            <button className='small' onClick={minus}>-</button>
            <button className='small' onClick={reset}>리셋</button>
          </article>
        </section>
      </article>
      <article className="counter-footer">
      </article>
    </section>
  );
};

export default Counter;