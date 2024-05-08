import React from "react";
import useInput, {useBodyInput} from "../hooks/useInput";


function AddPageInput({createThread}) {
    const [title, setTitle] = useInput('');
    const [category, setCategory] = useInput('');
    const [body, setBody] = useBodyInput('');

    return (
        <form className="input-register">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={title} onChange={setTitle}/>
            <label htmlFor="category">Category</label>
            <input type="text" id="category" value={category} onChange={setCategory}/>
            <label htmlFor="body">Body</label>
            <div className="input-body" contentEditable onInput={setBody}></div>
            <button type="button" onClick={() => createThread({title, body, category})}>Submit</button>
        </form>
    );
}

export default AddPageInput;
