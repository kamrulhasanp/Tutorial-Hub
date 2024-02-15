
import Slider from '@/components/Slider'
import { Box, Text } from '@chakra-ui/react'
const images = [
  '/images/slider/slider1.png', 
  '/images/slider/slider2.jpg', 
  '/images/slider/slider3.jpg',
  '/images/slider/slider4.png',
  '/images/slider/slider5.jpg',
];


export default function page() {
  return (
    <Box>
      <Slider images={images} />
      <Text pt={5}>NExt Slide</Text>
      
    </Box>
  )
}
