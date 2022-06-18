import React from "react";
import * as M from "@mui/material";
import styled from "styled-components";
export default function Form() {
  return (
    <>
      <M.Box
        width={"25ch"}
        component={FormEstilizado}
        sx={{
          "& .MuiTextField-root": { m: 2, width: "100%" },
        }}
        onSubmit={() => console.log("ok")}
      >
        <M.TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
        />
        <M.TextField
          error
          id="outlined-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />

        <M.TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
        />
        <M.TextField
          error
          id="filled-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />

        <M.Button variant="outlined" type="submit" size="large">
          Cadastrar
        </M.Button>
      </M.Box>
    </>
  );
}
const FormEstilizado = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: inset 0 0 0em, 0 0 1em grey;
  padding: 50px;
  border-radius: 5%;
  input {
    color: #ed9;
  }
`;
