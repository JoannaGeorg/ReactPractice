import TravelJournel from './travel_journel'

export default function TravelNotes ({ travelNotes }) {
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