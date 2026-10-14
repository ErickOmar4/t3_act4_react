// Props recibidas:
//   tarea:      objeto { id, texto, completada }
//   alCompletar: función para marcar/desmarcar
//   alEliminar:  función para borrar
function ItemTarea({ tarea, alCompletar, alEliminar }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={tarea.completada}
          onChange={() => alCompletar(tarea.id)}
        />
        {/* Renderizado condicional del estilo: tachado si está completada */}
        <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
          {tarea.texto}
        </span>
      </label>
      <button onClick={() => alEliminar(tarea.id)}>Eliminar</button>
    </li>
  )
}

export default ItemTarea