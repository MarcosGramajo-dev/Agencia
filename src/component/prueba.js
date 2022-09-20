import React, { useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore/lite'

import db from './firebase'

export default function Prueba(){

    useEffect(()=>{
        const obtenerDatos = async () =>{
            const datos = await getDocs(collection(db, 'Autos'))
            console.log(datos.docs[0].data());
        }
        obtenerDatos();
    }, []);

    return(
        <div>
            hola
        </div>
    )
}