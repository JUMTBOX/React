import { useRef } from 'react';

export default function ChangeFocus() {
  const input1 = useRef('test');
  const input2 = useRef();

  const changeFocusOne = () => {
    input1.current.focus();
  };
  const changeFocusTwo = () => {
    input2.current.focus();
  };
  return (
    <div>
      <input ref={input1} />
      <input ref={input2} />
      <br />
      <br />
      <button onClick={changeFocusOne}>1번 인풋으로 포커스</button>
      <button onClick={changeFocusTwo}>2번 인풋으로 포커스</button>
    </div>
  );
}
