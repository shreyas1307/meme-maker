import React, { Component } from "react";
import "./App.css";

import MemeMaker from "./MemeMaker/MemeMaker";
import MemeDisplay from "./MemeDisplay/MemeDisplay";

class App extends Component {
  state = {
    memesArray: [],
    // defaultImg: "",
    randomImg: "",
    topText: "",
    bottomText: ""
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => {
        console.log(data.data);
        // const defaultImg = data.data.memes[1].url;
        // console.log(defaultImg);
        this.setState({
          memesArray: [...data.data.memes]
          // defaultImg: defaultImg
        });
      });
  }

  randomImageGenerator = () => {
    const memesArray = [...this.state.memesArray];
    const randomNum = Math.floor(Math.random() * Math.floor(100));
    const randomImage = memesArray[randomNum].url;

    this.setState({
      randomImg: randomImage
    });
  };

  setText = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <MemeMaker text={this.setText} imageGen={this.randomImageGenerator} />
        <MemeDisplay
          // defaultImg={this.state.defaultImg}
          randomImg={this.state.randomImg}
          topText={this.state.topText}
          bottomText={this.state.bottomText}
        />
      </div>
    );
  }
}

export default App;
