import React, { useState } from 'react'
import "./App.css"; //To import external CSS file

function ToDoList() {

    let [todoList, setTodoList] = useState([])

    let saveToDoList = (event) => {
       let toDoName = event.target.toDoName.value; 
    //    alert(toDoName);
       if(!todoList.includes(toDoName)){
        let finalToToList = [...todoList, toDoName];
        setTodoList(finalToToList)
       }else{
        alert("You already have this task in your list")
       }
       event.preventDefault(); //Jr te value khali dakhvaychi asel tr use this, he default value prevent krte
    };
 
    //delete Row onclick of  deleteRow
    let deleteRow = (index) =>{
        setTodoList(oldValues => {
            return oldValues.filter((value,i)=> i !== index)
        })
    }
    //To Marks Tasks a Complete
    // let [done, setDone] = useState(false);
    // let checkStatus=()=>{
    //     setDone(!done)
    // }
    
  return (
    <div>
        <form onSubmit={saveToDoList}>
        <h1 className='heading'>To Do List</h1>
            <div className='form'>
                <div className="form-group">
                    <input className='input' type="text" name = 'toDoName' />
                </div>
                <div>
                    <button className='button border'>Add To Do</button>
                </div>
            </div>
                
            </form>
            <div className='outerDiv'>
                <ul>
                    {todoList.map((item, index) => 
                    // className={(done)? 'completeToDo': ''} onClick={checkStatus}
                    <li key={index}>{index+1}. {item} <span onClick={()=>deleteRow(index)}>&times;</span></li>
                    )}
                </ul>
            </div>
     
    </div>
    
  )
}
export {ToDoList}
