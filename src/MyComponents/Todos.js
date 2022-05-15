import React from 'react'
import TodoItem from './TodoItem';

    const Todos = (props) => {
    return (
        <div className="container">
                <h3 className="text-center my-2">Todo List</h3>
                {/* <TodoItem todoz={props.tod[1]}/> */}
                {props.tod.length===0? "No todos to display. Add one now.":
                    props.tod.map((todo) => {
                    return <TodoItem todoz={todo} key={todo.sno} onDelete={props.onDelete}/>
                })
                }
        </div>
    )
}

export default Todos;
