
import "../styles/layout.css"

const HomePage =(props) => {
    return (
         <div>
             <div>
        <img class="responsive-img" src="img/home/img01.jpg"  alt="portada canal"/>

             </div>
         <div className="columnas">
            <section className="bienvenidos">
        <h2>Bienvenidos</h2>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa saepe neque temporibus, non accusamus repellendus sunt voluptates magnam ipsam similique assumenda! Rerum itaque aut magni vitae et sit omnis libero?</p>
            </section>

            <section className="testimonios">
            <h2>Testimonios</h2>
            
              <div class="testimonio">
                <span class="cita">Simplemente Excelente</span>
                <span class="autor">Juan Gomez - zapatos.com</span>
              </div>
            </section>

        </div>       



         </div>
    );
}

export default HomePage;