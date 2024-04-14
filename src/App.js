import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Profile from './components/Profile';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
    <Counter/>
    <hr/>
    <Profile/>
    <hr/>
    <ProductList/>
    </div>
  );
}

export default App;
