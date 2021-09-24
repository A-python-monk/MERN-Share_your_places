import React, { useEffect } from "react";

import { useParams } from "react-router";
import Button from "../../shared/components/UIComponents/FormsElements/Button";
import Input from "../../shared/components/UIComponents/FormsElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import "./NewPlaces.css";
import Card from "../../shared/components/UIComponents/Card";

const DummyPlaces = [
  {
    id: "p1",
    title: "Effile Tower",
    description: "Tallest tower",
    imageurl: "https://static.toiimg.com/photo/80873764.cms",
    creator: "1",
    location: {
      lat: 48.8584,
      lng: 2.2945,
    },
    address: "Paris",
  },
  {
    id: "p2",
    title: "Eff. Tower",
    description: "Tallest tower",
    imageurl: "https://static.toiimg.com/photo/80873764.cms",
    creator: "u2",
    location: {
      lat: 48.8584,
      lng: 2.2945,
    },
    address: "Paris",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const identifiedPlace = DummyPlaces.find((p) => p.id === placeId);
  const UpdatePlaceSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };
  useEffect(
    () => {
      if(identifiedPlace){
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      },
      true
    );}
  }, [setFormData, identifiedPlace]
  );

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
        <h2>Could not find the place</h2>
        </Card>
      </div>
    );
  }

  return (
    formState.inputs.title.value && (
      <form className="place-form" onSubmit={UpdatePlaceSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Enter Valid title"
          onInput={inputHandler}
          value={formState.inputs.title.value}
          valid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Enter Valid desciption "
          onInput={inputHandler}
          value={formState.inputs.description.value}
          valid={formState.inputs.description.isValid}
        />
        {/*       <Input
        id="address"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Enter Valid address "
        onInput={}
        value = {indentifiedPlace.description}
        valid = {true}
      /> */}

        <Button type="submit" disabled={!formState.isValid}>
          UpdatePlace
        </Button>
      </form>
    )
  );
};

export default UpdatePlace;
