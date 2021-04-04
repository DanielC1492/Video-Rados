import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header/Header';
import MyButton from '../../components/MyButton/MyButton';
import './Order.css';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';
import { DONE } from '../../redux/types/orderTypes';
import checkError from "../../Utils/Utils";
import MoviePoster from '../../components/MoviePoster/MoviePoster';



function Order(props) {

    const history = useHistory();
    const now = new Date();
    const end = new Date();
    end.setDate(end.getDate() + 1);
    now.setFullYear(2002);
    end.setFullYear(2002);
    let nowString = `${now.toLocaleDateString('es-es',{day:'numeric', month:'numeric', year:'numeric'})} a las ${now.toLocaleTimeString('es-es',{hour:'numeric', minute:'numeric'})}h`;
    let endString = `${end.toLocaleDateString('es-es',{day:'numeric', month:'numeric', year:'numeric'})} a las ${end.toLocaleTimeString('es-es',{hour:'numeric', minute:'numeric'})}h`;

    const [payment, setPayment] = useState({cardNumber:'',expiration:'',CVV:'',fullName:''});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const updatePayment = (e) => {
        setPayment({...payment, [e.target.name]: e.target.value});
    }
    
    const submit = async () => {

        
        setMessage("");
        let errorMessage = checkError(payment);    
        
        setMessage(errorMessage);

        if (errorMessage) {
          return;
        }

        setLoading(true);
        let id = props.movie.id || props.movie._id;
        const body = {items: [{
            film: id,
            rental: true,
            rentalDuration: 1
        }]}
        setTimeout(()=>{
            // axios.post(`http://localhost:3000/1/user/${props.user.user._id}/order`,body,{headers:{'authorization':'Bearer ' + props.user.token}})
            axios.post(`https://video-rados-b.herokuapp.com/1/user/${props.user.user._id}/order`,body,{headers:{'authorization':'Bearer ' + props.user.token}})
            .then(handleResponse)
            .catch((err)=>{
                setLoading(false);
                console.log(err.message)
            });
        },500);
    }

    const handleResponse = (response) => {
        if (response.status == 200) {
                props.dispatch({type:DONE});
                history.push('profile/my-rentals');
            
        } else {
            setLoading(false);
            console.log(response.data.message);
        }
    }

    let moviePoster;
    if (props.movie?.poster_path==='https://image.tmdb.org/t/p/w185null')
    moviePoster = <MoviePoster title={props.movie?.title} onClick={()=>{}}></MoviePoster>
    else
    moviePoster = <MoviePoster src={props.movie?.poster_path} onClick={()=>{}}></MoviePoster>;

    return (
        <>
        <Header/>
        <div className='orderContainer'>
            <Loading visible={loading} />
            <div className='top'>
                <div className='topLeft'>{moviePoster}</div>
                <div className='topMid'>
                    <div className='infoText'>
                        <div className='movieName'>Usted va a alquilar: <b>{props.movie.title}</b></div>
                        <div className='orderPrice'>Precio: 2.99€/día</div>
                        <div className='rentalTime'>Disfrutará de la película desde el {nowString} hasta el {endString}</div>
                    </div>
                </div>
                <div className='topRight'>
                    <img className='gif' src='https://media.tenor.com/images/23b875bff0290d88431de8cb75a161c3/tenor.gif'></img>
                </div>
            </div>
            <div className='mid'>
                <div className='headerPayment'>Pagar con tarjeta</div>
                    <div className='cardDiv'>
                        <div className='cardText'>Tarjeta de crédito</div>
                        <input className='cardNumber' name='cardNumber' onChange={updatePayment}></input>
                    </div>
                <div className='expirationCVV'>
                    <div className='expirationDiv'> 
                        <div className='expirationText'>Caducidad</div>
                        <input className='expiration' name='expiration' onChange={updatePayment}></input>
                    </div>
                    <div className='CVVDiv'>
                        <div className='CVVText'>CVV</div> 
                        <input className='CVV' name='CVV' onChange={updatePayment}></input>
                    </div>
                </div>
                <div className='nameDiv'>
                    <div className='nameText'>Nombre completo del titular</div> 
                    <input className='fullName' name='fullName' onChange={updatePayment}></input>
                </div>
                <MyButton nombre='PAGAR' action={submit}/>
            </div>
            <div className='errorMessage parpadea'> {message} </div>
            

        </div>


        </>
    )
}

export default connect((state) => ({movie : state.movieReducer, user:state.userReducer})) (Order);
