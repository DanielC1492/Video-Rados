
import React, {useState, useEffect} from 'react';
import popup from '../../img/popup.jpg';
import './Popup.css';

const Popup = (props) => {

    const [classes,setClasses] = useState('popupContainer ');
    const [onclick,setOnclick] = useState('popupContainer visible');

    useEffect(()=>{
        setTimeout(()=>{setClasses(classes+'visible')},10000);
        setTimeout(()=>{setOnclick('popupContainer ')},11500);
    },[])
    
    return(
        <div className={classes} onClick={()=>{setClasses(onclick)}}>
            <img src={popup} alt="Popup" />
        </div>
    )

}

export default Popup;