import ItemTarea from './ItemTarea.jsx'

// Props recibidas: tareas (arreglo), alCompletar y alEliminar (funciones)
function ListaTareas({ tareas, alCompletar, alEliminar }) {
  // Renderizado condicional: mensaje si no hay tareas
  if (tareas.length === 0) {
    return <p>🎉 No hay tareas. ¡Agrega una!</p>
  }

  return (
    <ul>
      {/* Lista con key única por cada tarea */}
      {tareas.map((tarea) => (
        <ItemTarea
          key={tarea.id}
          tarea={tarea}
          alCompletar={alCompletar}
          alEliminar={alEliminar}
        />
      ))}
    </ul>
  )
}

export default ListaTareas