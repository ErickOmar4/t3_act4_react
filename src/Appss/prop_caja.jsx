import Caja from '../components/prop_children_caja'

function App() {
  return (
    <div>
      <Caja titulo="Aviso">
        <p>Este párrafo llega como "children".</p>
        <button>Aceptar</button>
      </Caja>
      <Caja titulo="Otra caja">
        <p>Mismo componente, contenido distinto.</p>
      </Caja>
    </div>
  )
}

export default App