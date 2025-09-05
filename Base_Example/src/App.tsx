import Alert from "./Alert";
import Button from "./components/Button";

function TownCenter() {
  return (
    <div>
      <Alert>
        Welcome to the <span className="font-weight-bold">Town Center!</span>
      </Alert>
      <Button onClick={() => console.log("Clicked!")}>
        <span className="font-weight-bold">Click Me!</span>
      </Button>
      <Button color="secondary" onClick={() => console.log("Clicked!")}>
        <span className="font-weight-bold">Click Me!</span>
      </Button>
    </div>
  );
}

export default TownCenter;
