import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import './Player.css';

const Player = (props) => {

    
    let history = useHistory();

    const [loading, setLoading] = useState(true);
    const [classes, setClasses] = useState('');

    const goHome = () => {
        history.push('/')
    }

    useEffect(()=>{
        setTimeout(()=>{setLoading(false)},1600);
        setTimeout(()=>{setClasses('d-flex')},25600);
    },[])

    return (
        <>
            <Loading visible={loading}/>
            <div className={`errorOverlay ${classes}`}><span>Se ha producido un error. Por favor actualice su navegador a Netscape 7 o Internet Explorer 6.0.</span></div>
            <div className="overlay">
                <div className="blackbar">
                    <span>Estás viendo: {props.match.params.title}</span>
                    <div className="logo" onClick={goHome}>
                        <p>VIDEO RADOS</p>
                    </div>
                </div>
                <div className="blackbar"></div>
            </div>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvKiWRTSAzg?controls=0&autoplay=1&modestbranding=1&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
    );
};

export default Player