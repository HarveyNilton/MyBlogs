import React from 'react';
import './home.css'
import imgPerfil from '../../assets/image/logo-circular-bamus.png'
import paisaje from '../../assets/image/paisa.jpg'
import Slide from '../slide/Slide';

const Home = () => {

    const imgGaleri = [imgPerfil, imgPerfil, imgPerfil, imgPerfil]
    return (
        <div className='home-container'>
            <figure className='container-baner'>
                <img className='baner' src={paisaje} alt="" />
                <div className="container-logos-nombre">
                    <img className='img-perfil' src={imgPerfil} alt="" />
                    <p>Banda Orquesta Peruvians Band <br />(BOPERBAND)</p>
                </div>

            </figure>
            <section className='description-personal'>
                <article className='quien-soy'>
                    <h5>Hola!!, Les saluda Harvey Nilton Lopez Quiñones, Director de la Banda Peruvians Band. Les comento que la Banda Peruvians Band fue fundado el 25 de setiembre del 2019. Está integrado por 35 músicos profesionales el cual a requerimiento del contratista podemos conformar un grupo musical de 10 - 12 - 15 - 18 - 22 - 24 - 30 - 35 intregantes, para asi poder satisfacer las altas demandas y necesidad de los usarios.
                        <br /><br />
                        En toda nuestra trayectoria hemos venido cumpliendo con los compromisos a cabalidad, demostrando el profesionalismo que nos caracterisa como artistas, y dejando satisfecho a nuestros clientes.
                        <br />
                        <br />
                        Actualmente por motivo de trabajo nos encontramos prestando servicio al público en la Hermosa Ciudad de Iquitos - (Isla Bonita).
                    </h5>
                </article>

                <figure className='galeria-of-photo'>
                    <Slide />
                </figure>
            </section>

        </div>
    );
};

export default Home;