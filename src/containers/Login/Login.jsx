import React, {useState} from "react";
import "./Login.css";
import { useHistory } from 'react-router-dom';
import MyButton from "../../components/MyButton/MyButton";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {connect} from 'react-redux';
import {LOGIN} from '../../redux/types/userTypes'
import Loading from "../../components/Loading/Loading";
import axios from 'axios';

const Login = (props) => {

    let history = useHistory();
    
    const cred = props.user;
    if (cred.user?._id)
    if (cred.user?.role == 'Admin') history.push('/admin')
    else history.push('/profile');

    const [credentials, setCredentials] = useState({email:'',password:''});
    const [loading, setLoading] = useState(false);

    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const submit = async () => {
        setLoading(true);
        setTimeout(()=>{
            axios.post('http://video-rados-b.herokuapp.com/1/user/login',credentials)
            .then(handleResponse)
            .catch((err)=>{
                setLoading(false);
                console.log(err.message)
            });
        },500);
    }

    const handleResponse = (response) => {
        if (response.status == 200) {
            props.dispatch({type:LOGIN,payload:response.data});
            if (response.data.user.role == 'Admin') history.push('/admin');
            else history.push('/profile');
        } else {
            setLoading(false);
            console.log(response.data.message);
        }
    }

    return (
        <>
        <Loading visible={loading}/>
        <Header/>
        <div className="login">
            <div className="formLogin">
                <p className="input">Email:</p> <input className='emailInput' placeholder='Correo electrónico' type='email' name='email' title='email' onChange={updateCredentials} lenght='30'/>
                <p className="input">Contraseña:</p> <input className='pwdInput' placeholder='Contraseña' type='password' name='password' title='password' onChange={updateCredentials} lenght='30'/>
                <MyButton nombre="Entrar" action={submit}/>
            </div>
        </div>
        <Footer/>
        </>
    );

    
};

export default connect(state=>({user:state.userReducer}))(Login);