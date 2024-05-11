import React from "react";
import PropTypes from "prop-types";
import useInput, { useBodyInput } from "../hooks/useInput";

function ThreadInput({ createThread }) {
  const [title, setTitle] = useInput("");
  const [category, setCategory] = useInput("");
  const [body, setBody] = useBodyInput("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    createThread({ title, body, category });
  };

  return (
    <form className="input-register" onSubmit={onFormSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" value={title} onChange={setTitle} />
      <label htmlFor="category">Category</label>
      <input
        type="text"
        id="category"
        value={category}
        onChange={setCategory}
      />
      <label htmlFor="body">Body</label>
      <div id={body} className="input-body" contentEditable onInput={setBody} />
      <button type="submit">Submit</button>
    </form>
  );
}

ThreadInput.propTypes = {
  createThread: PropTypes.func.isRequired,
};

export default ThreadInput;
