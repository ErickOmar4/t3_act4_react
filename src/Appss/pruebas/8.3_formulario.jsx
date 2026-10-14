import { useState } from 'react'

function App() {
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')

  function enviar(e) {
    // Por defecto, un formulario recarga la página: lo evitamos
    e.preventDefault()
    setMensaje('Se envió el correo: ' + correo)
    setCorreo('') // limpiamos el input
  }

  return (
    <form onSubmit={enviar}>
      <input
        type="email"
        placeholder="tucorreo@ejemplo.com"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <button type="submit">Enviar</button>
      <p>{mensaje}</p>
    </form>
  )
}

export default App