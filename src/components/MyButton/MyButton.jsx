
import React from 'react';
import './MoviePoster.css';

const MoviePoster = (props) => {

    // const history = useHistory();



    return (
        <div className='posterContainer'>
           <div className='posterDiv'>
               <img className='posterImage' src='https://i.pinimg.com/originals/5d/24/59/5d245987e8fd014b24ff6bf99808960a.jpg'></img>
           </div>
           <div className='posterDiv'>
           <img className='posterImage' src='https://static.posters.cz/image/750/poster/avengers-endgame-journey-s-end-i73600.jpg'></img>
           </div>
           <div className='posterDiv'>
           <img className='posterImage' src='https://images-na.ssl-images-amazon.com/images/I/41rG0YoMJXL._AC_.jpg'></img>
           </div>
        </div>
    )
}


export default MoviePoster

