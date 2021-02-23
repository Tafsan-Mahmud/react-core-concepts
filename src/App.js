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
        
        <p>My first react app</p>
        <h1 className= "" style = {style}> Hello React : {34 + 34}</h1>
        <h2>Detail : {person.name + ' ' + person.job}</h2>
        <Person></Person>        
        <Person></Person>        
        <Person></Person>         
        <Person></Person>        

      </header>
    </div>
  );
}

function Person (){
  const personStyle = {
    border:'3px solid red ',
    margin:'10px',
    padding: '10px'
  }
  const h1Style = {
    backgroundColor:'yellow',
    color:'brown',
    
  }
  return(
    <div style = {personStyle}>
      <h1>name: sakib al hasan</h1>
      <h3>hero of the year </h3>
      <div>
        <h1 style ={h1Style}>hellow React</h1>
      </div>
    </div>
  );
}

export default App;
