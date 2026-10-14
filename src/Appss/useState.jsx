// Importamos el hook useState desde React
import { useState } from 'react'

function App() {
  // useState(0) devuelve un arreglo con DOS cosas:
  //   1) contador    -> el valor actual del estado
  //   2) setContador -> la función para CAMBIARLO
  // El 0 es el valor inicial.
  const [contador, setContador] = useState(0)

  return (
    <div>
      <p>Contador: {contador}</p>

      {/* Al llamar setContador, React re-renderiza y la pantalla se actualiza */}
      <button onClick={() => setContador(contador + 1)}>Sumar</button>
      <button onClick={() => setContador(contador - 1)}>Restar</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  )
}

export default App