//FIXME: From here onwards the TODO project starting

import React from "react";
import { useState } from "react";
import "./todo.css"; // importing the style sheet

//always start the function name with capital letter
function Todo() {
  //This is an object which contain all the details of the TODO  .Each todo is adding to the todos
  const [toDos, setToDos] = useState([]);
  // This is an empty string which store the each values typing in the input field in to the empty object
  const [toDo, setToDO] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          // display the values which stored in the todo string
          value={toDo}
          // updating the todo by using the value typed in the input field. to update the value we use the onchange method
          onChange={(e) => setToDO(e.target.value)} // e.target.value (we got the typing text) Inserting the values into the todo by calling the todo function
          placeholder="🖊️ Add item..."
        />
        <i
          // This is used to insert the todo values into the todos object
          // first we separating the toDos value and adding the toDo value and sending the full values to the object (also we sending the status as false for the validation)
          onClick={() =>
            //Date is used to access the date and considering it as a ID,(Uniquely to identifying the todo)
            // Inserting the todo values with the date and a status variable
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          //This is used for mapping or loop the array elements continuously . so all the element in the todos will display  */
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    // This is used for the validation
                    //filter method is used to access the elements from the array  based on a condition
                    setToDO(
                      toDos.filter((obj2) => {
                        if (obj2.id == obj.id) {
                          obj2.status = e.target.checked;
                        }
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  className="fas fa-times"
                  // This is used for deleting the items
                  onClick={() => {
                    // Filter out the item with the current id
                    setToDos(toDos.filter((item) => item.id !== obj.id));
                  }}
                ></i>
              </div>
            </div>
          );
        })}
        {toDos.map((obj) => {
          if (obj.status === true) {
            return <h1>{obj.text}</h1>;
          }
        })}
      </div>
    </div>
  );
}

export default Todo;
