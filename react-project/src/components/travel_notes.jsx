import TravelJournel from './travel_journel'

export default function TravelNotes ({ travelNotes }) {
  return (
    <>
      {travelNotes.map((travelNote) => {
        return (
          <TravelJournel 
            image={travelNote.img.src}
            country={travelNote.country}
            title={travelNote.title}
            googleMapsLink={travelNote.googleMapsLink}
            dates={travelNote.dates}
            text={travelNote.text}
            key={travelNote.id}
          />
        )
      })}
    </>
  )
}