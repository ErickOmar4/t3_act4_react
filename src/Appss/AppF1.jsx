import { useState } from 'react'
import FormularioTarea from '../components/FormularioTarea.jsx'
import ListaTareas from '../components/ListaTareas.jsx'
import '../App.css'

function App() {
  // ESTADO PRINCIPAL: vive en App porque varios hijos lo necesitan
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React', completada: false },
    { id: 2, texto: 'Practicar props', completada: true },
  ])

  // Agregar una tarea nueva al final
  function agregarTarea(texto) {
    const nueva = { id: Date.now(), texto, completada: false }
    setTareas([...tareas, nueva])
  }

  // Cambiar "completada" de UNA tarea sin modificar las demás
  function completarTarea(id) {
    setTareas(
      tareas.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    )
  }

  // Quitar una tarea por su id
  function eliminarTarea(id) {
    setTareas(tareas.filter((t) => t.id !== id))
  }

  // Valores calculados a partir del estado (no necesitan su propio useState)
  const total = tareas.length
  const hechas = tareas.filter((t) => t.completada).length

  return (
    <div className="app">
      <h1> Mis tareas</h1>
      <p>{hechas} de {total} completadas</p>

      <FormularioTarea alAgregar={agregarTarea} />

      <ListaTareas
        tareas={tareas}
        alCompletar={completarTarea}
        alEliminar={eliminarTarea}
      />
    </div>
  )
}

export default App