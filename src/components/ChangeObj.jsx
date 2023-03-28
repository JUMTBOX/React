import React, { useState } from "react";

export default function ChangeObj({ objArr }) {
  const [num, setNum] = useState(0);
  return (
    <div>
      <div>
        <h1>이름: {objArr[num].name}</h1>
        <h2>나이: {objArr[num].age}</h2>
        <h2>별명: {objArr[num].nickname}</h2>
      </div>
      <button
        onClick={() => {
          if (num < objArr.length - 1) {
            setNum((curr) => curr + 1);
          } else {
            setNum(0);
          }
        }}
      >
        프로필 변경하기
      </button>
    </div>
  );
}
