import { React, useState } from "react";
import'./Listado.css'
import Cita from "./Cita";




function Listado(pepe){
    console.log(pepe)

let Eliminar=(fecha)=>{
  return fecha
  //const nuevoArray = miArray.filter(elemento => elemento !== valorAEliminar);
}

return(
    <>
<div className="one-half column">
    <h2>Administra tus citas</h2>
    {
        pepe.Citas.length === 0 ?
        ( <p>No hay citas</p> ) : ( pepe.Citas.map((cita, index) => (<Cita citita={cita} key={index} pepito={Eliminar}/>)) )
    }
</div>
    </>
)
}
export default Listado