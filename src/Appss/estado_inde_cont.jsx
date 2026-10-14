import Contador from '../components/estado_independiente_cont.jsx'

function App() {
  return (
    <div>
      {/* Cada Contador tiene su propia memoria: no se afectan entre sí */}
      <Contador nombre="Contador A" />
      <Contador nombre="Contador B" />
    </div>
  )
}

export default App