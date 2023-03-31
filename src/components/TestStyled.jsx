import React from 'react';
import styled from 'styled-components';

const CustomDiv = styled('div')`
  background-color: skyblue;
`;
const Myh1 = styled('h1')`
  background-color: black;
  color: orange;
`;
const MySpan = styled('span')`
  background-color: violet;
  color: white;
  font-weight: 700;
`;

export default function TestStyled() {
  return (
    <CustomDiv>
      <Myh1>h1 태그입니다.</Myh1>
      <MySpan>span 태그입니다.</MySpan>
    </CustomDiv>
  );
}
