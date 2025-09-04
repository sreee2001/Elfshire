function ListGroup() {
  const fantasyItems = [
    "Elven Sword",
    "Dwarven Shield",
    "Wizard's Staff",
    "Dragon Scale",
    "Phoenix Feather",
  ];
  // convert to jsx
  const listItems = fantasyItems.map((item) => <li key={item}>{item}</li>);

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">{listItems}</ul>
    </>
  );
}

export default ListGroup;
