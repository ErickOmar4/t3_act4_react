
import { useState } from 'react'

function Contador() {
  const [cuenta, setCuenta] = useState(0)

  return (
    <div className="tarjeta">
      <h3>Contador</h3>
      <p>Valor actual: {cuenta}</p>

      {/* Cada clic llama a setCuenta; React vuelve a dibujar el componente */}
      <button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>
      <button onClick={() => setCuenta(cuenta - 1)}>Restar</button>
      <button onClick={() => setCuenta(0)}>Reiniciar</button>

      {/* Renderizado condicional: mensaje según el valor */}
      {cuenta >= 10 && <p>¡Llegaste a 10 o más! 🎉</p>}
      {cuenta < 0 && <p>El contador está en negativo.</p>}
    </div>
  )
}

export default Contador