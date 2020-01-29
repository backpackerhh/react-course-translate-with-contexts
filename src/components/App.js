import React, { useState } from "react";

import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";

const App = () => {
  const [language, setLanguage] = useState("English");

  return (
    <div className="ui container">
      <div>
        Select a language:
        <span onClick={() => setLanguage("English")}>EN</span>
        <span onClick={() => setLanguage("Spanish")}>ES</span>
      </div>

      <LanguageContext.Provider value={language}>
        <UserCreate />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
