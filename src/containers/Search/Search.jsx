import React, {useState, useEffect,} from 'react';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { SAVE_MOVIE } from '../../redux/types/movieTypes';
import './Search.css'

const Search = (props) => {

    const history = useHistory();

    const [loading,setLoading] = useState(true);
    const [moreloading,setMoreloading] = useState(false);
    const [movies,setMovies] = useState([]);
    const [title,setTitle] = useState('Resultado de la búsqueda');
    const [url,setUrl] = useState('');
    const [nextPage,setNextPage] = useState(1);

    useEffect(()=>{
        if (props.match.params.query) {
            setTitle(`Resultado de la búsqueda`);
            setMovies([]);
            setLoading(true);
            setNextPage(1);
            setUrl(`https://video-rados-b.herokuapp.com/1/movie?query=${props.match.params.query}`);
        }
        else if (props.match.params.genre) {
            setTitle(`Películas de ${props.match.params.genre}`);
            setMovies([]);
            setLoading(true);
            setNextPage(1);
            setUrl(`https://video-rados-b.herokuapp.com/1/movie?genre=${props.match.params.genre}`);
        }
    },[props.match.params.query,props.match.params.genre])

    useEffect(()=>{
        if (url != '') getMovies();
    },[url]);

    const getMovies = ()=>{
        axios.get(`${url}&page=${nextPage}`)
        .then(res=>{
            setLoading(false);
            setMoreloading(false);
            setMovies([...movies,...res.data]);
            if (res.data.length<20) setNextPage(0);
            else setNextPage(nextPage+1);
        })
        .catch(()=>setTimeout(getMovies,3000));
    }

    const clickHandler = (i)=>{
        props.dispatch({type : SAVE_MOVIE, payload : movies[i] });
        history.push('/movie')
    }

    return (
        <>
        <Header/>
        <div className='searchDiv'>
            <h4>{title}</h4>
            <div className="searchResults">
                <Loading visible={loading}/>
                {movies.map((movie,i)=>{
                    if (movie.poster_path=='https://image.tmdb.org/t/p/w185null')
                    return <MoviePoster key={i} index={i} title={movie.title} onClick={clickHandler}></MoviePoster>
                    else
                    return <MoviePoster key={i} index={i} src={movie.poster_path} onClick={clickHandler}></MoviePoster>
                })}
                <div className={`loadMore np${nextPage}`} onClick={()=>{setMoreloading(true);getMovies();}}><Loading visible={moreloading}/>Cargar más</div>
            </div>
        </div>
        </>
    );
};

export default connect()(Search);