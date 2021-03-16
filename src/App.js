import "./App.css";
import React, { useState } from "react";
import TeamForm from "./components/TeamForm";
import Team from "./components/Team";

function App() {
  const initialValue = {
    ///// TEXT INPUTS /////
    username: "",
    ///// TEXT INPUTS /////
    email: "",
    ///// DROPDOWN /////
    role: "",
  };
  const [team, setTeam] = useState([]);
  const [teamMember, setTeamMember] = useState(initialValue);

  const updateForm = (inputName, inputValue) => {
    setTeamMember({ ...teamMember, [inputName]: inputValue });
  };
  const submitForm = () => {
    const newTeam = {
      id: Date.now(),
      username: teamMember.username,
      email: teamMember.email,
      role: teamMember.role,
    };

    setTeam([...team, newTeam]);
    setTeamMember(initialValue);
  };
  console.log(teamMember);
  return (
    <div className="App">
      <TeamForm values={teamMember} update={updateForm} submit={submitForm} />
      {team.map((team) => {
        return <Team key={team.id} details={team} />;
      })}
    </div>
  );
}

export default App;
