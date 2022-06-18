import React from "react";
import * as M from "@mui/material";
import styled from "styled-components";
export default function Form() {
  return (
    <FormStyled>
      <M.TextField required id="outlined-required" label="Nome" />
      <M.TextField required id="outlined-required" label="Idade" />
      <M.TextField required id="outlined-required" label="Endereco" />
      <M.TextField required id="outlined-required" label="Endereco" />
      <M.TextField required id="outlined-required" label="Endereco" />
      <M.TextField required id="outlined-required" label="Endereco" />
    </FormStyled>
  );
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
`;
