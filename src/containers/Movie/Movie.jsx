import React, {useState, useEffect} from 'react';
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
import  Footer  from '../../components/Footer/Footer';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';

const videoTypes = ['Trailer', 'Teaser', 'Featurette', 'Clip', 'Behind the Scenes', 'Bloopers'];

const Movie = (props) => {

    const history = useHistory();

    const [trailer, setTrailer] = useState(<img src={playButton}/>);
    const [loading, setLoading] = useState(true);

    if (!props.movie.id) history.push("/");

    useEffect(()=>{

        setTimeout(()=>{
            const p1 = axios.get(`https://api.themoviedb.org/3/movie/${props.movie.id}/videos?api_key=cac61624997edd865edf5c5c8caec2a2&language=es-ES`);
            const p2 = axios.get(`https://api.themoviedb.org/3/movie/${props.movie.id}/videos?api_key=cac61624997edd865edf5c5c8caec2a2`);
            Promise.all([p1,p2])
            .then(handleResponse)
            .catch((err)=>{
                setLoading(false);
                setTrailer(<><div className="trailerTitle">Error buscando trailers para esta película.</div><img src={playButton}/></>);
            });
        },500);

    },[])

    const handleResponse = (responses) => {
        let ytpath = '';
        loop:
        for (let type of videoTypes) {
            for (let response of responses) {
                for (let video of response.data.results) {
                    if (video.type === type && video.site === "YouTube") {
                        ytpath = video.key;
                        break loop;
                    }
                }
            }
        }
        setLoading(false);
        if (ytpath) {
            const url = `https://www.youtube.com/embed/${ytpath}?autoplay=1&modestbranding=1&rel=0`;
            setTrailer(<iframe width="100%" height="100%" src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>);
        } else {
            setTrailer(<><div className="trailerTitle">No hay trailers disponibles para esta película.</div><img src={playButton}/></>);
        }
    }
    
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
                        <Loading visible = {loading}/>
                        {trailer}
                    </div>
                </div>  
                <div className='midLeftBot'>
                    <div className='title'>
                        <div className='empty'></div>
                        <div className='movieTitle'><b>{props.movie.title}</b></div>

                    </div>
                    
                    <div className='ratingDuration'>
                        <div className='empty'></div>
                        <div className='ratingStars'><Rate allowHalf count={10} disabled defaultValue={props.movie?.vote_average} /></div>
                        <div className='ratingText'><b>{props.movie?.vote_average}/10</b></div>
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
                    
                    <div className='poster'><img className='posterImg' src={props.movie?.poster_path_hd} alt={props.movie?.title}></img>
                    </div>
                    <div className='movieInfo'>
                        <div className='movieName'><b>Nombre: {props.movie?.title}</b></div>
                        <div className='genre'><b>Géneros:</b> {props.movie?.genres?.join(', ')}</div>
                        <div className='year'><b>Año:</b> {props.movie?.release_date}</div>
                        <div className='price'><b>Precio:</b> 2.99€/Día</div>
                        <MyButton nombre='ALQUILAR' action={order}/>
                    </div>
                </div>
            </div>
            
            
            
           
            
        </div>
        <Footer />
        </>
    )
}

export default connect((state) => ({movie : state.movieReducer, user:state.userReducer})) (Movie);

