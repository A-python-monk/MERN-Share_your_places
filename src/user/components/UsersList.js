import React from "react";
import "../components/UsersList";
import "../components/UsersList.css";
import "../components/Useritem";
import UserItem from "../components/Useritem";
import Card from "../../shared/components/UIComponents/Card";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card className="center">
        <h2>NO Users Found</h2>
      </Card>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
