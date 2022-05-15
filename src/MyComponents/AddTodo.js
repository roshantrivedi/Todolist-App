import React, {useState} from 'react';

     const AddTodo = (props) => {
        const [title, setTitle] = useState("");
        const [desc, setDesc] = useState("");

        const submit = (e) => {
            e.preventDefault();  //page does not reload.
            if(!title || !desc)
            {
                alert('Title or Description cannot be empty!!!')
            }
            else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
            }
        }
    return (
        <div className="container">
            <h3 className="text-center my-2">Add a Todo</h3>

         <form onSubmit={submit}>

            <div className="mb-3">
             <label htmlFor="title" className="form-label">Todo Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter todo"/>
            </div>

            <div className="mb-3">
            <label htmlFor="desc" className="form-label">Add description</label>
            <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" placeholder="Description"/>
            </div><br/>

            <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
         </form>
        </div>
    )
}

export default AddTodo;
