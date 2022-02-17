import React from "react";
import Formulario from "../Components/Formulario/formulario";
import './form.scss';
import Globos from '../public/img/globos.png';

function Form(props){

    return(
        <div className="container_5" id="secc_5">
            <img className="img_5" src={Globos} alt="Globos herostaticos"/>
            <div className="container_form">
                <h2 className="titulo_5">Get in touch<p class="titulo_abajo_otro_color">We are hiring!</p></h2>
                <Formulario />
            </div>
        </div>     
    )
}

export default Form;