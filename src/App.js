import React from "react";
import { useState } from "react";
import counter from "./components/Counter";
import Todo from "./components/todo/todo"; // importing the todo.js file
import FolderStructure from "./components/folderStracture/folderStracture"; // importing the Folderstractuer file
import ReusingTheStyle from "./components/reusingStyle/ReusingTheStyle";
import Page1 from "./if_else_example/page1";
import Page2 from "./if_else_example/page2";
import Page3 from "./if_else_example/page3";
import { Routes, Route, Link, useNavigate } from "react-router-dom"; // This is used to enable routing in react example (http://localhost:3000/page1)
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
  // return (
  //   // calling the FolderStructure function which is written inside the FolderStructure.js file
  //   <div>
  //     <FolderStructure />
  //   </div>
  // );
  //
  //
  //
  //TODO: From here onwards the ReusingTheStyle example will start
  // return (
  //   // in the bellow table we passing the value during the calling time itself
  //   // in the bellow we first call the first line and control will move to the ReusingTheStyle.js file and perform the operation based on the condition
  //   // after we call the second line  and control will move to the ReusingTheStyle.js file and perform the operation based on the condition
  //   <div>
  //     <ReusingTheStyle name="ASLAM YOUSEPH" colour={true} />
  //     <ReusingTheStyle name="YOUSEPH TM" colour={false} />
  //     <ReusingTheStyle name="ASLAM YOUSEPH" colour={true} />
  //     <ReusingTheStyle name="YOUSEPH TM" colour={false} />
  //   </div>
  // );
  //FIXME: Example for the if ele
  // const [state, setState] = useState("");
  // // it has a problem that when we navigate from one page to another page the route or URL is not changing example: http://localhost:3000/page1
  // let value;
  // if (state == "Page1") {
  //   value = <Page1 />;
  // } else if (state == "Page2") {
  //   value = <Page2 />;
  // } else if (state == "Page3") {
  //   value = <Page3 />;
  // } else {
  //   <h1>Click the correct button</h1>;
  // }
  // return (
  //   <div>
  //     <button onClick={() => setState("Page1")}>Page1</button>
  //     <button onClick={() => setState("Page2")}>Page2</button>
  //     <button onClick={() => setState("Page3")}>Page3</button>
  //     {value}
  //   </div>
  // );
  //TODO: This is the example for the giving routing in react (localhost:3000/page1)
  const navigate = useNavigate();
  return (
    // On this way we where creating the link to navigate from one page to another page
    <div>
      {/* Navigation  linkes we using it insted ot <a href=""></a> tag .*/}
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
      <Link to="/page3">Page3</Link>
      <br />
      <br />
      {/* Navigation Buttons . To use this we need to import useNavigate from react-router-dom and also need to use it const navigate = useNavigate();*/}
      <button onClick={() => navigate("/page1")}>Page1</button>
      <button onClick={() => navigate("/page2")}>Page2</button>
      <button onClick={() => navigate("/page3")}>Page3</button>

      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </div>
  );
}
export default App;
