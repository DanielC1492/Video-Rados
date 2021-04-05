import React from 'react';
import './MyButton.css';
import {useHistory} from 'react-router-dom';

const MyButton = (props) => {

     let history = useHistory();

     const redirectMe = () => {
         history.push(`/${props.destination}`)
     }

     let onClick = () => redirectMe();
     if (props.action) onClick = props.action;

    return (
        <div onClick={onClick} className='buttonStyle'>
            {props.nombre}
        </div>
    );
};

export default MyButton;