import React from "react";
import "./Header.css";
import MyButton from "../MyButton/MyButton";

const Header = () => {

    return(
        <div className="header">
            <div className="left">
                <div className="logo">
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