import React from "react";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <Search />

      <hr />
      <List />
    </div>
  );
}

export default App;
