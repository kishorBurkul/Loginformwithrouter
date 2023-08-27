import React from "react";
import { useNavigate } from "react-router-dom";

function About(){

    const navigate= useNavigate()

    function goTo(){

        navigate('/contact')

    }


    return(<>
    <h1>Welcome About Page</h1>
    <button onClick={goTo}>Go to Contact page </button>
    </>)
}

export default About