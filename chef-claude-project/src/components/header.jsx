import axios from 'axios'
import { useState, useEffect } from 'react'

import chefIcon from '../assets/chef-hat.png'

export default function Header() {
  const [temp, setTemp] = useState('');

  const fetchData = async () => {
    const response = await axios.get('http://localhost:8080');
    setTemp(response)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <header className='header-container'>
        <img className="page-icon" src={chefIcon} />
        <h1 className='page-title'>The Chef</h1>
      </header>
      {temp && <h4 className='temperature-line'>The temperature today is: {temp.data.temperature}</h4>}
    </>
  )
}