import React from "react";

const memeMaker = props => {
  return (
    <div>
      <h1>Meme Maker</h1>
      <div className="meme-div">
        <input
          type="text"
          name="topText"
          value={props.topText}
          placeholder="Enter Top Text"
          onChange={props.text}
        />
        <input
          type="text"
          name="bottomText"
          value={props.bottomText}
          placeholder="Enter Bottom Text"
          onChange={props.text}
        />
        <button onClick={props.imageGen}>Different Image</button>
      </div>
    </div>
  );
};

export default memeMaker;
