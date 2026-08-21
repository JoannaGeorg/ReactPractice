import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import worldImg from './assets/World.png'

import './App.css'

const root = createRoot(document.getElementById('root'))

function Header() {
  const title = 'Travel Journel'

  return (
    <div className='header-container'>
      <img src={worldImg} width='20' className='header-icon' />
      <div className='header-title'>
        {title}
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
    </>
  )
}

export default App
