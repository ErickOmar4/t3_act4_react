
function Bienvenida() {
  // Podemos declarar variables normales y mostrarlas con { }
  const curso = 'Desarrollo Web con React'

  return (
    <div>
      <h3>¡Bienvenido!</h3>
      <p>Estás aprendiendo: {curso}</p>
      <p>Este es mi primer componente funcional.</p>
    </div>
  )
}

// export default permite importarlo en otros archivos
export default Bienvenida