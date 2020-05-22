import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div", // kind of component
    {}, // attribute to regular tag/element, or attributes passed down into the component
    [
      React.createElement("h1", {}, "Adopt Me!"), // children
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel",
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed",
      }),
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));
