import React, { useCallback, useReducer } from "react";
import Button from "../../shared/components/UIComponents/FormsElements/Button";
import Input from "../../shared/components/UIComponents/FormsElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import "./NewPlaces.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid || action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const Newplace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      value: "",
      isValid: false,
    },
    description: {
      value: "",
      isValid: false, 
    },
    isValid: false,
  });
  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  return (
    <form className="place-form">

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
    <Button type="submit" disabled = {!formState.isValid}> 
    ADD PLACE
    </Button> 
    </form>
  );
};

export default Newplace;
