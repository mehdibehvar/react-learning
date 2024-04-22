import Child from "./components/Child";
import Parent from "./components/Parent";
import './App.css'
import ClockParent from "./components/ClockParent";
import Gallery from "./components/Gallery";
import GalleryWithState from "./components/GalleryWithState";
function App() {
  return (
    <div className="App">
      <h1>State:component's memory</h1>
      {/* <Gallery/> */}
      <GalleryWithState/>
    
    {/* <ClockParent/> */}
    </div>
  );
}

export default App;
