import { React, useState } from "react";
import'./Listado.css'
import Cita from "./cita";




function Listado(){
    
//logica
const RecibirArray=(ArrayCitas)=>
{
    console.log(ArrayCitas)
    return < ReciboCita citas={ArrayCitas}/>
}

return(
    <>
    <div className="one-half column">
    <h2>Administra tus citas</h2>
    <Cita/>
    </div>
    </>
)


}
export default Listado