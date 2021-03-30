import React from "react";
import "./Register.css";
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MyButton from "../../components/MyButton/MyButton";


const Register = () => {

    let history = useHistory();

    return (
        <>
        <Header/>
        <div className="register">
            <div className="registerForm">
                <p className="inputReg">Nombre:</p> <input className='nameInputReg' type='text' name='name' title='name' lenght='30'/>
                <p className="inputReg">Apellidos:</p> <input className='surnameInputReg' type='text' name='surname' title='surname' lenght='30'/>
                <p className="inputReg">Email:</p> <input className='emailInputReg' type='email' name='email' title='email' lenght='30'/>
                <p className="inputReg">Contraseña:</p> <input className='pwdInputReg' type='password' name='password' title='password' lenght='30'/>

                <div className="btnReg">
                 <MyButton nombre="Date de alta" />
                </div>
            </div>
            
        </div>
        <Footer/>
        </>
    );
};

export default Register;