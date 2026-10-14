import { useState } from 'react'

function App() {
  const [nombre, setNombre] = useState('')

  return (
    <div>
      {/* value: lo que muestra el input (viene del estado)
          onChange: cada vez que el usuario escribe, actualizamos el estado
          e.target.value: lo que hay escrito en el input en ese momento */}
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <p>Hola, {nombre || 'desconocido'}</p>
      <p>Tu nombre tiene {nombre.length} letras</p>
    </div>
  )
}

export default App