import { useState, useRef } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요');
  const inputValue = useRef('반갑습니다.');

  const onChangeText = (e) => {
    const inpurText = e.target.value;
    setText(`${inpurText}`);
  };

  const onChangeRef = () => {
    setText(inputValue.current.value);
  };

  return (
    <div>
      <h1>{text}</h1>
      <label htmlFor="input1">State</label>
      <input
        onChange={(e) => {
          onChangeText(e);
        }}
        name="input1"
      ></input>
      <br />
      <label htmlFor="input2">Ref</label>
      <input ref={inputValue} onChange={onChangeRef} name="input2"></input>
    </div>
  );
}
