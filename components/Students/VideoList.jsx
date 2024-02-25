import { Box, List, ListItem, Text } from '@chakra-ui/react'
import React from 'react'

const VideoList = ({videos}) => {
  return (
    <Box>
        <Text fontWeight='bold'>Video List</Text>
         <List>
        {videos.map((videos, index) =>(
            <ListItem key={index}>{videos}</ListItem>
        ))}
        </List>

    </Box>
  )
}

export default VideoList
