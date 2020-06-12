/* eslint-disable no-restricted-globals */
import React from "react";
import List from "./components/List";
import Search from "./components/Search";
import Header from "./components/Header";
import { list } from "./list";

function App() {
  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem("search") || "Bitwolf"
  );

  React.useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = list.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
}

export default App;
