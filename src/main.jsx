import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Appss/AppFinal2.jsx'
// para pruebas pongo el .jsx que quiero mostrar como App po App2.jsx o de Appss

// Busca el <div id="root"> y le dice a React que dibuje <App /> dentro
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <App />
  </StrictMode>,
)
