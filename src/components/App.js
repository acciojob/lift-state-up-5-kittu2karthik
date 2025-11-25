import React, { useState } from "react";
import Form from './Form'

import "./../styles/App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLoggedIn(){
    setIsLoggedIn((log) => !log)
  }

  return (
    <div>
      {/* Do not remove the main div */}

      {isLoggedIn ? <p>You are logged in!</p> : <Form onLoggedIn={handleLoggedIn} />}
    </div>
  );
};

export default App;
