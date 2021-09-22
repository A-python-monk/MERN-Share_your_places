import React, { useReducer, useEffect } from "react";

import { validate } from "../../../util/validators";
import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };

    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouched: false,
  });

  const {id,onInput} = props;
  const{value,isValid} = inputState;
  useEffect(() => {
    onInput(id,value,isValid);
  }, [id,value,isValid,onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const ontouchHandler = (event) => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={ontouchHandler}
        value={inputState.value}
      ></input>
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={ontouchHandler}
        value={inputState.value}
      ></textarea>
    );
  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.label}>
        {props.label}
        {element}
        {!inputState.isValid && inputState.isTouched && (
          <p> {props.errorText}</p>
        )}
      </label>
    </div>
  );
};

export default Input;
