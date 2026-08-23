import worldImg from '../assets/World.png'

export default function Header() {
  const title = 'Travel Journel'

  return (
    <header className='header-container'>
      <img src={worldImg} width='20' className='header-icon' />
      <div className='header-title'>
        {title}
      </div>
    </header>
  )
}