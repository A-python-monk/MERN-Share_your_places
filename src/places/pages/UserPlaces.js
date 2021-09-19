import React from "react";

import { useParams } from "react-router";
import PlaceList from "../components/PlaceList";


const DummyPlaces=[
    {
        id:"p1",
        title:'Effile Tower',
        description:'Tallest tower',
        imageurl:'https://static.toiimg.com/photo/80873764.cms',
        creator:"1",
        location:{
            lat:48.8584,
            lng:2.2945
        },
        address:"Paris"

    },
    {
        id:"p1",
        title:'Effile Tower',
        description:'Tallest tower',
        imageurl:'https://static.toiimg.com/photo/80873764.cms',
        creator:"u2",
        location:{
            lat:48.8584,
            lng:2.2945
        },
        address:"Paris"

    }
];

const UserPlaces = props=>{
    const userid= useParams().userid;
    const loadedPlaces = DummyPlaces.filter(place=>place.creator===userid);
    return  <PlaceList items={loadedPlaces}/>;

}

export default UserPlaces;