import React from "react";
import "./Header.css";
import MyButton from "../MyButton/MyButton";
import {useHistory} from 'react-router-dom';

const Header = () => {

    let history = useHistory();

    const goHome = () => {
        history.push('/')
    }

    return(
        <div className="header">
            <div className="left">
                <div className="logo" onClick={goHome}>
                    <p>VIDEO RADOS</p>
                </div>

                <div className="genres">
                   <p>Géneros</p> 
                </div>
            </div>

            <div className="center">
                <input type="search" className="search" placeholder="Buscar..." />
            </div>

            <div className="right">
                <MyButton nombre="Entrar"/>
                <MyButton nombre="Registrarse"/>
            </div>
        </div>
    );

};

export default Header;