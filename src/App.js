/* eslint-disable no-restricted-globals */
import React from "react";
import List from "./components/List";
import Search from "./components/Search";
import Header from "./components/Header";
import { list } from "./list";

function App() {
  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />

      <hr />

      <List list={list} />
    </div>
  );
}

export default App;
