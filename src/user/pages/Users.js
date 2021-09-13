import React from "react";
//import UserItem from "../components/Useritem";
import UserList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "1",
      name: "shubham",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      places: 2,
    },
    {
      id: "2",
      name: "shubham raj",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      places:100 ,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
