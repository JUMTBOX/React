import React from 'react';
import catImg from '../images/img1.png';

export default function ImgComponents() {
  return (
    <div>
      <h1>퍼블릭 폴더</h1>
      <img src="/images/다운로드.jpeg" alt="퍼블릭 고양이" />
      <h1>SRC폴더</h1>
      <img src={catImg} alt="소스 " />
    </div>
  );
}
