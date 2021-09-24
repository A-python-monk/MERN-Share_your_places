import React from "react";
import Button from "../../shared/components/UIComponents/FormsElements/Button";
import Input from "../../shared/components/UIComponents/FormsElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import "./NewPlaces.css";

const Newplace = () => {
 const [formState,inputHandler] =  useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      isValid: false,
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Enter a valid title"
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        label="Description"
        onInput={inputHandler}
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Enter a valid Description (Enter Minmum 5 characters)"
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        onInput={inputHandler}
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Enter a valid Address"
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default Newplace;
