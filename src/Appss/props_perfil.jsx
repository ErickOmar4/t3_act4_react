
import Perfil from '../components/Perfil.jsx'

function App() {
  return (
    <div>
      {/* texto: comillas | número, booleano, arreglo: llaves */}
      <Perfil nombre="Ana" edad={20} activo={true} hobbies={['leer', 'correr']} />
      <Perfil nombre="Luis" edad={22} activo={false} hobbies={['música']} rol="Profesor" />
    </div>
  )
}

export default App