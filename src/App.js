import React from "react";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <LoginPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
