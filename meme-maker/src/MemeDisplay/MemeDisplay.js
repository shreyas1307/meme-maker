import React from "react";

const memeDisplay = props => {
  //   const bgImage = {
  //     backgroundImage: `url(${props.randomImg})`
  //   };
  return (
    <section
      style={{
        backgroundImage: `url(${props.randomImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
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
