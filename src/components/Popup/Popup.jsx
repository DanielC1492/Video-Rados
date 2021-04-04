
import React, {useState, useEffect} from 'react';
import popup from '../../img/popup.jpg';
import './Popup.css';

const Popup = (props) => {

    const [classes,setClasses] = useState('popupContainer ');

    useEffect(()=>{
        setTimeout(()=>{setClasses(classes+'visible')},10000);
    },[])
    
    return(
        <div className={classes} onClick={()=>{setClasses('popupContainer ')}}>
            <img src={popup} alt="Popup" />
        </div>
    )

}

export default Popup;