import React from 'react'
import Navbar from '../Components/Navbar'
import VideoPlayer from '../Components/VideoPlayer'
import Videoreact from '../Components/Videoreact'

const Home = () => {
  return (
      <div>
          <Navbar />
      {/* <Videoreact/> */}
      <VideoPlayer/>
      {/* <Videofromvideojs/> */}
    </div>
  )
}

export default Home