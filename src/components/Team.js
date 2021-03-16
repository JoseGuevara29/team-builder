import React from "react";
import styled from "styled-components";

export default function Team(props) {
  const { details } = props;
  //   console.log(props);

  if (!details) {
    return <h3>Working fetching your Team&apos;s details...</h3>;
  }

  return (
    <DivInputStyled className="team container">
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </DivInputStyled>
  );
}

const DivInputStyled = styled.div`
  margin: 50px auto;
  /* padding: 50px auto; */
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #ededed;
  text-align: center;
`;
