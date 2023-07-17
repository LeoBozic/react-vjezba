import React, { Component } from "react";
import Function1 from "./Components/Function1";
import Class1 from "./Components/Class1";
import Function2 from "./Components/Function2";

export default class App extends Component {
  state = [
    { ime: "Leo", godine: 22 },
    { ime: "Marko", godine: 20 },
    { ime: "Ivan", godine: 24 },
    { proizvoljno: "Ovo je proizvoljni tekst" },
  ];

  render() {
    return (
      <div>
        <Function1 ime={this.state[0].ime} godine={this.state[0].godine} />
        <Class1 ime={this.state[1].ime} godine={this.state[1].godine} />
        <Function2 ime={this.state[2].ime} godine={this.state[2].godine}>
          {this.state[3].proizvoljno}
        </Function2>
      </div>
    );
  }
}
