import React from 'react'
import Header from '../../components/Header/Header';
import MoviePoster from '../../components/MoviePoster/MoviePoster'
import './Home.css'

const Home = () => {
    return (
        <div className='homeDiv'>
            <Header/>
            Vista home del maravilloso mundo de RADOS
            <MoviePoster/>
        </div>
    );
};

export default Home