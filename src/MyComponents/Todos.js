// If write probs then must use props.varname
// If writing direct varname then no need of probs.name  just write varname

//  {/* {props.todos} */}

//         {/* map returns array of results */}
//         {/* Todos as a child of App using fathers gift by Props.name

//         Todos as a father gives onDelete of his father and todo of his property to
//         TodoItems */}

import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List</h3>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            // console.log(todo.sno);
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};
