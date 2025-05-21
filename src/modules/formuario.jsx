import { Fragment, useState } from "react";
import "./formulario.css";


function Formulario({onAgregarTarea}) {
    const [mascota,setMascotaName]= useState("") //guarda el valor de setMascotaName en la variable mascota que esta inicializada vacia
    const [dueño,setDueñoName]= useState("")
    const [fecha,setFecha]= useState("")
    const [hora,setHora]= useState("")
    const [sintomas,setSintomas]= useState("")

  let tomarValores = (e) => {
    e.preventDefault()
    let citaObjeto=
    {
        mascota: mascota,
        dueño: dueño,
        fecha: fecha,
        hora: hora,
        sintomas: sintomas
    }
    //console.log(citaObjeto.mascota + citaObjeto.dueño+citaObjeto.fecha+citaObjeto.hora+citaObjeto.sintomas)
    onAgregarTarea(citaObjeto)//manda el objeto a App.jsx
  }
  return (
    <Fragment>
      <div className="one-half column">
        <h2>Crear mi Cita</h2>
        <form onSubmit={tomarValores}> //al apretar el boton llama a la funcion tomarValores
          <label>Nombre Mascota</label>
          <input
            type="text"
            name="mascota"
            className="u-full-width"
            placeholder="Nombre Mascota"
            onChange={e => setMascotaName(e.target.value)}//cuando cambia el input lo guarda en la variable setMascotaName 
          />
          <label>Nombre Dueño</label>
          <input
            type="text"
            name="propietario"
            className="u-full-width"
            placeholder="Nombre dueño de la mascota"
            onChange={e => setDueñoName(e.target.value)}
          />
          <label>Fecha</label>
          <input 
          type="date" 
          name="fecha" 
          className="u-full-width" 
          onChange={e => setFecha(e.target.value)}
          />
          <label>hora</label>
          <input 
          type="time" 
          name="hora" 
          className="u-full-width" 
          onChange={e => setHora(e.target.value)}
          />
          <label>Sintomas</label>
          <textarea 
          name="sintomas" 
          className="u-full-width"
          onChange={e => setSintomas(e.target.value)}
          ></textarea>
          <button type="submit" className="u-full-width button-primary">
            Agregar Cita
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default Formulario;
