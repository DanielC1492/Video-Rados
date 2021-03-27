import React, {useState, useEffect,} from 'react';
import { useHistory } from 'react-router-dom';
import MoviePoster from '../MoviePoster/MoviePoster';
import Loading from '../Loading/Loading';
import './MovieCarousel.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { SAVE_MOVIE } from '../../redux/types/movieTypes';

const MovieCarousel = (props) => {
    
    const history = useHistory()

    const [loading,setLoading] = useState(true);
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        if (!props.query) return;
        getMovies()
    },[])

    const getMovies = ()=>{
        axios.get(`http://video-rados-b.herokuapp.com/1/movie?${props.query}`)
        .then(res=>{
            setLoading(false);
            setMovies(res.data);
        })
        .catch(()=>setTimeout(getMovies,3000));
    }

    const clickHandler = (i)=>{
        props.dispatch({type : SAVE_MOVIE, payload : movies[i] });
        history.push('/movie')
    }

    return (
        
        <div className="movieCarousel">
            <Loading visible={loading}/>
            {movies.map((movie,i)=><MoviePoster key={i} index={i} src={movie.poster_path} onClick={clickHandler}></MoviePoster>)}
        </div>
           
    )

}


export default connect() (MovieCarousel) ;


