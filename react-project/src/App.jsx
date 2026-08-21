import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import worldImg from './assets/World.png'
import parisImg from './assets/Paris.JPG'
import berlinImg from './assets/Berlin.webp'

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

function TravelJournel({ place, image, duration, description }) {
  return (
    <>
      {image}
      {place}
      {duration}
      {description}
    </>
  )
}

function TravelNotes ({ travelNotes }) {
  return (
    <>
      {travelNotes.map((travelNote) => {
        return (
          <TravelJournel 
            place={travelNote.place}
            image={travelNote.image}
            duration={travelNote.duration}
            description={travelNote.description}
          />
        )
      })}
    </>
  )
}

function App() {
  const travelNotes = [
    {
      place: 'Paris',
      image: parisImg,
      duration: '12 Jan, 2021 - 24 Jan, 2021',
      description: 'Cool place'
    },
    {
      place: 'Berlin',
      image: berlinImg,
      duration: '10 Aug, 2021 - 24 Aug, 2021',
      description: 'Fun'
    }
  ]

  return (
    <>
      <Header />
      <TravelNotes
        travelNotes={travelNotes}
      />
    </>
  )
}

export default App
