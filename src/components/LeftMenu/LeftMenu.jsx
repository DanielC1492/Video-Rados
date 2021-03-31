
import React from 'react';

import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {LOGOUT} from '../../redux/types/userTypes';

import './LeftMenu.css'


const LeftMenu = (props) => {

    let history = useHistory();

    const route = (goto) => {
        history.push(goto);
    }

    const hideMenu = () => {

    }

    const logout = () => {
        props.dispatch({type:LOGOUT})
        history.push('/');
    }
    
    let classes = {
        profile: 'LMItem',
        myrentals: 'LMItem'
    }
    switch (history.location.pathname) {
        case '/profile':
        case '/admin':
            classes.profile += ' selected';
            break;
        case '/profile/my-rentals':
        case '/admin/all-rentals':
            classes.myrentals += ' selected';
            break;
    }
    let labels = {
        profile: 'Mi perfil',
        myrentals: 'Mis alquileres'
    }
    let routes = {
        profile: '/profile',
        myrentals: '/profile/my-rentals'
    }
    if (history.location.pathname.split('/')[1] == 'admin') {
        labels = {
            profile: 'Panel',
            myrentals: 'Alquileres'
        }
        routes = {
            profile: '/admin',
            myrentals: '/admin/all-rentals'
        }
    }


    return(
        <>
        <div className='LMContainer'>
            <div className={classes.profile} onClick={()=>route(routes.profile)}>
                <div className="select"></div>
                <div className="LMItemTitle">{labels.profile}</div>
            </div>
            <div className={classes.myrentals} onClick={()=>route(routes.myrentals)}>
                <div className="select"></div>
                <div className="LMItemTitle">{labels.myrentals}</div>
            </div>
            <div className="LMItem" onClick={logout}>
                <div className="select"></div>
                <div className="LMItemTitle">Cerrar sesión</div>
            </div>
        </div>
        <div className={classes.under} /*onClick={()=>{hideMenu();}}*/></div>
        </>
    )
}

export default connect()(LeftMenu);