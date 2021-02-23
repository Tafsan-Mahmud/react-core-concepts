import logo from './logo.svg';
import './App.css';

function App() {
  const person = { 
    name:'Dr Mahfuzur Rahaman',
    job:'singer'
}
let style = {
  color:'red',
  backgroundColor:'yellow'
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done again2 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>My first react app</p>
        <h1 className= "" style = {style}> Hello React : {34 + 34}</h1>
        <h2>Detail : {person.name + ' ' + person.job}</h2>
      </header>
    </div>
  );
}

export default App;
