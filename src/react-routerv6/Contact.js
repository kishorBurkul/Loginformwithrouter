import React from "react";
import { useNavigate } from "react-router-dom";

function Contact(){


    const navigate = useNavigate();

    function gotoService(){

        navigate('/service')
    }

    return(<>
    <h1>Welcome Contact Page</h1>

    <hr/>
<button  onClick={gotoService}> Go to Service Page</button>

    </>)
}

export default Contact