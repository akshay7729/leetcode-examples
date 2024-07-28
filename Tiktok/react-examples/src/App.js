import "./App.css";
import Dropdown from "./components/dropdown";

function App() {
  const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <div className="App">
      <Dropdown options={options} />
    </div>
  );
}

export default App;
