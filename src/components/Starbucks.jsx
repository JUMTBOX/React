import { useState, useRef } from 'react';

export default function Starbucks() {
  const [render, setRender] = useState(true);
  const answerInput = useRef();

  const numOne = Math.floor(Math.random() * 10);
  const numTwo = Math.floor(Math.random() * 10);
  const operatorArr = ['+', '-', 'x'];
  const index = Math.floor(Math.random() * operatorArr.length);
  const operator = operatorArr[index];

  const submitFunc = () => {
    function reset() {
      answerInput.current.focus();
      answerInput.current.value = '';
    }

    let answer;
    if (operator === '+') {
      answer = numOne + numTwo;
    } else if (operator === '-') {
      answer = numOne - numTwo;
    } else {
      answer = numOne * numTwo;
    }

    if (Number(answerInput.current.value) === answer) {
      alert('정답입니다!');
      setRender(!render);
      reset();
    } else {
      alert('틀렸습니다! 다시 입력해 주세요!');
      reset();
    }
  };
  return (
    <div>
      <h1>
        {numOne} {operator} {numTwo}
      </h1>
      <input type="text" ref={answerInput} />
      <button onClick={submitFunc}>제출</button>
    </div>
  );
}
