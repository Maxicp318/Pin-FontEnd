import React from "react";
import Acordeon from "../Components/Acordeon/acordeon";
import './aside.scss';

function Aside(props){

    return(
        <div className="container_4" id="secc_4">
            <div className="img_4"/>
            <aside>
                <Acordeon/>
            </aside>
        </div>                  
    )
}

export default Aside;