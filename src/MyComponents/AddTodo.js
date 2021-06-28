import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description can not be blank");
    } else {
      props.addTodo(title, desc);
    }
  };
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          name=""
          id="title"
        />

        <label htmlFor="desc">Description</label>
        <input
          type="text"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          name=""
          id="desc"
        />

        <button type="submit">Add </button>
      </form>
    </div>
  );
};
