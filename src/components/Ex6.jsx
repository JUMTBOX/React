import React, { useRef } from 'react';

export default function Ex6() {
  const colorChangeInput = useRef();
  const ground = useRef();

  const colorChangeFunc = () => {
    ground.current.style.backgroundColor = `${colorChangeInput.current.value}`;
  };
  return (
    <div ref={ground}>
      <input type="text" ref={colorChangeInput} />
      <br />
      <button onClick={colorChangeFunc}>색 적용</button>
    </div>
  );
}
