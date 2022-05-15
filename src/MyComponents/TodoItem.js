import React from 'react'

     const TodoItem = (props) => {
    return (
        <>
        <div>
            {/* {props.todoz.sno}<br/> */}
            {props.todoz.title}<br/>
            {props.todoz.desc}<br/>
            <button className="btn btn-sm btn-danger" onClick={()=>props.onDelete(props.todoz)}>Delete </button>
        </div>
        <hr/>
        </>
    )
}

export default TodoItem;

