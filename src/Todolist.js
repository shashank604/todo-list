import React from 'react'

export default function Todolist(props) {

  return (
    <div className="todo_style">
        <li>  
          {props.text}
          <button className="delete2" onClick={()=>{
            props.onSelect(props.id)
          }}>X  </button>
        </li>       
    </div>
    
  )
}
