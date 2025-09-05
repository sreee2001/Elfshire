import ListGroup from "./components/ListGroup";

function TownCenter() {
  let fantasyItems = [
    "Elven Sword",
    "Dwarven Shield",
    "Wizard's Staff",
    "Dragon Scale",
    "Phoenix Feather",
  ];

  const handleSelectItem = (item: string) => {
    console.log(`Selected item: ${item}`);
  };

  return (
    <div>
      <ListGroup
        items={fantasyItems}
        heading="Fantasy Items"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default TownCenter;
