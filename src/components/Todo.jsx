import React, { useState } from 'react'

const Todo = () => {

  const [todoList, setTodoList] = useState([]);

    const addNewTodo = (e) => {
       // console.log(e.code);
        if(e.code === 'Enter'){
             console.log(e.target.value);
           //  todoList.push(e.target.value);
           setTodoList([ ...todoList, e.target.value ]);
           console.log([ ...todoList, e.target.value ]);
           
        }
    }

  return (
    <div>
        <div className='container'>
            <h1 className='text-center my-5'>Todo List</h1>
            <div className='card'>
                <div className='card-header'>
                    <input type="text" className='form-control' onKeyDown={ addNewTodo } />

                </div>
                <div className='card-body'></div>

                {todoList.map( (todo) => {
                     return (
                     <div className="d-flex justify-content-between mb-3">
                    <h5>{todo}</h5>
                    <button className='btn btn-danger'>Delete</button>
                    </div> 
                  );   
                
                } ) }

            </div>

        </div>
    </div>
  )
}

export default Todo