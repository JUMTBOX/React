import React, { useState } from "react";

export default function Ex3() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1
        onClick={() => {
          setNum(num + 1);
        }}
      >
        {num < 10 ? "👍" : "😎"}
      </h1>
      <div>{num}</div>
    </div>
  );
}
