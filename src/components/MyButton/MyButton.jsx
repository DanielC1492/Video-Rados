
import React from 'react';
import './MyButton.css';
import {useHistory} from 'react-router-dom';

const MyButton = (props) => {

     let history = useHistory();

     const redirectMe = () => {
         history.push(`/${props.destination}`)
     }



    return (
        <div onClick={() => redirectMe()} className='buttonStyle'>
        Alquilar
        </div>
    )
}


export default MyButton;

