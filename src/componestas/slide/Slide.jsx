import React from 'react';
import './slide.css'

import img1 from '../../assets/image/1.jpg'
import img2 from '../../assets/image/2.jpg'
import img3 from '../../assets/image/3.jpg'
import img4 from '../../assets/image/4.jpg'
import img5 from '../../assets/image/5.jpg'
import img6 from '../../assets/image/6.jpg'
import img7 from '../../assets/image/7.jpg'
import img8 from '../../assets/image/8.jpg'

const Slide = () => {
    return (
        <div className='container-general'>

            <input type="radio" id='1' name='image-slide' hidden />
            <input type="radio" id='2' name='image-slide' hidden />
            <input type="radio" id='3' name='image-slide' hidden />
            <input type="radio" id='4' name='image-slide' hidden />
            <input type="radio" id='5' name='image-slide' hidden />
            <input type="radio" id='6' name='image-slide' hidden />
            <input type="radio" id='7' name='image-slide' hidden />
            <input type="radio" id='8' name='image-slide' hidden />
            <h3 className='text-galery-of-photo'>NUESTROS INTEGRANTES</h3>
            <section className='slide'>

                <figure className='item-slide'>
                    <div className='description-integrant'>
                        <p className='Name-intregant'>Harvey</p>
                        <p className='instrument-intregant'>Saxofonista</p>
                    </div>

                    <img className='img-slide' src={img1} alt="" />
                </figure>

                <figure className='item-slide'>
                    <div className='description-integrant'>
                        <p className='Name-intregant'>Franky</p>
                        <p className='instrument-intregant'>Percusionista</p>
                    </div>
                    <img className='img-slide' src={img2} alt="" />
                </figure>

                <figure className='item-slide'>
                    <div className='description-integrant'>
                        <p className='Name-intregant'>Beder</p>
                        <p className='instrument-intregant'>Percusionista</p>
                    </div>
                    <img className='img-slide' src={img3} alt="" />
                </figure>
                <figure className='item-slide'>
                    <div className='description-integrant'>
                        <p className='Name-intregant'>Jaime</p>
                        <p className='instrument-intregant'>Clarinetista</p>
                    </div>
                    <img className='img-slide' src={img4} alt="" />
                </figure>
                <figure className='item-slide'>
                    <div className='description-integrant'>
                        <p className='Name-intregant'>Eliezer</p>
                        <p className='instrument-intregant'>Trompetista</p>
                    </div>
                    <img className='img-slide' src={img5} alt="" />
                </figure>
                <figure className='item-slide'>
                    <div className='description-integrant'>
                        <p className='Name-intregant'>Luis</p>
                        <p className='instrument-intregant'>Euphonista</p>
                    </div>
                    <img className='img-slide' src={img6} alt="" />
                </figure>
                <figure className='item-slide'>
                    <div className='description-integrant'>
                        <p className='Name-intregant'>Harvey</p>
                        <p className='instrument-intregant'>Saxofonista</p>
                    </div>
                    <img className='img-slide' src={img7} alt="" />
                </figure>
                <figure className='item-slide'>
                    <div className='description-integrant'>
                        <p className='Name-intregant'>Harvey</p>
                        <p className='instrument-intregant'>Saxofonista</p>
                    </div>
                    <img className='img-slide' src={img8} alt="" />
                </figure>
            </section>



            { /*<section className='pagination'>

                <label className='pagination-item' htmlFor="1">
                    <img className='img-pag' src={paisaje} alt="" />
                </label>

                <label className='pagination-item' htmlFor="2">
                    <img className='img-pag'  src={paisaje} alt="" />
                </label>

                <label className='pagination-item' htmlFor="3">
                    <img  className='img-pag' src={paisaje} alt="" />
                </label>

    </section>*/}

        </div>
    );
};


export default Slide;

