import React from "react";
import Header from "./01_Header/header";
import Main from "./02_Main/main";
import Aside from "./03_Aside/aside";
import Form from "./04_Form/form";
import Footer from "./05_Footer/footer";
import "./index.scss";

function ContainerPin(props){

    return(
        <div className="index">
           <Header/>
           <Main/>
           <Aside/>
           <Form/>
           <Footer/>
        </div>
    )
}

export default ContainerPin;