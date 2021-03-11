import React, { useState } from "react";
import User from "./User";

interface IProps {
  user: User;
  turnDisplayTodo: any;
}

const GetTodo = (props: IProps) => {
  return (
    //I use a new componenet for display the todo
    <div style={styles}>
      <p> userID : {props.user.userId}</p>
      <p> ID : {props.user.id}</p>
      <p> title : {props.user.title}</p>
      <p> completed : {props.user.completed ? "yes" : "no"} </p>
      <button
        style={{ marginTop: "18px" }}
        className="btn btn-primary"
        onClick={(event) => {
          event.preventDefault();
          props.turnDisplayTodo(false);
        }}
      >
        reset todo!
      </button>
    </div>
  );
};

export default GetTodo;
const styles = {
  borderRadius: 22,
  boxShadow:
    "0 2px 4px 0 rgba(0, 0, 0, 0.2),   0 25px 50px 0 rgba(0, 0, 0, 0.1)",
  fontFamily: "system-ui",
  margin: "24px auto",
  padding: "4px 24px 24px 24px",
  width: "300px",
};
