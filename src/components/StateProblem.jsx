import React, { useState } from "react";

export default function StateProblem() {
  const [state, setState] = useState({ teacher: "이효석" });
  return (
    <div>
      {state.teacher}
      <br />
      <button
        onClick={() => {
          state.teacher = "tetz";
          const newObj = { ...state };
          setState(newObj);
          console.log(state);
        }}
      >
        영어로 만들기
      </button>
    </div>
  );
}
