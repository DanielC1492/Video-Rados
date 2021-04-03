import React, {useState, useEffect} from 'react';
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import {useHistory} from 'react-router-dom';
import './MyRentals.css';
import {connect} from 'react-redux';
import Loading from '../../components/Loading/Loading';
import axios from 'axios';
import MoviePoster from '../../components/MoviePoster/MoviePoster';
import MyButton from '../../components/MyButton/MyButton';
import { SAVE_MOVIE } from '../../redux/types/movieTypes';


const MyRentals = (props) => {

    let history = useHistory();

    if(!props.token) history.push('/login');
    
    const [loading, setLoading] = useState(true);
    const [rentals, setRentals] = useState([]);

    useEffect(()=>{
        fetchRentals();
    },[]);

    let admin = false;
    if (history.location.pathname.split('/')[1] == 'admin') admin = true;

    const fetchRentals = () => {
        let url = `http://video-rados-b.herokuapp.com/1/user/${props.user._id}/order`;
        if (admin) url = `http://video-rados-b.herokuapp.com/1/order`;
        setLoading(true);
        setTimeout(()=>{
            axios.get(url,{headers:{'authorization':'Bearer ' + props.token}})
            .then(handleResponse)
            .catch((err)=>{
                console.log(err.message)
                setTimeout(fetchRentals,3000);
            });
        },500);
    }

    const handleResponse = (response) => {
        if (response.status == 200) {
            setLoading(false);
            setRentals(response.data);
        } else {
            console.log(response.data.message);
            setTimeout(fetchRentals,3000);
        }
    }
    
    const clickHandler = (i)=>{
        history.push('/player')
    }
    
    const rentAgain = (i)=>{
        props.dispatch({type:SAVE_MOVIE,payload:rentals[i].items[0]?.film});
        history.push('/order');
    }

    const now = new Date;

    return (
        <>
        <Header></Header>
        <section className="rentalsContainer">
            <LeftMenu></LeftMenu>
            <div className="rentals">
                <Loading visible={loading}/>
                {rentals.map((order,i)=>{
                    const movie = order.items[0]?.film;
                    let moviePoster;
                    if (movie.poster_path=='https://image.tmdb.org/t/p/w185null')
                    moviePoster = <MoviePoster index={i} title={movie.title} onClick={()=>{}}></MoviePoster>
                    else
                    moviePoster = <MoviePoster index={i} src={movie.poster_path} onClick={()=>{}}></MoviePoster>;
                    let date = new Date(order.createdAt);
                    date.setFullYear(2002);
                    let rentalDuration = order.items[0]?.rentalDuration || 1;
                    let dateString = `${date.toLocaleDateString('es-es',{day:'numeric', month:'numeric', year:'numeric'})} a las ${date.toLocaleTimeString('es-es',{hour:'numeric', minute:'numeric'})}h`;
                    let expiration = new Date(order.createdAt);
                    expiration.setDate(expiration.getDate() + rentalDuration);
                    expiration.setFullYear(2002);
                    let dateString2 = `${expiration.toLocaleDateString('es-es',{day:'numeric', month:'numeric', year:'numeric'})} a las ${expiration.toLocaleTimeString('es-es',{hour:'numeric', minute:'numeric'})}h`;
                    let action;
                    if (!admin)
                    if (expiration>now) action = <MyButton nombre='Ver Película' action={()=>{clickHandler(i)}}/>;
                    else action = <MyButton nombre='Volver a alquilar' action={()=>{rentAgain(i)}}/>;
                    let movieDetails = <><div className="datum">Rating: {movie.vote_average} / 10</div>
                                        <div className="datum">Géneros: {movie.genres.join(', ')}</div></>;
                    if (admin) movieDetails = <><div className="datum">Alquilada por:</div>
                    <div className="datum"><b>{order.user.name} {order.user.lastname}</b></div>
                    <div className="datum">Email: {order.user.email}</div>
                    <div className="datum">id: {order.user._id}</div></>;
                    return(
                        <div key={order._id} className="card">
                            <div className="cardData">
                                <div className="cardPic">{moviePoster}</div>
                                <div className="data">
                                    <div className="datum"><b>{movie.title}</b></div>
                                    {movieDetails}
                                </div>
                                <div className="data">
                                    <div className="datum">Alquilada el {dateString}</div>
                                    <div className="datum">Alquilada por {rentalDuration} días</div>
                                    <div className="datum">Caduca el {dateString2}</div>
                                    <div className="datum">Precio: {order.total}{order.currency} ({movie.pricePerDay}{order.currency} /día)</div>
                                </div>
                                    {action}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
        </>
    )
}

export default connect((state)=>({token:state.userReducer.token,user:state.userReducer.user}))(MyRentals);