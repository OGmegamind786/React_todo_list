/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: 300,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        color: "green",
      }}
    >
      <div
        style={{
          textDecoration: props.todo.complete ? "line-through red" : "",
          wordWrap: "break-word",
        }}
        onClick={props.toggleComplete}
      >
        {props.todo.text}
      </div>
      <button onClick={props.deleteTodo} style={{ color: "red" }}>
        X
      </button>
    </div>
  </div>
);
