

import { useState } from 'react'
import './App.css'
import Formulario from './modules/formuario'
import Listado from './modules/Listado'



function App() {

  const [arrayCitas, setArrayCitas]= useState([{ mascota: 'mascota',
    dueño: 'dueño',
    fecha: 'fecha',
    hora: 'hora',
    sintomas: 'sintomas'}
  ])
  
  const SacoTareaDelFormulario =(cita)=>//le llega por parametro la cita
  {
    console.log(cita)

    setArrayCitas(...arrayCitas, cita)
  
    
  }

  console.log(typeof(arrayCitas))
  /*const MandarArray =()=>
  {
    return<RecibirArray citas={cita}/>
  }*/
  return (
    <>
      <Formulario onAgregarTarea={SacoTareaDelFormulario}/>//llama a la funcion SacoTareaDelFormulario
      <Listado/>
    </>
  )
}

export default App
