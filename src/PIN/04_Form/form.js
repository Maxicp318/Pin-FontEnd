import React from "react";
import Contact from "../Components/Contact/contact";
import './form.scss';

function Form(props){

    return(
        <div className="container_5" id="secc_5">
            <div className="img_5"/>
            <div className="container_form">
                <h2 className="titulo_5">Get in touch<p class="titulo_abajo_otro_color">We are hiring!</p></h2>
                <Contact/>
            </div>
        </div>     
    )
}

export default Form;