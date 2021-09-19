import React from "react";
import Input from "../../shared/components/UIComponents/FormsElements/Input";

import "./NewPlaces.css";


const Newplace = ()=>{
    return(
        <form className="place-form">
            <Input element="input" type="text" label="Title" errorText="Enter a valid title" />
        </form>
    );
}

export default Newplace;