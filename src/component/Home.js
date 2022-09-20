import React from 'react'

import portada from '../images/portada.jpg'

import Catalogo from './Catalogo'
import Footer from './Footer'


export default function Home(){

    return(
        <>
        <div className="home">
            <section>
                <img src={portada} alt="#"/> {/*imagen de fondo*/}

                <div className="contentHome">
                    <h2>Let's get you on the road</h2>
                    <button>LLAMANOS</button>
                </div>
            </section>
        </div>

        <Catalogo/>
        <Footer/>
        </>
    )
}