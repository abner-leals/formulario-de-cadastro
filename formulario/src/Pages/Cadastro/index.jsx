import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as RouterDom from "react-router-dom";
import * as M from "@mui/material";

export default function Register({ setCadastro, cadastro }) {
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Campo obrigatório!")
      .min(3, "Minimo de 3 caracters"),

    email: yup
      .string()
      .required("Campo obrigatório!", true)
      .email("Email invalido", true),

    password: yup
      .string()
      .required("Campo obrigatório!")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter no mínimo uma letra maiúscula, uma minúscula, um numero e um caracter especial!"
      ),
    comfirmPassword: yup
      .string()
      .required("Campo obrigatório!")
      .oneOf([yup.ref("password")], "A senha digitada difere da anterior!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let history = RouterDom.useHistory();
  function singUp(data) {
    console.log(data);
    history.push(`/success/${data.username}`);
  }

  return (
    <FormularioEstilizado onSubmit={handleSubmit(singUp)}>
      <label>
        <input
          type="text"
          placeholder="Nome de usuário *"
          {...register("username")}
        />
        {errors.username && (
          <span className="error"> {errors.username.message}</span>
        )}
      </label>

      <label>
        <input type="text" placeholder="Email *" {...register("email")} />
        {errors.email && <span className="error"> {errors.email.message}</span>}
      </label>

      <label>
        <input
          type="password"
          placeholder=" Senha *"
          {...register("password")}
          title={"Senha"}
        />
        {errors.password && (
          <span className="error"> {errors.password.message}</span>
        )}
      </label>
      <label>
        <input
          type="password"
          placeholder=" Confime a Senha *"
          {...register("comfirmPassword")}
        />
        {errors.comfirmPassword && (
          <span className="error"> {errors.comfirmPassword.message}</span>
        )}
      </label>

      <button type="submit">Create Account</button>
    </FormularioEstilizado>
  );
}
////////////////////////////////////////////////////////////Estilos\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
export const FormularioEstilizado = styled.form`
  padding: 30px;
  width: 95vw;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 20px;
  box-shadow: inset 0 0 0em, 0 0 1em grey;
  box-sizing: border-box;
  label {
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 90%;
    padding: 10px;
    span {
      color: #910820;
      font-size: 12px;
    }
    input {
      width: 100%;
      box-shadow: inset 0 0 0em, 0 0 1em grey;
      padding: 10px;
      border-radius: 10px;
    }
  }
  div {
    display: flex;
    input {
      max-width: 120px;
    }
  }
  span {
    padding: 10px;
    width: 310px;
  }
  button {
    box-shadow: inset 0 0 0em, 0 0 1em grey;
    background-color: #cecece;
    padding: 10px;
    border-radius: 10px;
    border: none;
    margin-left: 10px;
  }
`;
