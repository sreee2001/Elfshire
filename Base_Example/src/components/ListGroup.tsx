import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem?: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [SelectedIndex, setSelectedIndex] = useState(-1);

  // convert to jsx
  let listItems = items.map((item, index) => (
    <li
      className={
        SelectedIndex === index ? "list-group-item active" : "list-group-item"
      }
      key={item}
      onClick={() => {
        setSelectedIndex(index);
        onSelectItem && onSelectItem(item);
      }}
    >
      {item}
    </li>
  ));

  //listItems = []; // to test conditional rendering

  const message = listItems.length === 0 && <p>No items found</p>;

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">{listItems}</ul>
    </>
  );
}

export default ListGroup;
