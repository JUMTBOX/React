import React, { useState } from "react";

export default function Staet2() {
  const [strState, setStrState] = useState("init");

  return (
    <div>
      <button onClick={() => setStrState(strState + "+")}>변경</button>
      <br />
      <span>{strState}</span>
    </div>
  );
}
