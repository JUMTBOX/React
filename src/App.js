import './App.css';
import FancyBorder from './components/FancyBorder';
import ImgComponents from './components/ImgComponents';

// import styled, { keyframes } from 'styled-components';
// import logo from './logo.svg';

import TestScss from './components/TestScss';

function App() {
  return (
    <div className="App">
      <FancyBorder color="blue">
        <h1>props.children</h1>
        <p>이건 매우 유용한 기술입니다.</p>
        <ImgComponents />
      </FancyBorder>
    </div>
  );
}

export default App;

// const rotate = keyframes`
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   `;
// const Container = styled('div')`
//   background-color: black;
//   overflow-y: hidden;
// `;
// const AppHeader = styled('header')`
//   width: 100%;
// `;
// const CustomImg = styled('img')`
//   width: 60%;
//   animation: ${rotate} 5s 3s infinite linear;
// `;
// const CustomAnchor = styled('a')`
//   text-decoration: none;
//   font-size: 1.5rem;
// `;

{
  /* <Container className="App">
      <AppHeader className="App-header">
        <CustomImg src={logo} className="App-logo" alt="logo" active />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <CustomAnchor
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </CustomAnchor>
      </AppHeader>
    </Container> */
}
