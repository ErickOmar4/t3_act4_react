// App.jsx: reúne los 4 mini proyectos en una sola página
import Bienvenida from '../components/Bienvenida.jsx'
import TarjetaPerfil from '../components/TarjetaPerfil.jsx'
import Contador from '../components/Contador.jsx'
import MostrarOcultar from '../components/MostrarOcultar.jsx'
import ListaMateriasLista from '../components/ListaMaterias.jsx'
import '../App.css'

function App() {
  return (
    <div className="app">
      <h1>Actividad 4: React</h1>

      <section>
        <h2>a) Componente funcional simple</h2>
        <Bienvenida />
      </section>

      <section>
        <h2>b) Componente con props</h2>
        <TarjetaPerfil nombre="Ana López" carrera="Ingeniería" semestre={3} activo={true} />
        <TarjetaPerfil nombre="Luis Pérez" carrera="Sistemas" semestre={5} activo={false} />
      </section>

      <section>
        <h2>c) Componentes con estado</h2>
        <Contador />
        <MostrarOcultar />
      </section>

      <section>
        <h2>d) Lista con .map()</h2>
        <ListaMateriasLista />
      </section>
    </div>
  )
}

export default App