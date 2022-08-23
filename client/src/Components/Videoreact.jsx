import React from 'react'

const Videojs = () => {
  return (
    <div> <video
    id="my-video"
    class="video-js"
    controls
    preload="auto"
    width="640"
    height="264"
    // poster="MY_VIDEO_POSTER.jpg"
    data-setup="{}"
  >
      <source src="intro3.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Videojs