import React from "react";
import "./Header.css";
import MyButton from "../MyButton/MyButton";

const Header = () => {

    return(
        <div className="header">
            <div className="left a">
                <div className="logo">
                    <p>VIDEO RADOS</p>
                </div>

                <div className="genres">
                   <p>Géneros</p> 
                </div>
            </div>

            <div className="center a">
                <input type="search" className="search" placeholder="Buscar..." />
            </div>

            <div className="right a">
                <MyButton nombre="Entrar"/>
                <MyButton nombre="Registrarse"/>
            </div>
        </div>
    );

};

export default Header;