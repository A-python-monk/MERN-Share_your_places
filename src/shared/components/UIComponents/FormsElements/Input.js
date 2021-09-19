import React ,{useReducer} from "react";

import "./Input.css";


const inputReducer = (state , action)=>{
    switch(action.type){
        case "CHANGE" :return {
            ...state,
            value:action.val,
            isValid:true,
        };
        default:return state;
    }

}

const Input = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer , {value:"", isValid:false});

    const changeHandler = event=>{
        dispatch({type:'CHANGE' ,val:event.target.value});
    };
    const element =
    props.element === "input" ? (
      <input id={props.id} placeholder={props.placeholder} value={inputState.value}></input>
    ) : (
      <textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} value={inputState.value}></textarea>
    );
  return (
    <div className={`form-control ${!inputState.isValid && 'form-control--invalid'}`}>
      <label htmlFor={props.label}>{props.label}
      {element} 
      {!inputState.isValid && <p> {props.errorText}</p>}
      </label>
    </div>
  );
};

export default Input;