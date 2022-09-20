import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import ModalCrearArticulo from './ModalCrearArticulo'

import fotoArticulo from '../images/fotoArticulo.jpg'

import db from './firebase'
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore/lite'

export default function Catalogo(){

 const [count, setCount] = useState(0)

 const [articulos, setArticulos] = useState([])
 const [currentId, setCurrentId] = useState("")

 
    async function obtenerDatos(){
        let producto = []
         const datos = await getDocs(collection(db, 'Autos'));
         datos.forEach(element => {
             producto.push({...element.data(), id: element.id})
         })
         
        console.log(producto)
        setArticulos(producto)
    }

    useEffect(()=>{
        
        obtenerDatos();

    }, [count]);

    async function addOrEditProduct(values){
        if(currentId === ''){
            await addDoc(collection(db, "Autos"), values);
            setCount(count + 1);
        } else{

            const datos = await doc(db, "Autos", currentId)
            updateDoc(datos, values)

            setCount(count + 1);
            setCurrentId("");
        }

    }

    async function borrarArticulo(id){
        
        if(window.confirm("¿Segudo desea eliminar el Articulo?")){
            await deleteDoc(doc(db, "Autos", id));
            setCount(count + 1);
        }

    }
    
    return(
        <div className="catalogo">
            <h2>NUESTROS MODELOS</h2>

            <ModalCrearArticulo {...{addOrEditProduct, currentId, articulos}} />

        <div className="contenedorArticulos">
            
                {
                articulos.map(elemento => {
                    return (
                        
                        <article key ={elemento.id}>
                            <img src={fotoArticulo} alt="fotoArticulo"/>
                            <p className="titulo">{elemento.titulo}</p>
                            <p className="precio">${elemento.precio}</p>
                            <NavLink to="/producto">
                                <button>Ver Más</button>
                            </NavLink>
                            <div className="circle" onClick={() => borrarArticulo(elemento.id)}>x</div>
                            <div className="circle-2" onClick={() => setCurrentId(elemento.id)}>|</div>
                        </article> 
                        
                    )
                })
                }

            
        </div>

        </div>    
    )
}