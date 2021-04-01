import React, { useState } from "react";
import "./Register.css";
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import MyButton from "../../components/MyButton/MyButton";
import axios from 'axios';
import { REGISTER } from '../../redux/types/userTypes';
import { connect } from 'react-redux';
import  checkError  from '../../Utils/Utils';



const Register = (props) => {

    let history = useHistory();

    const [dataRegister, setRegister] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    });

    const [message,setMessage] = useState('');

    const handleState = (event) => {
        setRegister({
            ...dataRegister,
            [event.target.name]:
            event.target.type === "number"
            ? +event.target.value
            : event.target.value,
        });
    };

    const registrame = async () => {

        const body = {
            name: dataRegister.name,
            surname: dataRegister.surname,
            email: dataRegister.email,
            password: dataRegister.password
        };

        setMessage('');
        let errorMessage = checkError(dataRegister);

        setMessage(errorMessage);

        if(errorMessage){
            return;
        }

        let result = await axios.post("video-rados-b.heroku.com/1/user", body);
        console.log(result);

        props.dispatch({
            type: REGISTER,
            payload: result
        });

        return setTimeout(() => {
            history.push('/login')
        }, 1000);
    };

    return (
        <>
        <Header/>
        <div className="register">
            <div className="registerForm">
                <p className="inputReg">Nombre:</p> <input className='nameInputReg' type='text' name='name' title='name' lenght='30' onChange={handleState}/>
                <p className="inputReg">Apellidos:</p> <input className='surnameInputReg' type='text' name='surname' title='surname' lenght='30' onChange={handleState}/>
                <p className="inputReg">Email:</p> <input className='emailInputReg' type='email' name='email' title='email' lenght='30' onChange={handleState}/>
                <p className="inputReg">Contraseña:</p> <input className='pwdInputReg' type='password' name='password' title='password' lenght='30' onChange={handleState}/>

                <div className="btnReg">
                    <button className='btnRegister' type='submit' onClick={registrame}>Darme de alta</button>
                </div>
            </div>
            
        </div>
        <Footer/>
        </>
    );
};

export default connect()(Register);