import { useState } from 'react'

function MostrarOcultar() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="tarjeta">
      <h3>Mostrar / Ocultar</h3>

      {/* !visible invierte el valor: true pasa a false y viceversa */}
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Ocultar texto' : 'Mostrar texto'}
      </button>

      {/* Solo se dibuja el párrafo cuando visible es true */}
      {visible && <p> ¡Este es el texto secreto!</p>}
    </div>
  )
}

export default MostrarOcultar