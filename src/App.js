import React, { Component } from "react";
import Function1 from "./Components/Function1";
import Class1 from "./Components/Class1";
import Function2 from "./Components/Function2";

export default class App extends Component {
  state = {
    korisnici: [
      { ime: "Leo", godine: 22 },
      { ime: "Marko", godine: 20 },
      { ime: "Ivan", godine: 24 },
    ],
    proizvoljno: "Ovo je proizvoljni tekst",
  };

  render() {
    return (
      <div>
        <Function1
          ime={this.state.korisnici[0].ime}
          godine={this.state.korisnici[0].godine}
        />
        <Class1
          ime={this.state.korisnici[1].ime}
          godine={this.state.korisnici[1].godine}
        />
        <Function2
          ime={this.state.korisnici[2].ime}
          godine={this.state.korisnici[2].godine}
        >
          {this.state.proizvoljno}
        </Function2>
      </div>
    );
  }
}
