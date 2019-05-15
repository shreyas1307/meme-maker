import React from "react";

const memeDisplay = props => {
  //   const bgImage = {
  //     backgroundImage: `url(${props.randomImg})`
  //   };
  return (
    <section
      style={{
        backgroundImage: `url(${props.randomImg})`,
        width: "50vw",
        height: "50vh",
        alignSelf: "center"
      }}
    >
      {/* <img src={props.randomImg} /> */}
      <h2>{props.topText}</h2>
      <h2>{props.bottomText}</h2>
    </section>
  );
};

export default memeDisplay;
