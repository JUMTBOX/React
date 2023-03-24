import "./App.css";
import MainHeader from "./components/mainheader";
import BtnToNaver from "./components/BtnToNaver";
import ImgComponent from "./components/imgComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./components/classComponent";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <BtnToNaver />
      <ImgComponent />
      <ClassComponent />
      <FunctionalComponent />
    </div>
  );
}

export default App;
