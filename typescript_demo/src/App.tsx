import "./App.css";
import ChartComponent from "./components/ChartComponent";

function App() {
  return (
    <>
      <div className="header">
        <h1>TypeScript Demo</h1>
      </div>
      <ChartComponent
        data={{
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              borderColor: "rgb(75, 192, 192)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
          ],
        }}
        title="My Chart"
      />
    </>
  );
}

export default App;
