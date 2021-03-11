import React, { useState, useEffect } from "react";
import "./App.css";
import GetTodo from "./GetTodo";
import Fetch from "./Fetch";
import User from "./User";

function App() {
  const [isDisplayTodo, setIsDisplayTodo] = useState(false);
  const [user, setUser] = useState(new User("", 0));
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const result = await fetch(
          `https://jsonplaceholder.typicode.com/todos/3`
        );

        const data = await result.json();
        const { title, id, userId, completed } = data;

        const user_ = new User(title, id, userId, completed);
        setUser(user_);
      } catch (error) {
        alert(error);
      }
    };
    loadUser();

    setIsDisplayTodo(true);
  }, [isClick]);

  return (
    <div className="App">
      {!isDisplayTodo && (
        <button
          style={{ margin: "10%" }}
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            isClick ? setIsClick(false) : setIsClick(true);
          }}
        >
          get todo
        </button>
      )}

      {isDisplayTodo && (
        <GetTodo
          user={user}
          turnDisplayTodo={(isDisplayTodo_: boolean): void => {
            setIsDisplayTodo(isDisplayTodo_);
          }}
        />
      )}
    </div>
  );
}

export default App;

//for keep it to me :)

// const getUserFetch = Fetch();
// getUserFetch
//   .then((user: User) => {
//     setUser(user);
//   })
//   .catch((error: any) => {
//     console.error(error, "Error");
//   });

// try {
//   const user = await Fetch();
//   setUser(user);
// } catch (e) {
//   console.log(e, "lllll");
// }
// loadUser();
//
// turnDisplayTodo={isDisplayTodo}
