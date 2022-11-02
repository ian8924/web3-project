import React from "react";
// 背景
import Wave from './Wave.js'

export default function Main() {
  return (
    <>
        <div className="container">
          <div className="titles">
            Into The <br />
            <h1 className="strokeText" data-storke="Arjaverse!" id="title">
              Arjaverse!
            </h1>
          </div>
          {/* sun */}
          <div className="sun">
            <div className="sun-content" />
          </div>
          {/* 海浪 */}
          <Wave />
          <div className="wave-bot"></div>
        </div>
    </>
  );
}
