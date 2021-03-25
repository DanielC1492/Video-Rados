import React from 'react';
import './Movie.css';
import {useHistory} from 'react-router-dom';
import MyButton from '../../components/MyButton/MyButton';


const Movie = () => {

    //  const history = useHistory();


    return (
        <div className='movieContainer'>
            <div className='midLeft'>
                <div className='midLeftTop'>
                    <div className='trailer'>TRAILER</div>
                </div>  
                <div className='midLeftBot'>
                    <div className='movieTitle'>Titulo pelicula</div>
                    <div className='ratingStars'>estrellitas de votar</div>
                    <div className='synopsis'>sinopsis</div>
                </div>  
            </div>
            <div className='midRight'>
                <div className='midRightTop'>
                    
                    <div className='poster'></div>
                    <div className='movieInfo'>
                        <div className='movieName'>Nombre:Federico y el trono del metal</div>
                        <div className='genre'>Géneros:Suspense,Policiaca</div>
                        <div className='director'>Director:Federico Baez Morandi</div>
                    </div>
                    
                </div>
                <div className='midRightBot'>
                    <div className='rentButton'><MyButton/></div>
                </div>
            </div>
            
            
            
           
            
        </div>
    )
}

export default Movie

