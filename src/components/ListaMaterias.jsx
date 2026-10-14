
const materias = [
  { id: 1, nombre: 'Sistemas Programables', creditos: 5 },
  { id: 2, nombre: 'Taller de Investigación', creditos: 4 },
  { id: 3, nombre: 'Programación Web', creditos: 5 },
  { id: 4, nombre: 'Inglés', creditos: 3 },
]

function ListaMaterias() {
  return (
    <div>
      <h3>Mis materias ({materias.length})</h3>
      <ul>
        {/* .map recorre el arreglo y devuelve un <li> por cada materia.
            key={materia.id} es obligatoria: identifica cada elemento. */}
        {materias.map((materia) => (
          <li key={materia.id}>
            {materia.nombre} - {materia.creditos} créditos
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaMaterias