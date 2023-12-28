import { Component } from "react";
import "./App.css";
import elephant from "./images/elephant.jpeg";

import "./App.css";

export default class AppClass extends Component {
  render() {
    return (
      <>
        <h2> Kalvium Gallery </h2>
        <div id="gallery">
          {this.props.imageData.map((e) => {
            return (
              <img
                className="image"
                src={e.img}
                id={e.id}
                key={e.id}
                alt={`Elephant ${e.id}`}
              />
            );
          })}
        </div>
      </>
    );
  }
}
