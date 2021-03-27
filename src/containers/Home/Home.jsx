import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel';
import './Home.css'

const Home = () => {
    return (
        <>
        <Header/>
        <div className='homeDiv'>
            
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