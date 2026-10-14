function TarjetaProps({ titulo, descripcion }) {
  return (
    <div style={{ border: '1px solid gray', padding: '16px', margin: '8px', borderRadius: '8px' }}>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  )
}

export default TarjetaProps