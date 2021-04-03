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

    const genrePath = (genre) => {
        history.push(`/genre/${encodeURI(genre)}`);
    }

    return(
        <div className="header">
            <div className="left">
                <div className="logo" onClick={goHome}>
                    <p>VIDEO RADOS</p>
                </div>

                <div className="genres">
                   <p>Géneros</p>
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