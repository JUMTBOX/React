import './App.css';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;
const Container = styled('div')`
  background-color: black;
`;
const AppHeader = styled('header')`
  width: 100%;
`;
const CustomImg = styled('img')`
  width: 60%;
  animation: ${rotate} 5s 3s infinite linear;
`;
const CustomAnchor = styled('a')`
  text-decoration: none;
  font-size: 1.5rem;
`;

function App() {
  return (
    <Container className="App">
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
    </Container>
  );
}

export default App;
