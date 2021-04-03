import React, {useState, useEffect} from "react";
import "./Header.css";
import MyButton from "../MyButton/MyButton";
import {useHistory} from 'react-router-dom';
import { OmitProps } from "antd/lib/transfer/ListBody";

import { LOGOUT } from "../../redux/types/userTypes.js";
import { connect } from "react-redux";




const Header = (props) => {

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

    const logOut = () => {
        props.dispatch({ type: LOGOUT, payload: {} });
        history.push("/");
    };

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
                        <div classname="logoutIcon" onClick={logOut}> <img alt="logout" /> </div>
                        <MyButton nombre="Entrar" destination="login"/>
                        <MyButton nombre="Registrarse" destination="register"/>
                    </div>
                </div>
            );
        

    // if(){

    //     return (
    //         <div className="header">

    //             <div className="left">
    //                 <div className="logo" onClick={goHome}>
    //                     <p>VIDEO RADOS</p>
    //                 </div>

    //                 <div className="genres">
    //                    <p>Géneros</p> 
    //                 </div>
    //             </div>

    //             <div className="center">
    //                 <input type="search" className="search" placeholder="Buscar..." onChange={(e)=>setQuery(e.target.value)} />
    //             </div>

    //             <div className="right">
    //                 <p className="saludo">Hola, </p><MyButton nombre={props.user?.customer.name} destination="profile" />
    //                 <div classname="logout" onClick={logOut}> <img src={logoutIcon} /> </div>
    //             </div>

    //         </div>
    //     )
    // }else{
    //     return(
    //         <div className="header">
    //             <div className="left">
    //                 <div className="logo" onClick={goHome}>
    //                     <p>VIDEO RADOS</p>
    //                 </div>
    
    //                 <div className="genres">
    //                    <p>Géneros</p> 
    //                 </div>
    //             </div>
    
    //             <div className="center">
    //                 <input type="search" className="search" placeholder="Buscar..." onChange={(e)=>setQuery(e.target.value)} />
    //             </div>
    
    //             <div className="right">
    //                 <MyButton nombre="Entrar" destination="login"/>
    //                 <MyButton nombre="Registrarse" destination="register"/>
    //             </div>
    //         </div>
    //     );
    // }
    
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    };
};

export default connect(mapStateToProps)(Header);