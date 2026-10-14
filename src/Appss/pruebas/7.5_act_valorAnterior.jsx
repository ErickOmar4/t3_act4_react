import { useState } from 'react'

function App() {
  const [n, setN] = useState(0)

  function sumarTres() {
    // Con esta forma, cada llamada recibe el valor más reciente ("anterior")
    setN((anterior) => anterior + 1)
    setN((anterior) => anterior + 1)
    setN((anterior) => anterior + 1)
  }

  return (
    <div>
      <p>n = {n}</p>
      <button onClick={sumarTres}>Sumar 3</button>
    </div>
  )
}

export default App