import React, {useState, useEffect} from "react";
import axios from "axios";
import Form from "../Components/Form/form";
import Globos from "../public/img/globos.png";
import './formulario.scss';

function Formulario(props){
    const [Data, setData] = useState ({Name:'', Email:'', Phone:'', Message:''})
    
    const disable = !Data.Name.length && !Data.Email.length && !Data.Phone.length && !Data.Message.length
    
    function handleChangeName (event){
        const newData = {...Data}
        newData.Name = event.target.value
        setData(newData)
    }

    function handleChangeEmail (event){
        setData({...Data, Email: event.target.value})
    }

    
    function handleChangePhone (event){
        setData({...Data, Phone: event.target.value})
    }

    function handleChangeMessage (event){
        setData({...Data, Message: event.target.value})
    }
    
    function handleSend(event){
        event.preventDefault()
        axios.post("http://localhost:8000/api/form-save",Data).then(response=>{
            console.log(response)
            setData({Name:'', Email:'', Phone:'', Message:''})
        }).catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className="container_5" id="secc_5">   
            <img className="img_5" src={Globos} alt="Globos herostaticos"/>    
            <div className="container_form">    
            <h2 className="titulo_5">Get in touch<p class="titulo_abajo_otro_color">We are hiring!</p></h2>   
            <Form disable={disable} Data={Data} handleSend={handleSend} handleChangeName={handleChangeName} handleChangePhone={handleChangePhone} handleChangeEmail={handleChangeEmail} handleChangeMessage={handleChangeMessage}/> 
            </div>  
        </div>
    )
}

export default Formulario;