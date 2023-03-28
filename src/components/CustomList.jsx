import React from "react";

export default function CustomList({ arr }) {
  return (
    <ul>
      {arr.map((el) => {
        return <li>{el}</li>;
      })}
    </ul>
  );
}
