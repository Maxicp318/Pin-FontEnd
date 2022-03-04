import React from "react";
import About from "../Components/About/about";
import Products from "../Components/Products/products";
import "./main.scss";

function ContainerMain(props){

    return(
        <div className="Container-Main">
           <About/>
           <Products/>
        </div>
    )
}

export default ContainerMain;import React from "react";