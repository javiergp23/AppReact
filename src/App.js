import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';

function App() {

  const persona = [
    {name: 'Jose', age: '26'},
    {name: 'Benjamin', age: '29'},
    {name: 'Raul', age: '32'},
    {name: 'Andrea', age: '45'},
    {name: 'Sofia', age: '23'},
  ]

  return (
    <div className="App">
      <NavBar/>
      <h1>Hola Mundo</h1>
      { persona.map(p => <Card name={p.name} age={p.age}/>)}
    </div>
  );
}

export default App;
