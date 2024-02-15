'use client'
import { Box, Button, Icon, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore  } from "react-icons/md";


export default function Slider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    const handleNextSlid = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 :prevIndex + 1 
        );
    };

    const handlePrevSlid = () =>{
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length -1 : prevIndex -1 
        );
    };

    useEffect(() => {
        let intervalId;
        if(!isPaused){
            intervalId = setInterval(handleNextSlid, 3000)
        } 
        return () => clearInterval(intervalId);
    },[currentIndex, isPaused])

    const handleMouseOnSlider = () =>{
        setIsPaused(true);
    }
    const handleMouseOffSlider = () =>{
        setIsPaused(false)
    }
  return (
    <>
      <Box position="relative" w='100%' h='300px' onMouseEnter={handleMouseOnSlider} onMouseLeave={handleMouseOffSlider}>
        <Image 
            objectFit='cover' 
            h="100%"
            w="100%" 
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex}`} />
        <Icon color='text.LinkText' boxSize={10} cursor="pointer" position='absolute' left={0} top='50%' transform='translateY(-50%)' zIndex={1} onClick={handlePrevSlid} as={MdOutlineNavigateBefore } />

        <Icon color='text.LinkText'  boxSize={10} cursor="pointer" position='absolute' right={0} top='50%' transform='translateY(-50%)' zIndex={1} onClick={handleNextSlid} as={MdOutlineNavigateNext} />
      
    </Box>
    </>
  
  )
}
