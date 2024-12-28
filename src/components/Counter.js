import React, { useEffect } from "react";

//   TODO: The Counter function where defining in here
// function Counter(Props) {
//     return (
//       <div>
//         <h1>counter : {Props.count}</h1>
//       </div>
//     );

// }

// TODO: Destructuring the object in here
// function Counter(Props) {
//   const { count } = Props; // destructuring the props object
//   return (
//     <div>
//       <h1>counter : {count}</h1>
//     </div>
//   );
// }
//
//TODO: Spread operator function

// function Counter(Props) {
//   return (
//     <div>
//       <h1>name1 : {Props.name1}</h1>
//       <h1>name2 : {Props.name2}</h1>
//       <h1>name3 : {Props.name3}</h1>
//     </div>
//   );
// }
//
//
//TODO: Mapping Operations
//
// function Counter(Props) {
//   return (
//     <div>
//       <h1>Employee name : {Props.name}</h1>
//     </div>
//   );
// }
//
//TODO: UseCase another operation
//
// function Counter() {
//   return (
//     <div>
//       <h1>Hello Aslam </h1>
//     </div>
//   );
// }
//
//TODO: useEffect operations .it display when the element appears on the screen

function Counter() {
  useEffect(() => {
    console.log("useEffect Worked! When the element appears on the screen");

    return () => {
      console.log(
        "useEffect Worked! After the element disappears from the screen"
      );
    };
  }, []); // Runs on mount and unmount

  return (
    <div>
      <h1>Hello, I Am Aslam Youseph</h1>
    </div>
  );
}

export default Counter;
