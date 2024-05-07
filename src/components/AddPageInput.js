import React from "react";


function AddPageInput() {
    return (
        <form className="input-register">
            <label htmlFor="title">Title</label>
            <input type="text" id="title"/>
            <label htmlFor="category">Category</label>
            <input type="text" id="category"/>
            <label htmlFor="body">Body</label>
            <div className="input-body"
                 contentEditable="true">
            </div>
            <button type="button">Submit</button>
        </form>
    );
}

export default AddPageInput;
