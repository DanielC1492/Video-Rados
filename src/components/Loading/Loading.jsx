
import React from 'react';
import gif from '../../img/loading.gif';
import './Loading.css';

const Loading = (props) => {

    let classes = 'loadingContainer ';
    if (props.visible) classes += 'visible';
    
    return(
        <div className={classes}>
            <img src={gif} alt="Loading" />
        </div>
    )

}

export default Loading;