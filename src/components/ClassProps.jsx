import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    const { name, age, nickname } = this.props;
    return (
      <div>
        <h1>이름: {name}</h1>
        <h2>나이: {age}</h2>
        <h2>별명: {nickname}</h2>
      </div>
    );
  }
}
