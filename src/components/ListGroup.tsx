import { useState } from "react";

function ListGroup() {
  let fantasyItems = [
    "Elven Sword",
    "Dwarven Shield",
    "Wizard's Staff",
    "Dragon Scale",
    "Phoenix Feather",
  ];

  const [SelectedIndex, setSelectedIndex] = useState(-1);

  // convert to jsx
  let listItems = fantasyItems.map((item, index) => (
    <li
      className={
        SelectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      key={item}
      onClick={() => {
        setSelectedIndex(index);
      }}
    >
      {item}
    </li>
  ));

  //listItems = []; // to test conditional rendering

  const message = listItems.length === 0 && <p>No items found</p>;

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">{listItems}</ul>
    </>
  );
}

export default ListGroup;
