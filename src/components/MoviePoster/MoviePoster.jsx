
import React from 'react';
import './MoviePoster.css';

const MoviePoster = (props) => {

    return (
           <div className='posterDiv' onClick={()=>props.onClick(props.index)} style={{backgroundImage:`url(${props.src})`}}></div>
    )

}


export default MoviePoster

