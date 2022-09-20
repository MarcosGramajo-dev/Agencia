import fotoArticulo from 'C:/Users/marco/Desktop/AUTOMOTORE/guillanaautomotores/src/images/fotoArticulo.jpg'

export default function Articulo(){
    
    
    return(
        <article>
            <img src={fotoArticulo} alt="fotoArticulo"/>
            <p className="titulo">Camaro</p>
            <p className="precio">$99999999</p>
            <button>Ver Más</button>
        </article> 
    )
}