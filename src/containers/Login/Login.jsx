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
import checkError from "../../Utils/Utils";


const Login = (props) => {
    
    let history = useHistory();
    // const [loading, setLoading] = useState(false);

    const [dataLogin, setLogin] = useState({
        email: "",
        password: ""
      });

    const [message, setMessage] = useState("");

    const handleState = (event) => {
        setLogin({
          ...dataLogin,
          [event.target.name]: event.target.value,
        });
      };

    const logueame = async () => {

        setLoading(true);

        const body = {
            email: dataLogin.email,
            password: dataLogin.password
          };

        setMessage("");
        let errorMessage = checkError(dataLogin);    
        
        setMessage(errorMessage);

        if (errorMessage) {
            setLoading(false);
          return;
        }

        setTimeout(()=>{
            axios.post("http://video-rados-b.herokuapp.com/1/login", body)
            .then(handleResponse)
            .catch((err)=>{
                setLoading(false);
                setMessage("No se ha podido realizar el logueo")
            });
        },500);

    };

    
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
            if (props.order) history.push('/order');
            else if (response.data.user.role == 'Admin') history.push('/admin');
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
                <p className="input">Email:</p> <input className='emailInput' type='email' name='email' title='email' onChange={updateCredentials} lenght='30'/>
                <p className="input">Contraseña:</p> <input className='pwdInput' type='password' name='password' title='password' onChange={updateCredentials} lenght='30'/>
                <MyButton nombre="Entrar" onClick={logueame} action={submit}/>
                <div className='errorMessage'> {message} </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default connect(state=>({user:state.userReducer, order:state.orderReducer}))(Login);