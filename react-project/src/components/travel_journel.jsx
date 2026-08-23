export default function TravelJournel({ place, image, duration, description }) {
  return (
    <p className='journel-container'>
      <img src={image} className='place-img' />
      <uli className='place-line'>{place}</uli>
      <p className='duration-line'>{duration}</p>
      <p className='description-line'>{description}</p>
    </p>
  )
}