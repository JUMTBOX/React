import React from "react";

export default function CustomObject({ data }) {
  if (data) {
    const { name, age, nickname } = data;
    return (
      <div>
        <h1>이름: {name}</h1>
        <h2>나이: {age}</h2>
        <h2>별명: {nickname}</h2>
      </div>
    );
  } else {
    return <div>데이터가 없습니다</div>;
  }
}
