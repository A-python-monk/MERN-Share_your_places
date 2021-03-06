import React from "react";

import Card from "../../shared/components/UIComponents/Card";
import Button from "../../shared/components/UIComponents/FormsElements/Button";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found. Create one!</h2>
          <Button to="/places/new" > Share Places</Button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageurl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorid={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
