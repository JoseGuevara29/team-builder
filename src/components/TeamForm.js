import React from "react";
import styled from "styled-components";

export default function TeamForm(props) {
  //   console.log(props.teamMember.email);
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };
  const onSubmit = (evt) => {
    evt.preventDefault();

    submit();
  };
  return (
    <FormStyled className="form-container" onSubmit={onSubmit}>
      <DivInputStyled calssName="form-inputs">
        <LabelStyled>
          Username
          <input
            type="text"
            value={values.username}
            placeholder="Username"
            name="username"
            maxLength="30"
            onChange={onChange}
          />
        </LabelStyled>
        <LabelStyled>
          Email
          <input
            type="email"
            value={values.email}
            placeholder="Email"
            name="email"
            maxLength="50"
            onChange={onChange}
          />
        </LabelStyled>
        <LabelStyled>
          Role
          <select name="role" onChange={onChange} value={values.role}>
            <option>Select one</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Defveloper</option>
          </select>
        </LabelStyled>
        <SubmitDivStyled>
          <button className="submit">Submit</button>
        </SubmitDivStyled>
      </DivInputStyled>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  background-color: #d9d9d9;
  height: 700px;
`;
const DivInputStyled = styled.div`
  margin: 50px auto;
  /* padding: 50px auto; */
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #ededed;
`;
const LabelStyled = styled.label`
  margin: 20px auto;
`;

const SubmitDivStyled = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
`;
