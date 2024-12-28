import { useState } from "react";
import Counter from "../src/components/Counter";
import "./App.css";

function App() {
  //
  //TODO: useState example in this the definition and calling in this file itself
  //
  // const [count, setCount] = useState(0);   //calling the useState function
  // // Arrow function
  // const addCount = () => {
  //   setCount(count + 1);  //updating the useState function using the setCount method defined in the 7 line
  // };
  // return (
  //   <div>
  //     <button onClick={addCount}> click here</button>
  //     <h1>counter : {count}</h1>
  //   </div>
  // );
  //
  // TODO: useState example  we defining the function in this App.js and calling in Counter.js file
  //
  // const [count, setCount] = useState(0);
  // const addCount2 = () => {
  //   setCount(count + 1);
  // };
  // return (
  //   <div>
  //     <button onClick={addCount2}>click here</button>
  //     <Counter count={count} />
  //   </div>
  // );
  //TODO: destructuring the object in the Counter.js file
  //
  // const [count, setCount] = useState(0);
  // const addCount2 = () => {
  //   setCount(count + 1);
  // };
  // return (
  //   <div>
  //     <button onClick={addCount2}>click here</button>
  //     <Counter count={count} />
  //   </div>
  // );
  // TODO: Spread operator function
  //
  //
  // let obj = {
  //   name1: "Aslam",
  //   name2: "Youseph",
  //   name3: "Afnitha",
  // };
  // return (
  //   <div>
  //     <Counter {...obj} />
  //   </div>
  // );
  //TODO: Mapping Operations
  //
  // let obj = [{ name: "Aslam" }, { name: "Youseph" }, { name: "Afnitha" }];
  // return (
  //   <div>
  //     {obj.map((item, index) => {
  //       return <Counter key={index} name={item.name} />;
  //     })}
  //   </div>
  // );
  //
  //TODO: UseCase another operation
  // const [state, setState] = useState(false);
  // return (
  //   <div>
  //     <button onClick={() => setState(!state)}>
  //       Click here (show or hide)
  //     </button>
  //     {/* Conditional rendering using a ternary operator */}
  //     {state ? <Counter /> : null}
  //   </div>
  // );
  //
  //TODO: useEffect operations. it display when the element appears on the screen
  // const [state, setState] = useState(false);
  // return (
  //   <div>
  //     <button onClick={() => setState(!state)}>
  //       Click here (show or hide)
  //     </button>
  //     {/* Conditional rendering */}
  //     {state ? <Counter /> : null}
  //   </div>
  // );
  //FIXME: From here onwards the TODO project starting
  //
  //This is an object which contain all the details of the TODO
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
          // display the values which stored in the string
          value={toDo}
          // updating the todo by using the value typed in the input field
          onChange={(e) => setToDO(e.target.value)} // e.target.value (we got the typing text)
          placeholder="🖊️ Add item..."
        />
        <i
          // This is used to insert the values into the object
          // first we separating the toDos value and adding the toDo value and sending the full values to the object (also we sending the status as false for the validation)
          onClick={() =>
            //Date is used to access the date and considering it as a ID,
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
                    // console.log(e.target.checked);
                    // console.log(obj);
                    // This is used for the validation
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

export default App;
