import React, { useState, useEffect } from "react";

const LocalStorage = () => {
  const [todoList, setTodoList] = useState({
    title: "",
    description: "",
  });
  const [storageData, setStorageData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("TodoList");
    if (data) {
      setStorageData(JSON.parse(data));
    }
  }, [todoList]);

  const handleAdd = () => {
    if (todoList.title && todoList.description) {
      const updatedList = [...storageData, todoList];
      localStorage.setItem("TodoList", JSON.stringify(updatedList));
      setTodoList({ title: "", description: "" });
    }
  };

  const handleClearAll = () => {
    localStorage.removeItem("TodoList");
    setStorageData([]);
  };

  const handleRemove = (index) => {
    const updatedList = [...storageData];
    updatedList.splice(index, 1);
    localStorage.setItem("TodoList", JSON.stringify(updatedList));
    setStorageData(updatedList);
  };

  return (
    <div className="localStorageContainer">
      <h2>LocalStorage</h2>
      <div className="localStorageForm">
        <input
          type="text"
          value={todoList.title}
          onChange={(e) => setTodoList({ ...todoList, title: e.target.value })}
          placeholder="Title"
        />
        <input
          type="text"
          value={todoList.description}
          onChange={(e) =>
            setTodoList({ ...todoList, description: e.target.value })
          }
          placeholder="Description"
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleClearAll}>Clear All</button>
      </div>
      <div className="localStorageData">
        <h3>Data in LocalStorage:</h3>
        <ul>
          {storageData.map((todo, index) => (
            <li key={index}>
              <span>
                {todo.title}: {todo.description}
              </span>
              <button onClick={() => handleRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default LocalStorage;



// if ("geolocation"in navigator){
//     navigator.geolocation.getCurrentPosition((position)=>{
//         let latitude=position.coords.latitude

//     })
// }