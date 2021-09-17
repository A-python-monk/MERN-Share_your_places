import React from "react";
import PlaceList from "../components/PlaceList";


const DummyPlaces=[
    {
        id:"p1",
        title:'Effile Tower',
        description:'Tallest tower',
        imageurl:'https://static.toiimg.com/photo/80873764.cms',
        creator:"u1",
        location:{
            lat:48.8584,
            lng:2.2945
        },
        address:"Paris"

    }
];

const UserPlaces = props=>{
    return  <PlaceList items={DummyPlaces}/>;

}

export default UserPlaces;