'use client'
import { Box, Button, Flex, Icon } from '@chakra-ui/react'
import React, { useRef } from 'react'
import ReactPlayer from 'react-player/lazy'

import { TbRewindBackward10 , TbRewindForward10 } from "react-icons/tb";

const VideoTemplate = ({videoUrl}) => {
    const playerRef = useRef(videoUrl)
    const [isHovered, setIsHovered] = useState(false);

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
        <Box position='relative'>
            <ReactPlayer
             ref={playerRef}
             url={videoUrl}
             playing
             controls={true} 
             pip={false} 
             width='700px' 
             height='auto'
             forward ='10'
             config={{
                 file: {
                     attributes: {
                         controlsList: 'nodownload'
                     }
                 }
             }}
             />
             <Flex position='absolute' left='50%' transform="translate(-50%, -50%)" zIndex="1" mb={5} bottom='-3px' gap={2} onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>
                <Icon as={TbRewindBackward10} onClick={handleSkipBackward}  color='text.Inverse' cursor="pointer" visibility={isHovered ? 'visible' : 'hidden'} />
                <Icon as={TbRewindForward10} onClick={handleSkipForward} color='text.Inverse' cursor="pointer" visibility={isHovered ? 'visible' : 'hidden'} />
            </Flex>
        </Box>
      
    </Box>
  )
}
export default  VideoTemplate
