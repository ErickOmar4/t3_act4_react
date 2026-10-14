import { useState } from 'react'

function App() {
  const [usuario, setUsuario] = useState({ nombre: 'Ana', edad: 20 })
  const [frutas, setFrutas] = useState(['manzana', 'pera'])

  function cumplirAnios() {
    // ...usuario copia las propiedades; luego sobrescribimos solo "edad"
    setUsuario({ ...usuario, edad: usuario.edad + 1 })
  }

  function agregarFruta() {
    // [...frutas, 'uva'] crea un arreglo NUEVO con todo lo anterior + 'uva'
    setFrutas([...frutas, 'uva'])
  }

  return (
    <div>
      <p>{usuario.nombre} tiene {usuario.edad} años</p>
      <button onClick={cumplirAnios}>Cumplir años</button>

      <p>Frutas: {frutas.join(', ')}</p>
      <button onClick={agregarFruta}>Agregar uva</button>
    </div>
  )
}

export default App