import markerImage from '../assets/Marker.png'

export default function TravelJournel({ image, country, title, googleMapsLink, dates, text }) {
  return (
    <article className='journel-container'>
      <div className='place-img-container'>
        <img className='place-img' src={image} />
      </div>
      <div>
        <img className="marker-img" src={markerImage} />
        <span className='country-label' >{country}</span>
        <a className='maps-link' href={googleMapsLink}>View on Google Maps</a>
        <h3 className='title-label' >{title}</h3>
        <h5 className='dates-label' >{dates}</h5>
        <p className='journel-text' >{text}</p>
      </div>
    </article>
  )
}