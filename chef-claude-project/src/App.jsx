import { useState } from 'react'
import Header from './components/header'
import Form from './components/form'
import ReadyForRecipe from './components/recipe'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Form />
      <ReadyForRecipe />
    </>
  )
}

export default App
