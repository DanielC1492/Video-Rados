import React from 'react';
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import {useHistory} from 'react-router-dom';
import './Profile.css';
import {connect} from 'react-redux';


const pic = <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="140" x="0px" y="0px"
    viewBox="0 0 512 512">
    <path d="M255.999,0c-74.443,0-135,60.557-135,135s60.557,135,135,135s135-60.557,135-135S330.442,0,255.999,0z"/>
    <path d="M478.48,398.68C438.124,338.138,370.579,302,297.835,302h-83.672c-72.744,0-140.288,36.138-180.644,96.68l-2.52,3.779V512
        h450h0.001V402.459L478.48,398.68z"/>
</svg>;

const Profile = (props) => {

    let history = useHistory();

    //if(!user.user?.id) history.push('/login');

    return (
        <>
        <Header></Header>
        <section className="profileContainer">
            <LeftMenu></LeftMenu>
            <div className="profile">
                <div className="card">
                    <div className="cardData">
                        <div className="cardPic">{pic}</div>
                        <div className="data">
                            <div className="datum">Nombre: {props.user.name}</div>
                            <div className="datum">Apellidos: {props.user.lastname}</div>
                            <div className="datum">Email: {props.user.email}</div>
                        </div>
                    </div>
                    <div className="cardNumber">MIEMBRO Nº: {props.user.id?.toUpperCase()}</div>
                </div>
            </div>
        </section>
        </>
    )
}

export default connect((state)=>({user:state.userReducer.user}))(Profile);