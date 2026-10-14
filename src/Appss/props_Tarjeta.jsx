import TarjetaProps from '../components/Tarjeta_props.jsx'

function App() {
  return (
    <div>
      <h1>Galería</h1>
      {/* Pasamos props como si fueran atributos HTML */}
      <TarjetaProps titulo="React" descripcion="Librería para interfaces" />
      <TarjetaProps titulo="Vite" descripcion="Herramienta de desarrollo rápida" />
      <TarjetaProps titulo="JavaScript" descripcion="El lenguaje base de todo" />
    </div>
  )
}

export default App