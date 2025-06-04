import './Cita.css'

function Cita({citita, pepito}) {
  console.log(citita)
  let Enviar=()=>{
    pepito(citita.fecha)
  }
  return (
    <>
      <div className="cita">
        <p>
          Mascota: <span>{citita.mascota}</span>
        </p>
        <p>
          Dueño: <span>{citita.dueño}</span>
        </p>
        <p>
          Fecha: <span>{citita.fecha}</span>
        </p>
        <p>
          Hora: <span>{citita.hora}</span>
        </p>
        <p>
          Sintomas: <span>{citita.sintomas}</span>
        </p>
        <button className="button eliminar u-full-width" onClick={Enviar}>Eliminar ×</button>
      </div>
    </>
    );
}

export default Cita;
