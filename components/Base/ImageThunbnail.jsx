'use client'

import { useState } from 'react'
import { Flex, Box, Icon } from '@chakra-ui/react'
import { GiCancel } from 'react-icons/gi'
import Image from 'next/image'

const ImageThumbnail = ({ image, index, onDelete }) => {
  const [isButtonVisible, setButtonVisibility] =
    useState(false)
  return (
    <Flex
      key={index}
      position="relative"
      style={{
        position: 'relative',
        width: '132px',
        height: '132px',
      }}
      onMouseEnter={() => setButtonVisibility(true)}
      onMouseLeave={() => setButtonVisibility(false)}
    >
      <Image
        src={URL.createObjectURL(image)}
        alt={`Uploaded Image ${index + 1}`}
        width={132}
        height={132}
        className="rounded"
        objectFit="cover"
      />
      {isButtonVisible && (
        <Flex position="absolute" top={-3} right={-1}>
          <Box>
            <button onClick={() => onDelete(index)}>
              <Icon
                as={GiCancel}
                color="text.AccentError"
                bg="white"
                borderRadius="50%"
              />
            </button>
          </Box>
        </Flex>
      )}
    </Flex>
  )
}

export default ImageThumbnail