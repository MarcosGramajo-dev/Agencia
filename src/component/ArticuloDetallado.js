import React from "react";
import SlideImg from './Slide'
import logowhatsapp from './config/whatsapp-logo.svg'

export default function ArticuloDetallado(){

      return (
        <div className="articuloDetallado">
          <SlideImg/>

          <div className="infoArticulo">
            <table>
                <thead>
                  <tr>
                    <th colSpan="2"><h3>MODELO DEL AUTO</h3></th>
                  </tr>

                  <tr>
                    <th colSpan="2"><h4>$999.999.999</h4></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td colSpan="2">FICHA TECNICA</td>
                  </tr>

                  <tr>
                    <td>AÑO</td>
                    <td>2022</td>
                  </tr>

                  <tr>
                    <td>KILOMETROS</td>
                    <td>100.000</td>
                  </tr>

                  <tr>
                    <td>MOTOR</td>
                    <td>2.0 / NAF</td>
                  </tr>

                  <tr>
                    <td>GNC</td>
                    <td>NO</td>
                  </tr>

                  <tr className="financia">
                    <td>FINANCIA</td>
                    <td>SI</td>
                  </tr>

                  <tr className="buttonContacto">
                    <td colSpan="2"><img src={logowhatsapp} alt="#"/><button >Me interesa!</button></td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
      );
}