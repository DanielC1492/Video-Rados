import React, {useState, useEffect} from "react";
import "./Header.css";
import MyButton from "../MyButton/MyButton";
import {useHistory} from 'react-router-dom';

const Header = () => {

    let history = useHistory();

    const [query,setQuery] = useState('');

    const goHome = () => {
        history.push('/')
    }

    const search = () => {
        if (query != '') history.push(`/search/${encodeURI(query)}`);
    }

    useEffect(()=>{
        const listener = event => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                search();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    },[query]);

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
                <input type="search" className="search" placeholder="Buscar..." onChange={(e)=>setQuery(e.target.value)} />
            </div>

            <div className="right">
                <MyButton nombre="Entrar" destination="login"/>
                <MyButton nombre="Registrarse" destination="register"/>
            </div>
        </div>
    );

};

export default Header;