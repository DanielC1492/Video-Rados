import React, {useState, useEffect} from "react";
import "./Header.css";
import MyButton from "../MyButton/MyButton";
import {useHistory} from 'react-router-dom';
import { OmitProps } from "antd/lib/transfer/ListBody";
import { connect } from "react-redux";




const Header = (props) => {



    let history = useHistory();

    const [query,setQuery] = useState('');

    const goHome = () => {
        history.push('/')
    }

    const goProfile = () => {
        history.push('/profile')
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

    const genrePath = (genre) => {
        history.push(`/genre/${encodeURI(genre)}`);
    }

    if(props.user?.token !== ""){

        return (
            <div className="header">

                <div className="left">
                    <div className="logo" onClick={goHome}>
                        <p>VIDEO RADOS</p>
                    </div>

                    <div className="genres">
                       <p>Géneros <small>▼</small></p>
                       <div className='dropDown'>
                            <div className='dropLeft'>
                                <p onClick= {() => genrePath('Acción')}>Acción</p>
                                <p onClick= {() => genrePath('Aventura')}>Aventura</p>
                                <p onClick= {() => genrePath('Animación')}>Animación</p>
                                <p onClick= {() => genrePath('Comedia')}>Comedia</p>
                                <p onClick= {() => genrePath('Crimen')}>Crimen</p>
                                <p onClick= {() => genrePath('Documental')}>Documental</p>
                                <p onClick= {() => genrePath('Drama')}>Drama</p>
                                <p onClick= {() => genrePath('Familia')}>Familia</p>
                                <p onClick= {() => genrePath('Fantasía')}>Fantasía</p>
                                <p onClick= {() => genrePath('Historia')}>Historia</p>
                                 
                            </div>
                            <div className="dropRight">
                                <p onClick= {() => genrePath('Terror')}>Terror</p>
                                <p onClick= {() => genrePath('Música')}>Música</p>
                                <p onClick= {() => genrePath('Misterio')}>Misterio</p>
                                <p onClick= {() => genrePath('Romance')}>Romance</p>
                                <p onClick= {() => genrePath('Ciencia ficción')}>Ciencia ficción</p>
                                <p onClick= {() => genrePath('Película de TV')}>Película de TV</p>
                                <p onClick= {() => genrePath('Suspense')}>Suspense</p>
                                <p onClick= {() => genrePath('Bélica')}>Bélica</p>
                                <p onClick= {() => genrePath('Western')}>Western</p>
                            </div>     
                        </div> 
                    </div>
                </div>

                <div className="center">
                    <input type="search" className="search" placeholder="Buscar por título o actor..." onChange={(e)=>setQuery(e.target.value)} />
                </div>

                <div className="right">
                    <p className="saludo" onClick={goProfile}> Hola de nuevo {props.user?.user.name} !  </p>
                </div>

            </div>
        )
    }else{
        return(
            <div className="header">
                <div className="left">
                    <div className="logo" onClick={goHome}>
                        <p>VIDEO RADOS</p>
                    </div>
    
                    <div className="genres">
                       <p>Géneros <small>▼</small></p>
                       <div className='dropDown'>
                            <div className='dropLeft'>
                                <p onClick= {() => genrePath('Acción')}>Acción</p>
                                <p onClick= {() => genrePath('Aventura')}>Aventura</p>
                                <p onClick= {() => genrePath('Animación')}>Animación</p>
                                <p onClick= {() => genrePath('Comedia')}>Comedia</p>
                                <p onClick= {() => genrePath('Crimen')}>Crimen</p>
                                <p onClick= {() => genrePath('Documental')}>Documental</p>
                                <p onClick= {() => genrePath('Drama')}>Drama</p>
                                <p onClick= {() => genrePath('Familia')}>Familia</p>
                                <p onClick= {() => genrePath('Fantasía')}>Fantasía</p>
                                <p onClick= {() => genrePath('Historia')}>Historia</p>
                                 
                            </div>
                            <div className="dropRight">
                                <p onClick= {() => genrePath('Terror')}>Terror</p>
                                <p onClick= {() => genrePath('Música')}>Música</p>
                                <p onClick= {() => genrePath('Misterio')}>Misterio</p>
                                <p onClick= {() => genrePath('Romance')}>Romance</p>
                                <p onClick= {() => genrePath('Ciencia ficción')}>Ciencia ficción</p>
                                <p onClick= {() => genrePath('Película de TV')}>Película de TV</p>
                                <p onClick= {() => genrePath('Suspense')}>Suspense</p>
                                <p onClick= {() => genrePath('Bélica')}>Bélica</p>
                                <p onClick= {() => genrePath('Western')}>Western</p>
                            </div> 
                        </div> 
                    </div>
                </div>
    
                <div className="center">
                    <input type="search" className="search" placeholder="Buscar por título o actor..." onChange={(e)=>setQuery(e.target.value)} />
                </div>
    
                <div className="right">
                    <MyButton nombre="Entrar" destination="login"/>
                    <MyButton nombre="Registrarse" destination="register"/>
                </div>
            </div>
        );
    }
    
};

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    };
};

export default connect(mapStateToProps)(Header);