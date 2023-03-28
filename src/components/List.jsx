import React from "react";
import ListChild from "./ListChild";
// import

export default function List() {
  const dataArr = [
    {
      title: "리액트 공부하기",
      todo: "state 사용법 익히기",
    },
    {
      title: "코테 문제 풀기",
      todo: "Lv 0 정복 가즈아",
    },
    {
      title: "한강 가기",
      todo: "경품 타기",
    },
  ];

  return (
    <div>
      <h1>오늘 해야할 일</h1>
      {/* // <Modal></Modal> */}
      <hr />
      {dataArr.map((item, index) => {
        return <ListChild title={item.title} todo={item.todo} key={index} />;
      })}
      {dataArr.map((el, index) => {
        return (
          <div key={index}>
            <hr />
            <h2>{el.title}</h2>
            <p>{el.todo}</p>
          </div>
        );
      })}
    </div>
  );
}
