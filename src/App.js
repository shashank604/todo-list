import './App.css';
import React,{useState} from 'react';
import Todolist from './Todolist';

function App() {
  const [inputlist, setinputlist] = useState("");
  const [items, setitems] = useState([]);

  const itemevent=(e)=>{
    setinputlist(e.target.value);
  }

  const listofitems=(e)=>{
    setitems((olditems)=>{
      return [...olditems,inputlist]
    })
    setinputlist("");
  }
  const deleteme=(id)=>{
    console.log("Deleted")
    setitems((olditems)=>{
      return olditems.filter((arrEle,index)=>{
        return index!==id;
      })
    })
}

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>TodoList</h1>
        <br />
        <input type="text" name="" placeholder='Add a item' onChange={itemevent} value={inputlist}    />
        <button className="add" onClick={listofitems}>+</button>
        <ol>
          {items.map((itemvalue,index)=>{
            return <Todolist key={index} id={index} text={itemvalue} onSelect={deleteme} />
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
