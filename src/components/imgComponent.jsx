import images from "../images/img1.png";

// function ImgComponent() {
//   return <img src={images} width="200" alt="emoge" />;
// }

import { Component } from "react";

class ImgComponent extends Component {
  render() {
    return <img src={images} width="200" alt="emoge" />;
  }
}

export default ImgComponent;
