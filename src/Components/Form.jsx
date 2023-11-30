import React, { useState } from "react";
import Input from './Input';


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const nameRegex = /^(?=.{6,}$)[a-zA-Z]+ [a-zA-Z]+$/;

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;

  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {


    if (name === "") {
      setNameError("Your name is required")
      return;
    }

    if (email === "") {
      setEmailError("Your email is required")
      return;
    }

    setSuccessMessage(`Gracias ${name} , te contactaremos cuando antes vía mail`)

  }


  return (
    <>
      <Input
        regex={nameRegex}
        errorMessage="Por favor, ingrese un nombre y un apellido válidos (sin caracteres especiales, números o múltiples espacios)."
        value={name}
        setValue={setName}
        error={nameError}
        setError={setNameError}
        placeholder='Ingrese su nombre y apellido'
        tittle='Nombre y Apellido' />

      <Input
        regex={emailRegex}
        errorMessage="Debe Ingresar un email Valido"
        value={email}
        setValue={setEmail}
        error={emailError}
        setError={setEmailError}
        placeholder='Ingrese su email'
        tittle='Email' />

      <button onClick={() => validate()} className="button-form" >Enviar</button>
      {successMessage !== "" ? (<div> {successMessage}</div>) : null}

    </>

  )
};
export default Form;
