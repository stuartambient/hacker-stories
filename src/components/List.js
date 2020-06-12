import React from "react";

/* FIRST REFECTOR WITH DESTRUCTURING */
/* const List = ({ list }) =>
  list.map(item => <Item key={item.objectID} item={item} />);

const Item = ({ item: { title, url, author, num_comments, points } }) => (
  <div>
    <span>
      <a href={url}>{title}</a>
    </span>
    <span>{author}</span>
    <span>{num_comments}</span>
    <span>{points}</span>
  </div>
); */

/* SECOND REFACTOR WITH SPREAD OPERATOR */
const List = ({ list }) =>
  /* list.map(({ objectID, ...item }) => <Item key={objectID} {...item} />); */
  /* RETURN TO ORIGINAL */
  list.map((item) => <Item key={item.objectID} item={item} />);

const Item = ({ item }) => (
  <div>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>
);
export default List;
