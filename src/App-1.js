import React from "react";

// eslint-disable-next-line
const title = "React";
const welcome = {
  greeting: "Hey",
  title: "React and React-Native",
};

const useFunction = (param) => param;
const element = <p>Hello again!</p>;
const myarray = [<p>Hello</p>, <p>World</p>, <p>Again!!!!!!</p>, 4, 5, 6];

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>Hello {title} World</h1>
      <h2>
        {welcome.greeting} {welcome.title}
      </h2>
      <h3>{useFunction("myFunction")}</h3>
      <h4>{element}</h4>
      <div>{myarray}</div>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
