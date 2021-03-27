import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel';
import './Home.css'
import gif from '../../img/announcement-v2.gif';

const Home = () => {
    return (
        <>
        <Header/>
        <div className='homeDiv'>
            <div className="banner">
                <div className="gif"><img src={gif} alt='Anuncio'/></div>
                <div className="text"><b>¡Atención! Mañana 28/12/1990</b> - Proyección en exclusiva del estreno <b>"Solo en Casa"</b> en nuestro establecimiento de la calle Emilio Baró en Benimaclet. - <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Apúntate aquí</a></div>
            </div>
            
            <h3>Elige una película y prueba ahora nuestro innovador sistema de visionado en línea</h3>
            <h4>Mejor valoradas</h4>
            <MovieCarousel query='toprated=true'/>
            <h4>Más populares</h4>
            <MovieCarousel query='popular=true'/>
            <h4>Comedia</h4>
            <MovieCarousel query='genre=Comedia'/>
            <h4>Drama</h4>
            <MovieCarousel query='genre=Drama'/>
            <div className="spacer"></div>
            
        </div>
        <Footer />
        </>
    );
};

export default Home