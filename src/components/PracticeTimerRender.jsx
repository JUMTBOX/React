import { useState } from 'react';
import PracticeTimer from './PracticeTimer';

export default function PracticeTimerRender() {
  const [show, setShow] = useState('보이기');
  return (
    <>
      {show === '숨기기' && <PracticeTimer />}
      <button
        onClick={() => {
          show === '보이기' ? setShow('숨기기') : setShow('보이기');
        }}
      >
        {show}
      </button>
    </>
  );
}
