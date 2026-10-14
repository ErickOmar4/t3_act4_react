import { useState } from 'react'

function App() {
  const [texto, setTexto] = useState('')
  const [items, setItems] = useState([
    { id: 1, nombre: 'Leche' },
    { id: 2, nombre: 'Pan' },
  ])

  function agregar(e) {
    e.preventDefault()
    if (texto.trim() === '') return // no agregar vacíos

    const nuevo = { id: Date.now(), nombre: texto } // Date.now() = id único simple
    setItems([...items, nuevo]) // copia + el nuevo
    setTexto('')
  }

  function eliminar(id) {
    // .filter conserva todos los que NO tengan ese id
    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div>
      <h2>Lista de compras</h2>

      <form onSubmit={agregar}>
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Nuevo producto"
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.nombre}{' '}
            <button onClick={() => eliminar(item.id)}>🗑️</button>
          </li>
        ))}
      </ul>

      {items.length === 0 && <p>Tu lista está vacía.</p>}
    </div>
  )
}

export default App