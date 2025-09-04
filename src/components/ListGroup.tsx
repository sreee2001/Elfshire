function ListGroup() {
  let fantasyItems = [
    "Elven Sword",
    "Dwarven Shield",
    "Wizard's Staff",
    "Dragon Scale",
    "Phoenix Feather",
  ];
  // convert to jsx
  let listItems = fantasyItems.map((item) => <li key={item}>{item}</li>);

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
