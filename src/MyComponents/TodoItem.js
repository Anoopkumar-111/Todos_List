import React from 'react'



// If write probs then must use props.varname 
// If writing direct varname then no need of probs.name  just write varname
export const TodoItem = ({todo,onDelete}) => {

    // TodoItems as a child of Todos gets todo(of his father) and onDelete(of grandpa)
    //If passing onDelete(todo) directly then it gets called automatically at compile time
    // so we pass an arrow function 
    return (
        <>
        <div>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
        <hr/>
        </>
    )
}
