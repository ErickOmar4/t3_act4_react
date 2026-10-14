import { useState } from 'react'

function Contador({ nombre }) {
  const [cuenta, setCuenta] = useState(0)

  return (
    <div style={{ border: '1px solid gray', padding: '8px', margin: '8px' }}>
      <h3>{nombre}</h3>
      <p>Cuenta: {cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>+1</button>
    </div>
  )
}

export default Contador