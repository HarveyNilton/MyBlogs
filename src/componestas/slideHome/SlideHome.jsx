import React from 'react';
import './slidehome.css'

import fon1 from '../../assets/image/fon1.jpg'
import fon2 from '../../assets/image/fon2.jpg'
import fon3 from '../../assets/image/fon3.jpg'
import fon4 from '../../assets/image/fon4.jpg'
import fon5 from '../../assets/image/fon5.jpg'

const SlideHome = () => {
    return (
        <div className='container-general-slide-home'>
            <input type="radio" id='1' name='image-slide-home' hidden />
            <input type="radio" id='2' name='image-slide-home' hidden />
            <input type="radio" id='3' name='image-slide-home' hidden />
            <input type="radio" id='4' name='image-slide-home' hidden />
            <input type="radio" id='5' name='image-slide-home' hidden />
           
            <section className='slide-home'>

                <figure className='item-slide-home'>
                   
                    <img className='img-slide-home' src={fon1} alt="" />
                </figure>

                <figure className='item-slide-home'>
            
                    <img className='img-slide-home' src={fon2} alt="" />
                </figure>

                <figure className='item-slide-home'>
                    
                    <img className='img-slide-home' src={fon3} alt="" />
                </figure>
                <figure className='item-slide-home'>
                    
                    <img className='img-slide-home' src={fon4} alt="" />
                </figure>
                <figure className='item-slide-home'>
                   
                    <img className='img-slide-home' src={fon5} alt="" />
                </figure>
                
            </section>
        </div>
    );
};

export default SlideHome;