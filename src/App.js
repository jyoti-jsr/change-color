import "./styles.css";
import { useState } from "react";
export default function App() {
  // const color = "red";
  // const style = {
  //   color
  // };
  const [backgroundColor, setBackgroundColor] = useState("#81b71a");
  var bgColors = {
    Default: "#81b71a",
    Blue: "#00B1E1",
    Cyan: "#37BC9B",
    Green: "#8CC152",
    Red: "#E9573F",
    Yellow: "#F6BB42"
  };

  const handleChangeColor = () => {
    const objectKey = Object.keys(bgColors);
    // console.log(objectKey);
    const indexs = objectKey.length;
    const randomIndex = Math.floor(Math.random() * indexs);
    // console.log(randomIndex);

    // console.log(bgColors[objectKey[randomIndex]]);
    setBackgroundColor(bgColors[objectKey[randomIndex]]);
  };

  return (
    <div className="App">
      <h1 style={{ backgroundColor: `${backgroundColor}` }}>
        Hello CodeSandbox
      </h1>
      <h2>Start editing to see some magic happen!</h2>
      <button
        onClick={handleChangeColor}
        style={{ backgroundColor: `${backgroundColor}`, padding: "10px" }}
      >
        Change Color
      </button>
    </div>
  );
}
