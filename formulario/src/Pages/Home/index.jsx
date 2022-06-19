import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
export default function Home() {
  let { id } = useParams();
  return (
    <Div>
      Bem Vindo, {id}!
      <div>
        <button>
          <Link to="/">Voltar</Link>
        </button>
      </div>
    </Div>
  );
}
const Div = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 80px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  background-image: url("https://c.pxhere.com/images/28/2b/d43d6b9ff4d3dd760fa08e28475d-1451231.jpg!d");
  div {
    text-align: end;
  }
  button {
    box-shadow: inset 0 0 0em, 0 0 1em grey;
    background-color: #cecece;
    padding: 10px;
    border-radius: 10px;
    border: none;
    margin-left: 10px;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bolder;
    a {
      text-decoration: none;
      color: black;
    }
  }
`;
