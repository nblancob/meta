import React from "react";
import Footer from "../components/footer";
import "../styles/login.css";

function Login () {
    return (
        <>
            <div className="container">
                <div className="container-login">
                    <div className="login">
                        <h2>Incio de sesión</h2>
                        <form action="">
                            <input type="text" name="username" placeholder="Usuario" class="username"/>
                            <input type="password" name="passaword" placeholder="Contraseña" class="passaword"/>
                            <input id="submit" type="submit" value="Siguiente" className="submit" />
                        </form>
                        <p>¿Ha olvidado su usuario o contraseña?</p>
                        <button className="icono"><i class="fab fa-google"></i>Continuar con Google</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
  
export default Login;