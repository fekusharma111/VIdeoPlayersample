import styled from '@emotion/styled';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';



const Container = styled(Box)`
margin:10px;
display:flex;
justify-content: center
`

const VideoPlayer = () => {
  const [videoFilePath, setVideoFilePath] = useState(null);
 
  const handleVideoUpload = (e) => {
    setVideoFilePath(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0]);
    
  };

  const config = {
    attributes: {
      disablePictureInPicture: true,
      controlsList: 'nodownload'
    }
  };
  return (
      <Container>
      <input type="file"
        onChange={handleVideoUpload}
      />

      <ReactPlayer 
              url={videoFilePath}
              controls
              // playing= {true}
               config={config
        //   { file: { attributes: { controlsList: 'nodownload' } } }}
        // onContextMenu={e => e.preventDefault()
        }
      >
 </ReactPlayer>
 </Container>
  )
}

export default VideoPlayer;