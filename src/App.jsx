

import { useState } from 'react'
import './App.css'
import Formulario from './modules/formuario'
import Listado from './modules/Listado'



function App() {
  const [arrayCitas, setArrayCitas]=useState([])
  
  const SacoTareaDelFormulario =(cita)=>//le llega por parametro la cita
  {
    console.log(cita)

    setArrayCitas([...arrayCitas, cita])
  
  }

  console.log(arrayCitas)
  
  return (
    <>
      <Formulario onAgregarTarea={SacoTareaDelFormulario}/>//llama a la funcion SacoTareaDelFormulario
      <Listado Citas={arrayCitas}/>
    </>
  )
}

export default App
