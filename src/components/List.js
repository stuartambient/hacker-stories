import React from "react";
import { list } from "../list";

function List() {
  return (
    <div>
      {list
        .filter((item) => item.points > 48)
        .map((filteredItem) => (
          <div key={filteredItem.objectID} id={filteredItem.objectID}>
            <span>
              Tech:
              <a href={filteredItem.url}>{filteredItem.title} </a>
            </span>
            <span>Author: {filteredItem.author} </span>
            <span>Num of comments: {filteredItem.num_comments} </span>
            <span>Points: {filteredItem.points} </span>
          </div>
        ))}
    </div>
  );
}

export default List;
