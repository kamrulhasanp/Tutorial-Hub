import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import VideoTemplate from '../VideoTemplate/VideoTemplate'
import VideoList from './VideoList'
const videos = [
    '/videos/test_video_1.mp4', 
    '/videos/test_video_2.mp4', 
    '/videos/test_video_3.mp4',
    '/videos/test_video_4.mp4',
    '/videos/test_video_5.mp4',
  
  ]
  

const VideoSection = () => {
  return (
    <Box >
        <Flex mt={3} gap={5}>
        <VideoTemplate videoUrl={videos}/>
        <VideoList videos={videos} />

        </Flex>

    </Box>
  )
}

export default VideoSection
