import React, { useRef, useState } from 'react';

export default function Comparing() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);
  let countVar = 0;

  const [render, setRender] = useState(true);

  const countUpState = () => {
    setCountState(countState + 1);
    console.log(`State`, countState);
  };

  const countUpRef = () => {
    countRef.current += 1;
    console.log(`Ref: ${countRef.current}`);
  };

  const countUpVar = () => {
    countVar += 1;
    console.log('Variable:', countVar);
  };

  const reRender = () => {
    setRender(!render);
  };
  return (
    <React.Fragment>
      <h1>State: {countState}</h1>
      <h1>Ref: {countRef.current}</h1>
      <h1>Var: {countVar}</h1>
      <button onClick={countUpState}>state up</button>
      <button onClick={countUpRef}>ref up</button>
      <button onClick={countUpVar}>var up</button>
      <button onClick={reRender}>re render</button>
    </React.Fragment>
  );
}
