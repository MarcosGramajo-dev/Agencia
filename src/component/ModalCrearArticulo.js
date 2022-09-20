import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { collection, getDoc, doc} from 'firebase/firestore/lite'

import db from './firebase'



export default function ModalCrearArticulo(props) {
  const [show, setShow] = useState(false);

  function handleClose() { 
    setValues({...articulo}) 
    setShow(false);
    } 
  function handleShow () { setShow(true); } 

  

  const articulo = {
    foto1 : "",
    foto2 : "",
    foto3 : "",
    foto4 : "",
    foto5 : "",
    titulo : "",
    precio : "",
    age : "",
    kilometros : "",
    motor : "",
    gnc : false,
    financia : false,
    id : ""
  }

  const [values, setValues] = useState(articulo)
  //crear articulo

    function handleSubmit(e){
        e.preventDefault();

        props.addOrEditProduct(values);
        setValues({...articulo})
    }

    function handleInputChange(e){
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }

    async function getLinkById(id){
      const datos = await getDoc(doc(db, "Autos", id));
      setValues({...datos.data()})
      
    }

    useEffect(()=> {
      if(props.currentId === ''){
        setValues({...articulo})
      } else{

        handleShow();
        getLinkById(props.currentId);
        console.log(props.currentId, "edit")
      }
    }, [props.currentId])


  return (
    <>
      <button className="buttonModale" onClick={()=> handleShow()}>
        Crear Nuevo Articulo
      </button>

      <Modal show={show} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Crear Nuevo Articulo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
            <form onSubmit={(e)=> handleSubmit(e)}>
            <div className="agregarCaracteristicas">
                <h3>Fotos</h3>

                <label name="foto1">Foto 1 (Portada)</label>
                <input name="foto1" type="file" onChange={ e => handleInputChange(e)} value={values.foto1}></input>

                <label name="foto2">Foto 2 </label>
                <input name="foto2" type="file" onChange={ e => handleInputChange(e)} value={values.foto2}></input>

                <label name="foto3">Foto 3 </label>
                <input name="foto3" type="file" onChange={ e => handleInputChange(e)} value={values.foto3}></input>

                <label name="foto4">Foto 4 </label>
                <input name="foto4" type="file" onChange={ e => handleInputChange(e)} value={values.foto4}></input>

                <label name="foto5">Foto 5 </label>
                <input name="foto5" type="file" onChange={ e => handleInputChange(e)} value={values.foto5}></input>
            </div>

            <div className="agregarCaracteristicas">
                <h3>Datos del Vehiculo</h3>

                <label name="titulo"> Modelo</label>
                <input name="titulo" type="text" onChange={ e => handleInputChange(e)} value={values.titulo}></input>

                <label name="precio"> Precio ($) </label>
                <input name="precio" type="number" onChange={ e => handleInputChange(e)} value={values.precio}></input>

                <label name="age"> Año</label>
                <input name="age" type="number" onChange={ e => handleInputChange(e)} value={values.age}></input>

                <label name="kilometros">Kilometros</label>
                <input name="kilometros" type="number" onChange={ e => handleInputChange(e)} value={values.kilometros}></input>

                <label name="motor"> Motor</label>
                <input name="motor" type="text" onChange={ e => handleInputChange(e)} value={values.motor}></input>

                <label name="gnc"> GNC</label>
                <input name="gnc" type="checkbox" onChange={ e => handleInputChange(e)} value={values.gnc}></input>

                <label name="financia"> Financia</label>
                <input name="financia" type="checkbox" onChange={ e => handleInputChange(e)} value={values.financia}></input>
            </div>

            <button> guardar </button>
            </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleClose()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
