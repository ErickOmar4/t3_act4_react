import { useState } from 'react'

function App() {
  const [sesionIniciada, setSesionIniciada] = useState(false)
  const [mostrarInfo, setMostrarInfo] = useState(false)
  const [mensajes, setMensajes] = useState(0)

  return (
    <div>
      {/* TÉCNICA 1: operador ternario  (condición ? si_verdadero : si_falso) */}
      <h2>{sesionIniciada ? 'Bienvenido de nuevo' : 'Por favor inicia sesión'}</h2>
      <button onClick={() => setSesionIniciada(!sesionIniciada)}>
        {sesionIniciada ? 'Cerrar sesión' : 'Iniciar sesión'}
      </button>

      <hr />

      {/* TÉCNICA 2: && (muestra algo SOLO si la condición es verdadera) */}
      <button onClick={() => setMostrarInfo(!mostrarInfo)}>
        {mostrarInfo ? 'Ocultar' : 'Mostrar'} información
      </button>
      {mostrarInfo && <p>Esta información aparece y desaparece.</p>}

      <hr />

      {/* Cuidado con && y números: si mensajes es 0, React MUESTRA un "0".
          Por eso comparamos explícitamente con > 0 */}
      <button onClick={() => setMensajes(mensajes + 1)}>Recibir mensaje</button>
      {mensajes > 0 && <p>Tienes {mensajes} mensajes nuevos</p>}
    </div>
  )
}

export default App