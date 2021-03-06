import React, {useState, useEffect} from "react";
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
    
    const cred = props.user;
    if (cred.user?._id)
    if (cred.user?.role == 'Admin') history.push('/admin')
    else history.push('/profile');

    const [credentials, setCredentials] = useState({email:'',password:''});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const updateCredentials = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    useEffect(()=>{
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                logueame();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    },[credentials]);

    const logueame = async () => {

        setLoading(true);

        const body = {
            email: credentials.email,
            password: credentials.password
          };

        setMessage("");
        let errorMessage = checkError(credentials);    
        
        setMessage(errorMessage);

        if (errorMessage) {
            setLoading(false);
          return;
        }

        setTimeout(()=>{
            axios.post("https://video-rados-b.herokuapp.com/1/user/login", body)
            .then(handleResponse)
            .catch((err)=>{
                setLoading(false);
                setMessage("No se ha podido realizar el logueo")
            });
        },500);

    };

    const handleResponse = (response) => {
        if (response.status == 200) {
            props.dispatch({type:LOGIN,payload:response.data});
            if (props.order) history.push('/order');
            else if (response.data.user.role == 'Admin') history.push('/admin');
            else history.push('/profile');
        } else {
            setLoading(false);
        }
    }

    return (
        <>
        <Loading visible={loading}/>
        <Header/>
        <div className="login">
            <div className="formLogin">
                <p className="input">Email:</p> <input className='emailInput' type='email' name='email' title='email' onChange={updateCredentials} lenght='30'/>
                <p className="input">Contrase??a:</p> <input className='pwdInput' type='password' name='password' title='password' onChange={updateCredentials} lenght='30'/>
                <div className="btnLog">
                    <MyButton nombre="Entrar"  action={logueame}/>
                    <div className='errorMessage parpadea'> {message} </div>
                    <p className="pregunta" onClick={() => history.push("/register")}> ??Todavia no est??s dado de alta? Registrate aqu?? !</p>

                </div>                
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default connect(state=>({user:state.userReducer, order:state.orderReducer}))(Login);