// App.jsx: ESTO NO FUNCIONA como esperas (a propósito, para entender el porqué)
function App() {
  let contador = 0

  function sumar() {
    contador = contador + 1
    console.log('contador vale:', contador) // en la consola SÍ sube...
  }

  // ...pero la pantalla nunca se actualiza, porque React no sabe que algo cambió
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={sumar}>Sumar</button>
    </div>
  )
}

export default App