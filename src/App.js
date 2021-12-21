import './App.css';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import Items from './components/Items';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <h1>App React</h1>
      <Counter/>
      <Items/>
    </div>
  );
}

export default App;
