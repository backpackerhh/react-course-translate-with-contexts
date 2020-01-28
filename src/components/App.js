import React, { useState } from "react";

const App = () => {
  const [language, setLanguage] = useState("English");

  return (
    <div className="ui container">
      <div>
        Select a language:
        <span onClick={() => setLanguage("English")}>EN</span>
        <span onClick={() => setLanguage("Spanish")}>ES</span>
      </div>
    </div>
  );
};

export default App;
