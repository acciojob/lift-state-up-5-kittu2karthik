import React, { useState } from "react";

function Form({ onLoggedIn }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    if (userName && password) {
      onLoggedIn();
    }
  }

  return (
    <form>
      <Label
        type="text"
        label="Username"
        state={userName}
        onChange={handleUserName}
      />
      <Label
        type="password"
        label="Password"
        state={password}
        onChange={handlePassword}
      />
      <button onClick={handleClick}>Login</button>
    </form>
  );
}

function Label({ type, label, state, onChange }) {
  return (
    <div>
      <label htmlFor={label}>{label} </label>
      <input type={type} id={label} value={state} onChange={onChange} />
    </div>
  );
}

export default Form;
