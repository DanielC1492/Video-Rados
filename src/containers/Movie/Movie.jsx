import React from 'react';
import './Movie.css';
import 'antd/dist/antd.css';
import MyButton from '../../components/MyButton/MyButton';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';



const Movie = (props) => {

    return (
        <>
        <Header/>
        <div className='movieContainer'>
            
            <div className='midLeft'>
                <div className='midLeftTop'>
                    <div className='trailer'>TRAILER</div>
                </div>  
                <div className='midLeftBot'>
                    <div className='title'>
                        <div className='empty'></div>
                        <div className='movieTitle'>{props.movie.title}</div>

                    </div>
                    
                    <div className='ratingDuration'>
                        <div className='empty'></div>
                        <div className='ratingStars'><Rate allowHalf disabled defaultValue={2.5} /></div>
                        <div className='duration'>Duración: 120min</div>
                    </div>
                    <div className='synopsisMain'>
                        <div className='empty'></div>
                        <div className='synopsis'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        In magnam suscipit, at id facere quasi ducimus porro expedita soluta quia asperiores maxime molestias maiores iste facilis enim reiciendis,
                        culpa consequuntur!<br></br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>
                        Excepturi animi est ipsa eos earum atque tenetur perspiciatis temporibus ad fugiat iure laborum ullam,<br></br>
                        error quos magni sapiente maxime nobis consequuntur?
                        </div>
                    </div>
                </div>  
            </div>
            <div className='midRight'>
                <div className='midRightTop'>
                    
                    <div className='poster'></div>
                    <div className='movieInfo'>
                        <div className='movieName'>Nombre:Federico y el trono del metal</div>
                        <div className='genre'>Géneros:Suspense,Policiaca</div>
                        <div className='director'>Director:Federico Baez Morandi</div>
                    </div>
                    
                </div>
                <div className='midRightBot'>
                    <div className='rentButton'><MyButton/></div>
                </div>
            </div>
            
            
            
           
            
        </div>
        </>
    )
}

export default connect((state) => ({movie : state.movieReducer})) (Movie);

