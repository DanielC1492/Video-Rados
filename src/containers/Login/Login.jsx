import React from "react";
import "./Login.css";
import { useHistory } from 'react-router-dom';
import MyButton from "../../components/MyButton/MyButton";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Login = () => {

    let history = useHistory();

    const direccioname = () => {
        history.push(`/`);
    };

    return (
        <>
        <Header/>
        <div className="login">
            <div className="formLogin">
                <p className="input">Email:</p> <input className='emailInput' placeholder='Correo electrónico' type='email' name='email' title='email' lenght='30'/>
                <p className="input">Contraseña:</p> <input className='pwdInput' placeholder='Contraseña' type='password' name='password' title='password' lenght='30'/>
                <MyButton nombre="Entrar" destino=""/>
            </div>
        </div>
        <Footer/>
        </>
    );

    
};

export default Login;