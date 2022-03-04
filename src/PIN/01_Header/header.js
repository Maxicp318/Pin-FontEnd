import React from "react";
import "./header.scss";
import NavBar from "../Components/NavBar/navBar";
import Carousel from "../Components/Carousel/carousel";

function ContainerHeader(props){

    return(
        <div className="Container-Header">
           <NavBar/>
           <Carousel/>
        </div>
    )
}

export default ContainerHeader;