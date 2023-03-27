// import React, { useState } from "react";

// export default function State() {
//   const [teacher, setTeacher] = useState("이효석");

//   return (
//     <div>
//       <button onClick={() => setTeacher("tetz")}>영어로</button>
//       <br />
//       <span>{teacher}</span>
//     </div>
//   );
// }

import React, { Component } from "react";

export default class ClassState extends Component {
  state = {
    teacher: "이효석",
  };

  render() {
    const { teacher } = this.state;
    return (
      <div>
        <h1>{teacher}</h1>
        <button onClick={() => this.setState({ teacher: "tetz" })}>
          영어로
        </button>
      </div>
    );
  }
}
