import React, { useState } from "react";

import UserCreate from "./UserCreate";

const App = () => {
  const [language, setLanguage] = useState("English");

  return (
    <div className="ui container">
      <div>
        Select a language:
        <span onClick={() => setLanguage("English")}>EN</span>
        <span onClick={() => setLanguage("Spanish")}>ES</span>
      </div>

      <UserCreate />
    </div>
  );
};

export default App;
