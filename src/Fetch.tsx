import User from "./User";

const Fetch = (): any => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/3`)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      return new User(data.title, data.id, data.userId, data.completed);
    })
    .catch((error) => {
      return { error };
    });
};
export default Fetch;
