import React from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header/Header'
import MyButton from '../../components/MyButton/MyButton'
import './Order.css'



function Order(props) {

    const now = new Date();
    const end = new Date();
    end.setDate(end.getDate() + 1);
    let nowString = `${now.toLocaleDateString('es-es',{day:'numeric', month:'numeric', year:'numeric'})} a las ${now.toLocaleTimeString('es-es',{hour:'numeric', minute:'numeric'})}h`;
    let endString = `${end.toLocaleDateString('es-es',{day:'numeric', month:'numeric', year:'numeric'})} a las ${end.toLocaleTimeString('es-es',{hour:'numeric', minute:'numeric'})}h`;
    return (
        <>
        <Header/>
        <div className='orderContainer'>
            <div className='top'>
                <div className='topLeft'><img className='topLeft' src={props.movie.poster_path_hd} alt={props.movie.poster_path}></img></div>
                <div className='topMid'>
                    <div className='infoText'>
                        <div className='movieName'>Usted va a alquilar:{props.movie.title}</div>
                        <div className='orderPrice'>Precio: 3€/día</div>
                        <div className='rentalTime'>Disfrutará de la película desde el {nowString} hasta el {endString}</div>
                    </div>
                </div>
                <div className='topRight'>
                    <img className='gif' src='https://media.tenor.com/images/23b875bff0290d88431de8cb75a161c3/tenor.gif'></img>
                </div>
            </div>
            <div className='mid'>
                <div className='headerPayment'>Tarjeta</div>
                    <div className='cardDiv'>
                        <div className='cardText'>Tarjeta de crédito</div>
                        <input className='cardNumber'></input>
                    </div>
                <div className='expirationCVV'>
                    <div className='expirationDiv'> 
                        <div className='expirationText'>Caducidad</div>
                        <input className='expiration'></input>
                    </div>
                    <div className='CVVDiv'>
                        <div className='CVVText'>CVV</div> 
                        <input className='CVV'></input>
                    </div>
                </div>
                <div className='nameDiv'>
                    <div className='nameText'>Nombre completo del titular</div> 
                    <input className='fullName'></input>
                </div>
            </div>
            
            <MyButton nombre='PAGAR'/>

        </div>


        </>
    )
}

export default connect((state) => ({movie : state.movieReducer, user:state.userReducer})) (Order);
