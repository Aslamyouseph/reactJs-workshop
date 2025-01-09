import React from "react";
import { useState } from "react";
function FrondendtoBackend() {
  // creating the useState hooks for each varible
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");

  // creating the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault(); // This is used to prevent the loding the page

    console.log(username, useremail, userpassword);
    //This is used to automatically clear the input after the form submission
    setUsername("");
    setUseremail("");
    setUserpassword("");
  };

  return (
    // when the form submitted then the from data will go to the handleSubmit() function
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Form - Data from FrondendtoBackend</h1>
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={username} // this is used to display the data on the input field
          onChange={(e) => setUsername(e.target.value)} //  this is used to store the input feild value into the the varabile which is defined in the useState
          placeholder="Enter your name"
          required
        />
        <br />
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <br />
        <label for="password">password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={userpassword}
          onChange={(e) => setUserpassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default FrondendtoBackend;
