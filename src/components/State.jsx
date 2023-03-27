import React, { useState } from "react";

export default function State() {
  const [teacher, setTeacher] = useState("이효석");
  //   let teacher = "이효석";
  //   function inEnglish() {
  //     teacher = "tetz";
  //     console.log(teacher);
  //   }
  return (
    <div>
      <button
        onClick={() => {
          setTeacher("tetz");
        }}
      >
        영어로
      </button>
      <br />
      <span>{teacher}</span>
    </div>
  );
}
