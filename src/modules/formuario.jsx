import{Fragment}from'react'
import './formulario.css'

function Formulario (){

    return (
        <Fragment >
            <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form>
            <label>Nombre Mascota</label><input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"/>
                <label>Nombre Dueño</label><input type="text" name="propietario" className="u-full-width"placeholder="Nombre dueño de la mascota" />
                <label>Fecha</label><input type="date" name="fecha"className="u-full-width" />
                <label>hora</label><input type="time" name="hora" className="u-full-width"/>
                <label>Sintomas</label><textarea name="sintomas" className="u-full-width"></textarea>
                <button type="submit"className="u-full-width button-primary">Agregar Cita</button>
            </form>
            </div>
      </Fragment>
      
    );
        
}
var citaObjeto ={
    nombre: document.getElementsByName("mascota"),
    dueño:  document.getElementsByName("propietario"),
    fecha: document.getElementsByName("fecha"),
    hora: document.getElementsByName("hora"),
    sintomas: document.getElementsByName("sintomas")
}
console.log("cita"+citaObjeto.nombre+citaObjeto.dueño+citaObjeto.fecha+citaObjeto.hora+citaObjeto.sintomas)

export default Formulario