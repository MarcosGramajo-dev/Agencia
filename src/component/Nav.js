import icon from '../images/icon.png'
import {NavLink} from 'react-router-dom'

export default function Nav(){
    return(
        <div className="home">
            <header>
                <NavLink to="/" className="logo">
                    <img src={icon} alt="#"/> {/*imagen de icon*/}
                    <h1>GUILLANA AUTOMOTORES</h1>
                </NavLink>
                <NavLink to="/login"><img className="btnLogin" src={icon} alt="#"/></NavLink> {/*imagen de login*/}
            </header>
        </div>
    )
}