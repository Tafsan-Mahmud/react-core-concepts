import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['josim','munna','rubel' , 'ononto jolil', ]
 const products = [
   {name:'Photoshop', price:'$90.99'},
   {name:'ilustator' , price:'$56.97'},
   {name:'PSD reader' , price:'$5.83'},
   {name:'PSD reader' , price:'$5.83'},
  
]

// const friends = [
//       {name:'abul', id:'44343628'},
//       {name:'chabul', id:'1383628'},
//       {name:'kabul', id:'6532628'},
//       {name:'bulbul', id:'9393288'},
//       {name:'atiur', id:'2397329'},
      
// ]

const clgRoll = [
            {name:'esddedw' , roll:'44454' , },
            {name:'vfssdw' , roll:'54644' , },
            {name:'edghdw' , roll:'5454' , },
            {name:'adgdw' , roll:'52334' , },
            {name:'qfgedw' , roll:'54984' , },
              ]
  return (


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>My first react app</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
          nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          clgRoll.map(data=><Products clgdataRoll={data}></Products>)
        }
        {/* {
          friends.map(fdata =><Products frndName={fdata}></Products>)
        } */}
        <Person name={nayoks[3]} id="76236" ></Person>        
        <Person name="bappaRaz the chaka" id="35633" ></Person>        
        <Person name="rubel the fight man" id="45363" ></Person>         
        <Person name="dildar the joker" id="644674" ></Person>        
        
      </header>
    </div>
  );
}

function Counter (){
  const [count , setCount ] = useState(0)
  const handleIncrease = ()=> setCount(count + 1);
  const handleIncrease2 = ()=> setCount(count - 1);
  return(
    <div>
      <h1>count : {count} </h1>
      <button onClick= {handleIncrease}>increase</button>
      <button onClick={handleIncrease2}> decrease</button>
    </div>
  )
}

function Users (){
  const [users,setUser] = useState([])
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res =>res.json())
  .then(data => setUser(data))
} , []);
  return(
    <div>
      <h3>daynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user =><li>{user.email}</li>)
        }
      </ul>
    </div>
    
  )
}

function Products (props){
  const productsStyle = {
    border:'1px solid gold ',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'220px',
    width:'200px',
    float:'left',
    color:'black',
    marginBottom:'5px'
  }
  const {name,roll}= props.clgdataRoll; // destruture mathod
  return(
    <div style={productsStyle}>
      <h3>{name}</h3>
      <h5>roll :{roll}</h5>
      <button>Buy Now</button>
    </div>
  )
}



function Person (props){
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
      <h1>name : {props.name}</h1>
      <h3>id : {props.id}</h3>
      <div>
        <h1 style ={h1Style}>hellow React</h1>
      </div>
    </div>
  );
}

export default App;
