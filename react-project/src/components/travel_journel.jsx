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
        <a href={googleMapsLink}>View on Google Maps</a>
        <h3>{title}</h3>
        <h5>{dates}</h5>
        <p>{text}</p>
      </div>
    </article>
  )
}