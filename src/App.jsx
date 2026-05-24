import { useState } from 'react'
import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Prompts from './components/Prompts'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('resumen')

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="app-label">Informe Berjes</p>
          <h1>Contenido del Resumen</h1>
        </div>
        <nav className="tab-list" aria-label="Navegación de secciones">
          <button
            type="button"
            className={activeTab === 'resumen' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('resumen')}
          >
            Resumen
          </button>
          <button
            type="button"
            className={activeTab === 'marco' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('marco')}
          >
            Marco
            </button>
          <button 
            type="button"
            className={activeTab === 'delitos' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('delitos')}
          >
            Delitos
            </button>
          <button
            type="button"
            className={activeTab === 'comparacion' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('comparacion')}
          >
            Comparación
            </button>
          <button
            type="button"
            className={activeTab === 'responsabilidades' ? 'tab active' : 'tab'}
            onClick={() =>setActiveTab('responsabilidades')}
          >
            Responsabilidades
            </button>
          <button
          type="button"
          className={activeTab === 'datos' ? 'tab active' :'tab'}
          onClick={() => setActiveTab('datos')}
        > 
          Datos
          </button>
        <button
          type="button"
          className={activeTab === 'conclusiones' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('conclusiones')}
        >
          Conclusiones
          </button>
        <button
          type="button"
          className={activeTab === 'prompts' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('prompts')}
        >
          Prompts
        </button>
        </nav>
      </header>
      <main className="app-content">
        {activeTab === 'resumen' && <Resumen />}
        {activeTab === 'marco' && <Marco />}
        {activeTab === 'delitos' && <Delitos />}
        {activeTab === 'comparacion' && <Comparacion />}
        {activeTab === 'responsabilidades' && <Responsabilidades />}
        {activeTab === 'datos' && <Datos />}
        {activeTab === 'conclusiones' && <Conclusiones />}
        {activeTab === 'prompts' && <Prompts />}
      </main>
    </div>
  )
}

export default App
