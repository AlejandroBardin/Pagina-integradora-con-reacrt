import "../styles/ContactoPage.css"

const ContactoPage =(props) => {
    return (
         <div>
            <div>
        <h2>Contacto Rápido</h2>
        <form action="" method="" class="formulario">
            <p>
                <label for="nombre">Nombre </label>
                <input type="text" name=""/> 
            </p>

            <p>
                <label for="email">Email </label>
                <input type="text" name=""/> 
            </p>

            <p>
                <label for="teléfono">Teléfono </label>
                <input type="text" name=""/> 
            </p>

            <p>
                <label for="mensaje">Mensaje </label>
                <input type="text" name=""/> 
            </p>

            <p>
                <input type="Submit" value="Enviar" />
            </p>

        </form>
    </div>


    <div class="datos">
        <h2>Otras vias de comunicación</h2>
        <p>También puede contartarse con nosotros usando los siguientes medios</p>
            <ul>
                <li> Teléfono: 43243288</li>
                <li> Email: Contacto@xd.com</li>
                <li> Face</li>
                <li> Twitter</li>

            </ul>
    </div>






         </div>
    );
}

export default ContactoPage;