import Login from "./pages/Login";
import NewMatch from "./pages/NewMatch";
import NewStudent from "./pages/NewStudent";

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/newstudent" exact element={<NewStudent />}></Route>
          <Route path="/NewMatch" exact element={<NewMatch />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
