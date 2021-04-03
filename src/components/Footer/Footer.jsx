import React from "react";
import "./Footer.css";


const Footer = () => {

    const hora = new Date();

    return(
        <div className="footer">
            <div className="leftF"></div>
            <div className="centerF">
                <p>VIDEO RADOS name, design and related marks are trademarks of VideoRados Inc.
                © 2000 VideoRados Inc. All rights reserved.</p>
            </div>
            <div className="rightF">
                <div className="visitorsCounter">
                    <div className="n1 numbers">6</div>
                    <div className="n2 numbers">9</div>
                    <div className="n3 numbers">4</div>
                    <div className="n4 numbers">2</div>
                    <div className="n5 numbers">0</div>
                </div>
                <div className="date">
                    <p>27 de Diciembre de 2002 {hora.toLocaleTimeString("es-es", {hour:"numeric", minute:"numeric"})} h</p>
                </div>
            </div>
        </div>
    );

};

export default Footer;