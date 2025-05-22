import { React, useState } from "react";
import'./Listado.css'
import Cita from "./Cita";




function Listado(pepe){
    console.log(pepe)

return(
    <>
<div className="one-half column">
    <h2>Administra tus citas</h2>
    {
        pepe.Citas.length === 0 ?
        ( <p>No hay citas</p> ) : ( pepe.Citas.map((cita, index) => (<Cita citita={cita} key={index}/>)) )
    }
</div>
    </>
)
}
export default Listado