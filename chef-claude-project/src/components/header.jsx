import chefIcon from '../assets/chef-hat.png'

export default function Header() {
  return (
    <header className='header-container'>
      <img className="page-icon" src={chefIcon} />
      <h1 className='page-title'>The Chef</h1>
    </header>
  )
}