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
    .then(tracks => setTracks(tracks))
  }, [])
  
    
  return (
    <div>
      <Search />
      <AddTrackForm />
      <TracksList tracks={tracks}/>
    </div>
  )
}

export default TracksPage