function Perfil({ nombre, edad, activo, hobbies, rol = 'Estudiante' }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '12px', margin: '8px' }}>
      <h3>{nombre}</h3>
      <p>Edad: {edad}</p>
      <p>Rol: {rol}</p>
      <p>Estado: {activo ? 'Activo' : 'Inactivo'}</p>
      <p>Hobbies: {hobbies.join(', ')}</p>
    </div>
  )
}

export default Perfil