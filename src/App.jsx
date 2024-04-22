import Child from "./components/Child";
import Parent from "./components/Parent";
import './App.css'
import ClockParent from "./components/ClockParent";
import Gallery from "./components/Gallery";
function App() {
  return (
    <div className="App">
      <h3>State:component's memory</h3>
      <Gallery/>
    <ClockParent/>
    </div>
  );
}

export default App;
