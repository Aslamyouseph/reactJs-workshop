import React from "react";
import { useState } from "react";
import counter from "./components/Counter";
import Todo from "./components/todo/todo"; // importing the todo.js file
import FolderStructure from "./components/folderStracture/folderStracture"; // importing the Folderstractuer file

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
  //
  //FIXME: From here onwards the TODO project starting
  // return (
  //   // calling the todo function which is defined in the todo.js file
  //   // always start the function name with capital letter
  //   <div className="app">
  //     <Todo />
  //   </div>
  // );
  //
  //
  //FIXME: From here onwards the FolderStructure example is  starting

  return (
    // calling the FolderStructure function which is written inside the FolderStructure.js file
    <div>
      <FolderStructure />
    </div>
  );
}

export default App;
