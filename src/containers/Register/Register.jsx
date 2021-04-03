import React, { useState } from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MyButton from "../../components/MyButton/MyButton";
import axios from "axios";
import { LOGIN } from "../../redux/types/userTypes";
import { connect } from "react-redux";
import checkError from "../../Utils/Utils";
import Loading from "../../components/Loading/Loading";



const Register = (props) => {

  let history = useHistory();
  const [loading, setLoading] = useState(false);

  const [dataRegister, setRegister] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleState = (event) => {
    setRegister({
      ...dataRegister,
      [event.target.name]: event.target.value,
    });
  };

  const handleResponse = (response) => {

    props.dispatch({ type: LOGIN, payload: response.data });
    
    if (props.order) history.push("/order");
    else history.push("/profile");
  };

  const registrame = async () => {

    setLoading(true);

    const body = {
      name: dataRegister.name,
      lastname: dataRegister.lastname,
      email: dataRegister.email,
      password: dataRegister.password
    };

    setMessage("");
    let errorMessage = checkError(dataRegister);

    setMessage(errorMessage);

    if (errorMessage) {
        setLoading(false);
      return;
    }

    setTimeout(()=>{
        axios.post("http://video-rados-b.herokuapp.com/1/user", body)
        .then(handleResponse)
        .catch((err)=>{
            setLoading(false);
            setMessage("No se ha podido realizar el registro")
        });
    },500);
  };

  return (
    <>
      <Header />
      <Loading visible={loading} />

      <div className="register">
        <div className="registerForm">
          <p className="inputReg">Nombre:</p>{" "} 
          <input className="nameInputReg" type="text" name="name" title="name" lenght="30" onChange={handleState} />
          <p className="inputReg">Apellidos:</p>{" "} 
          <input className="surnameInputReg" type="text" name="lastname" title="lastname" lenght="30" onChange={handleState} />
          <p className="inputReg">Email:</p>{" "}
          <input className="emailInputReg" type="email" name="email" title="email" lenght="30" onChange={handleState} />
          <p className="inputReg">Contraseña:</p>{" "}
          <input className="pwdInputReg" type="password" name="password" title="password" lenght="30" onChange={handleState} />
          <div className="btnReg">
            <MyButton nombre="Darme de alta" action={registrame} />
            <div className='errorMessage parpadea'> {message} </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default connect(state=>({user:state.userReducer, order:state.orderReducer}))(Register);