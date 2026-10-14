import { useState } from 'react'

// Props recibidas:
//   alAgregar: función del padre que recibe el texto de la nueva tarea
function FormularioTarea({ alAgregar }) {
  // Estado local: solo este componente necesita saber lo que se está escribiendo
  const [texto, setTexto] = useState('')

  function manejarEnvio(e) {
    e.preventDefault()                 // evita recargar la página
    if (texto.trim() === '') return    // ignora textos vacíos
    alAgregar(texto)                   // avisamos al padre
    setTexto('')                       // limpiamos el input
  }

  return (
    <form onSubmit={manejarEnvio} className="formulario">
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="¿Qué tienes que hacer?"
      />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default FormularioTarea