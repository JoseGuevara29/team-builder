import "./App.css";
import React, { useState } from "react";
import TeamForm from "./components/TeamForm";

function App() {
  const initialValue = {
    ///// TEXT INPUTS /////
    name: "John Doe",
    ///// TEXT INPUTS /////
    email: "john.doe@gmail.com",
    ///// DROPDOWN /////
    role: "Front End Engineer",
    ///// TEXT INPUTS /////
    salary: "60,000",
  };
  const [teamMember, setTeamMember] = useState(initialValue);

  return (
    <div className="App">
      <TeamForm teamMember={teamMember} />
    </div>
  );
}

export default App;

//what is the point of usestate when you can use a regular variable
