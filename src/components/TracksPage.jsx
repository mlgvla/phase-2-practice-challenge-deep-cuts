import React, {useState, useEffect} from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
  const baseUrl = "http://localhost:8001/tracks"

  const [tracks, setTracks] = useState([])
  
  useEffect(() => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(setTracks)
  }, [])
  
  function handleAddTrack(newTrack) {
    const {image, title, artist, bpm} = newTrack

    const newTrackBody = {
      image,
      title,
      artist,
      BPM: parseInt(bpm)
    }

    fetch(baseUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTrackBody)
    })
    .then(res => res.json())
    .then(addedTrack => {
      setTracks([...tracks, addedTrack])
    })
  }

  return (
    <div>
      <Search />
      <AddTrackForm onAddTrack={handleAddTrack}/>
      <TracksList tracks={tracks}/>
    </div>
  )
}

export default TracksPage