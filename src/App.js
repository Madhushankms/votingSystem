import AdminReg from "./pages/AdminReg";
import CandidateList from "./pages/CandidateList";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import NewMatch from "./pages/NewMatch";
import NewStudent from "./pages/NewStudent";
import PartyList from "./pages/PartyList";
import AdminList from "./pages/AdminList";

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Profile from "./pages/Profile";
import VoterReg from "./pages/VoterReg";
import VoterList from "./pages/VoterList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/dashboard" exact element={<DashBoard />}></Route>
          <Route
            path="/candidatelist"
            exact
            element={<CandidateList />}
          ></Route>
          <Route path="/newcandidate" exact element={<NewStudent />}></Route>
          <Route path="/newparty" exact element={<NewMatch />}></Route>
          <Route path="/partylist" exact element={<PartyList />}></Route>
          <Route path="/adminreg" exact element={<AdminReg />}></Route>
          <Route path="/adminlist" exact element={<AdminList />}></Route>
          <Route path="/profile" exact element={<Profile />}></Route>
          <Route path="/newvoter" exact element={<VoterReg />}></Route>
          <Route path="/voterlist" exact element={<VoterList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
