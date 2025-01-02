import React from "react";
import "./ReusingTheStyle.css";
function ReusingTheStyle(props) {
  //   console.log(props);
  return (
    // using the conditional operator to check the conditioin and based on the condition the style is implementing .
    <div>
      <h1 className={props.colour ? "firstStyle" : "secondStyle"}>
        This example demonstrates reusing styles and components. NAME:
        {props.name}
      </h1>
    </div>
  );
}

export default ReusingTheStyle;
