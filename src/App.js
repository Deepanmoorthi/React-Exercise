import Bird from './exercise12.js/birds';
import BirdCard from './exercise12.js/birdscard';
// import Dates from './exercise3/dates';
// import Day from './exercise3/time';
import Student from './exercise4/propsdata';
import React,{useState} from 'react';
import Toggle from './exercise5/togglebutton';
import Form from './exercise7/form';
import Todo from './exercise9/Todo';
import './App.css';

function App() {
  const [name,setName]=useState("Click to order the product")
  return (
    
    <div className="App">
      <header className="App-header">
       <Bird />
       <BirdCard />
       <Toggle />

       {/* <Dates/> */}
       {/* <Day/> */}
       <div className='props'>
       <h3 color="black">Props in React :</h3>
     <Student name={name}/>
     <button onClick={()=>{setName("Order placed successfully")}}><h3>SUBMIT</h3></button>
     </div>  
     <br></br>
     <Form />
     <Todo />
     </header>
     
    </div>
  );
}

export default App;








