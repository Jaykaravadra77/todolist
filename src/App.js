import React, { useState } from "react";
import ToDolist from "./ToDolist";
function App() {
  const [input,setInput]=useState("");
  const [item,setItem]=useState([]);
  function change(event){
    setInput(event.target.value);

  } 
  function onc(event){
    setItem((oldItems)=>{
        return [...oldItems,input];
    })
    // setInput("");
  }
  function del(id){
      console.log("Deleted");
      setItem((oldItems)=>{
        return oldItems.filter((item,index)=>{
            return index !== id ;
         })
      })
  }
  return (
     <>
      <input type="text" onChange={change} value={input}/> 
      <button type="submit" onClick={onc}>Submit</button>
      <ul>
        {item.map((item,index)=>{
         return <ToDolist text={item} key={index} delete={del} id={index}/> 
        })}
      </ul>
       </>
    );
}

export default App;
