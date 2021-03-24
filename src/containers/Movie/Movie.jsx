import React from 'react';
import './Movie.css';
import {useHistory} from 'react-router-dom';
import MyButton from '../../components/MyButton/MyButton';


const Movie = () => {

    //  const history = useHistory();


    return (
        <div className='movieContainer'>
            <div className='midLeft'>
                <div className='trailer'></div>
                <div className='movieTitle'></div>
                <div className='ratingStars'></div>
                <div className='synopsis'></div>
            </div>
            <div className='midRight'>
                <div className='midTop'>
                    <div className='movieInfo'>
                        <div className='movieName'>Federico y el trono del metal</div>
                        <div className='genre'>Suspense,Policiaca</div>
                        <div className='director'>Federico Baez Morandi</div>
                    </div>
                    <div className='poster'></div>
                    
                </div>
                <div className='midBot'>
                    <div className='rentButton'><MyButton/></div>
                </div>
            </div>
            
            
            
           
            
        </div>
    )
}

export default Movie

