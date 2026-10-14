// App.jsx
import Estado from '../components/9.2_if_retorno_anticipado.jsx'

function App() {
  return (
    <div>
      {/* Prueba cada caso cambiando las props */}
      <Estado cargando={true} />
      <Estado cargando={false} error="Sin conexión" />
      <Estado cargando={false} datos="Lista de usuarios" />
    </div>
  )
}

export default App