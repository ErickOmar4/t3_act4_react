function App() {
  // React entrega un objeto "evento" (e) con información de lo ocurrido
  function manejarClick(e) {
    console.log('Tipo de evento:', e.type)
    console.log('Elemento clickeado:', e.target)
  }

  function manejarMouse(e) {
    console.log('Posición X:', e.clientX, '| Y:', e.clientY)
  }

  return (
    <div>
      <button onClick={manejarClick}>Haz clic y mira la consola</button>
      <div
        onMouseMove={manejarMouse}
        style={{ width: 200, height: 100, background: 'lightblue', marginTop: 10 }}
      >
        Mueve el mouse aquí
      </div>
    </div>
  )
}

export default App