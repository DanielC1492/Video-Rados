import React from 'react';
import './Movie.css';
import 'antd/dist/antd.css';
import { useHistory } from 'react-router-dom';
import MyButton from '../../components/MyButton/MyButton';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import playButton from '../../img/playButton.png';
import {ORDER} from '../../redux/types/orderTypes';



const Movie = (props) => {
        const history = useHistory();
    const order = () => {

        props.dispatch({type:ORDER});

        if(props.user.user?._id) history.push('/order');
        else history.push('/login');
        

    }

    return (
        <>
        <Header/>
        <div className='movieContainer'>
            
            <div className='midLeft'>
                <div className='midLeftTop'>
                    <div className='trailer'>
                        <img src={playButton}></img>
                    </div>
                </div>  
                <div className='midLeftBot'>
                    <div className='title'>
                        <div className='empty'></div>
                        <div className='movieTitle'>{props.movie.title}</div>

                    </div>
                    
                    <div className='ratingDuration'>
                        <div className='empty'></div>
                        <div className='ratingStars'><Rate allowHalf count={10} disabled defaultValue={props.movie.vote_average} /></div>
                        <div className='price'>Precio: 2.99€/Día</div>
                    </div>
                    <div className='synopsisMain'>
                        <div className='empty'></div>
                        <div className='synopsis'>{props.movie.overview}
                        </div>
                    </div>
                </div>  
            </div>
            <div className='midRight'>
                <div className='midRightTop'>
                    
                    <div className='poster'><img className='posterImg' src={props.movie.poster_path_hd} alt={props.movie.poster_path}></img>
                    </div>
                    <div className='movieInfo'>
                        <div className='movieName'>Nombre: {props.movie.title}</div>
                        <div className='genre'>Géneros: {props.movie.genres.join(', ')}</div>
                        <div className='year'>Año: {props.movie.release_date}</div>
                    </div>
                    
                </div>
                <div className='midRightBot'>
                    <div className='rentButton'><MyButton nombre='ALQUILAR' action={order}/></div>
                </div>
            </div>
            
            
            
           
            
        </div>
        </>
    )
}

export default connect((state) => ({movie : state.movieReducer, user:state.userReducer})) (Movie);

