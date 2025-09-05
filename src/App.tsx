import ListGroup from "./components/ListGroup";

function TownCenter() {
  let fantasyItems = [
    "Elven Sword",
    "Dwarven Shield",
    "Wizard's Staff",
    "Dragon Scale",
    "Phoenix Feather",
  ];
  return (
    <div>
      <ListGroup items={fantasyItems} heading="Fantasy Items" />
    </div>
  );
}

export default TownCenter;
