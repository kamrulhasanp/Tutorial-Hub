'use client'
import { Box, Button } from '@chakra-ui/react'
import React, { useRef } from 'react'
import ReactPlayer from 'react-player'

const VideoTemplate = ({videoUrl}) => {
    const playerRef = useRef(videoUrl)

    const handleSkipBackward = () =>{
        if(playerRef.current){
            const currentTime = playerRef.current.getCurrentTime();
            playerRef.current.seekTo(currentTime - 10);
        }
    }
    const handleSkipForward = () =>{
        if(playerRef.current){
            const currentTime = playerRef.current.getCurrentTime();
            playerRef.current.seekTo(currentTime + 10);
        }
    }
  return (
    <Box>
        <Box>
            <ReactPlayer
             ref={playerRef}
             url={videoUrl}
             playing
             controls={true} 
             pip={false} 
             width='700px' 
             height='auto'
             config={{
                 file: {
                     attributes: {
                         controlsList: 'nodownload'
                     }
                 }
             }}
             />
             <Box>
                    <Button onClick={handleSkipBackward}>Skip Backward 10s </Button>
                    <Button onClick={handleSkipForward}>Skip Forward 10s </Button>
                </Box>
        </Box>
      
    </Box>
  )
}
export default  VideoTemplate
