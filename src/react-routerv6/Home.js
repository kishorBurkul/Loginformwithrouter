import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

function Home(){

    return(
    <>
    <Header/>
    <h1>Home Page</h1>
     <Outlet/>
    </>)
}
export default Home
