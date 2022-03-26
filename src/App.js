import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let msg = "아무나 클릭해주세요";
  const styleSet = { color: "red", fontSize: "50px" };

  let [click, setClick] = useState({ minggu: 0, aga: 0 });

  return (
    <div className="App">
      <img src={logo} style={{ width: 500 }} />
      <div className="test" style={styleSet}>
        <h2>{msg}</h2>
        <h4>
          밍구
          <span
            onClick={() => {
              setClick(...click, "?");
            }}
          >
            👍
          </span>
          클릭 회수 : {click.minggu}
        </h4>
        <h4>
          아가
          <span
            onClick={() => {
              // setClick(...click, click.aga + 1);
            }}
          >
            💕
          </span>
          클릭 회수 : {click.aga}
        </h4>
      </div>
    </div>
  );
}

export default App;
