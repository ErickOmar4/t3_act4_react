function TarjetaPerfil({ nombre, carrera, semestre, activo }) {
  return (
    <div className="tarjeta">
      <h3>{nombre}</h3>
      <p>Carrera: {carrera}</p>
      <p>Semestre: {semestre}</p>

      {/* Ternario: muestra un texto u otro según la prop booleana */}
      <p>Estado: {activo ? ' Activo' : ' Inactivo'}</p>
    </div>
  )
}

export default TarjetaPerfil