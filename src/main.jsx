import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link } from 'react-router-dom'
import { AgregarTareas } from './components/AgregarTareas'
import { ListaDeTareas } from './components/ListaTareas'
import { TareaApp } from './TareaApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <TareaApp />

  </BrowserRouter>,
)
