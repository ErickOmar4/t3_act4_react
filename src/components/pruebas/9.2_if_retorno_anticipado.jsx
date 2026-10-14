
function Estado({ cargando, error, datos }) {
  // Retornos anticipados: si se cumple una condición, devolvemos eso y terminamos
  if (cargando) {
    return <p>⏳ Cargando...</p>
  }

  if (error) {
    return <p style={{ color: 'red' }}>❌ Ocurrió un error: {error}</p>
  }

  return <p>✅ Datos recibidos: {datos}</p>
}

export default Estado