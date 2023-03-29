import React from "react";
import "./Signup.css";
import { useState } from "react";
const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    //when stored value//
    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    // to avoid automatically reload the page//
    e.preventDefault();
    const { username, email, password, confirmpassword } = user; //destructuring//
    const resp = await fetch("/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        confirmpassword,
      }),
    });
    const data = await resp.json();
    if (resp.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("registeration successful");
     
    }
  };
  return (
    <form style={{ marginTop: "7%" }} method="POST">
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <fieldset className="fieldset">
        <br />
        <input
          className="input"
          type="text"
          name="username"
          id="username"
          value={user.name}
          onChange={handleInputs}
          placeholder="Username"
          required
        />
        <br />
        <br />
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          value={user.name}
          onChange={handleInputs}
          placeholder="E-mail"
          required
        />
        <br />
        <br />
        <input
          className="input"
          type="password"
          name="password"
          id="password"
          pattern=".{8,}"
          required
          title="8 characters minimum"
          value={user.name}
          onChange={handleInputs}
          placeholder="Password"
        />
        <br />
        <br />
        <input
          className="input"
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          value={user.name}
          onChange={handleInputs}
          placeholder="Confirm Password"
          required
        />
        <span id="messages"></span>
        <br />
        <br />
        <button class="btn btn-warning" type="submit" onClick={postData}>
          Submit
        </button>
      </fieldset>
    </form>
  );
};
export default Signup;