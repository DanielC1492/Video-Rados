import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MovieCarousel from '../../components/MovieCarousel/MovieCarousel';
import './Home.css'

const Home = () => {
    return (
        <div className='homeDiv'>
            <Header/>
            Vista home del maravilloso mundo de RADOS
            <MovieCarousel query='toprated=true'/>
            <Footer />
        </div>
    );
};

export default Home