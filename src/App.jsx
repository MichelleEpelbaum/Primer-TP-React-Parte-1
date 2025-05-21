

import './App.css'
import Formulario from './modules/formuario'
import Listado from './modules/Listado'

let arrayCitas = new Array()

function App() {
  
  const SacoTareaDelFormulario =(cita)=>//le llega por parametro la cita
  {
    arrayCitas.push(cita)
    MandarArray()
  }
  const MandarArray =()=>
  {
    return<RecibirArray citas={cita}/>
  }
  return (
    <>
      <Formulario onAgregarTarea={SacoTareaDelFormulario}/>//llama a la funcion SacoTareaDelFormulario
      <Listado/>
    </>
  )
}

export default App
