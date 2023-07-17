import React, { Component } from "react";
import Function1 from "./Components/Function1";
import Class1 from "./Components/Class1";
import Function2 from "./Components/Function2";

const korisnici = [
  { ime: "Leo", godine: 22 },
  { ime: "Marko", godine: 20 },
  { ime: "Ivan", godine: 24 },
];
export default class App extends Component {
  render() {
    return (
      <div>
        <Function1 ime={korisnici[0].ime} godine={korisnici[0].godine} />
        <Class1 ime={korisnici[1].ime} godine={korisnici[1].godine} />
        <Function2 ime={korisnici[2].ime} godine={korisnici[2].godine}>
          <div>Children</div>
        </Function2>
      </div>
    );
  }
}
