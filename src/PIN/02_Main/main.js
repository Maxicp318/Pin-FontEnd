import React from "react";
import Secc2 from "../Components/About/about";
import Secc3 from "../Components/Products/products";
import './main.scss';

function Main(props){

    return(
        <main className="Main-Container">
            <Secc2/>
            <Secc3/>                                 
        </main>
    )
}

export default Main;