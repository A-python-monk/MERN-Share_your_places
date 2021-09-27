import React, { useContext, useState } from "react";

import { useForm } from "../../shared/hooks/form-hook";
import Input from "../../shared/components/UIComponents/FormsElements/Input";
import Button from "../../shared/components/UIComponents/FormsElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import "./auth.css";
import Card from "../../shared/components/UIComponents/Card";
import AuthContext from "../../shared/components/context/auth-context";

const Authorise = () => {
  const [isLogin, setisLogin] = useState(true);
  const auth = useContext(AuthContext);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLogin) {
      setFormData(
        { ...formState.inputs, name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: { value: "", isValid: false },
        },
        false
      );
    }
    setisLogin((prevMode) => !prevMode);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    console.log(auth.isLoggedIn);
    auth.login();
    console.log(auth.isLoggedIn);
  };

  return (
    <Card className="authentication ">
      <h2 className="authentication__header">
        Please {isLogin ? "Login" : "SignUp"}
      </h2>
      <form onSubmit={onSubmitHandler}>
        {!isLogin && (
          <Input
            id="name"
            element="input"
            type="text"
            label="Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Enter Valid name"
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="Email"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
          errorText="Enter Valid Email"
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="text"
          label="Password"
          validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
          errorText="Enter Valid password"
          onInput={inputHandler}
        />
        <Button
          className="authentication__button"
          type="submit"
          disabled={!formState.isValid}
        >
          {isLogin ? "Login" : "SignUp"}
        </Button>
      </form>
      <Button className="authentication__button" onClick={switchModeHandler}>
        Switch to {isLogin ? "SignUp" : "Login"}
      </Button>
    </Card>
  );
};

export default Authorise;
