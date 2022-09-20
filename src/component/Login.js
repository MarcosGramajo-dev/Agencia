import fondo from '../images/portadaLogin.jpg'

export default function Login(){

    return(
        <div className="login">
            <img src={fondo} alt=""/>

            <div class="form">
                <div class="title">¡Bienvenido!</div>
                <div class="input-container ic1">
                    <input id="user" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="user" class="placeholder">Usuario</label>
                </div>
                <div class="input-container ic2">
                    <input id="pass" class="input" type="password" placeholder=" " />
                    <div class="cut"></div>
                    <label for="pass" class="placeholder">Contraseña</label>
                </div>
                <button type="text" class="submit">Login</button>
            </div>
        </div>
    )
}