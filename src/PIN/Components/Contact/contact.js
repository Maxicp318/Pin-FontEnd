import React, {useState} from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import './contact.scss';

function Formulario(){
    const [send, setSend] = useState (false);

    return(
        <div>
            <Formik
                initialValues={{
                    Name:'',
                    Email:'',
                    Phone:'',
                    Message:''
                }}

                validate={(valores) =>{
                    let errs = {};

                    //Validacion del nombre
                    if(!valores.Name){
                        errs.Name = 'Por favor ingrese su nombre'
                    }else if(!/^[a-zA-ZÀ-ÿ/s]{3,40}$/.test(valores.Name)){
                        errs.Name = 'El nombre solo puede contener letras y espacios'
                    }
                    //Validacion del email
                    if(!valores.Email){
                        errs.Email = 'Por favor ingrese su email'
                    }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.Email)){
                        errs.Email = 'Email no valido'
                    }
                    //Validacion del telefono
                    if(!valores.Phone){
                        errs.Phone = 'Por favor ingrese su telefono'
                    }else if(!/^[0-9,$]*$/.test(valores.Phone)){
                        errs.Phone = 'Telefono no valido'
                    }
                    //Validacion del mensaje
                    if(!valores.Message){
                        errs.Message = 'Por favor deje su mensaje'
                    }else if(!/^[\s\S]{0,150}$/.test(valores.Message)){
                        errs.Message = 'Limite de caracter alcanzado'
                    }

                    return errs
                }}

                onSubmit={(valores, {resetForm}) => {
                    resetForm();
                    console.log('Formulario enviado');
                    setSend(true);
                    setTimeout(() => setSend(false), 5000)
                }}
            >
                {({errors}) => (
                    <Form>
                        <div className="form-floating">
                            <Field type="text" className="input form-control" id="Name" name="Name" placeholder="Name"/>
                            <label htmlfor="Name floatingInput">Name</label>
                            <ErrorMessage name="Name" component={() => (<div className="error">{errors.Name}</div>)}/>
                        </div>
                        <div className="form-floating">
                            <Field type="email" className="input form-control" id="Email" name="Email" placeholder="Email"/>
                            <label htmlfor="Email floatingPassword">Email</label>
                            <ErrorMessage name="Email" component={() => (<div className="error">{errors.Email}</div>)}/>
                        </div>
                        <div className="form-floating">
                            <Field type="number" className="input form-control" id="Phone" name="Phone" placeholder="Phone"/>
                            <label htmlfor="Phone floatingPassword">Phone</label>
                            <ErrorMessage name="Phone" component={() => (<div className="error">{errors.Phone}</div>)}/>
                        </div>
                        <div className="form-floating">
                            <Field as="textarea" className="input form-control" id="floatingTextarea2" name="Message" placeholder="Message" style={{height: "90px"}}/>
                            <label htmlfor="floatingTextarea2">Message</label>
                            <ErrorMessage name="Message" component={() => (<div className="error">{errors.Message}</div>)}/>
                          </div>
                        <button className="boton_2" type="submit">Send</button> 
                        {send && <p className="mensaje">Enviado</p>}              
                    </Form>  
                )}
            </Formik>
        </div>           
    )
}

export default Formulario;