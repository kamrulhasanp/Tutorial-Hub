'use client'

import {
  Box,
  Flex,
  VStack,
  StackDivider,
} from '@chakra-ui/react'

const BaseContainerBox = ({
  title,
  children,
  footer,
  ...props
}) => {
  return (
    <Box w="100%" {...props}>
      <Flex
        bg="border.Primary"
        color="text.Primary"
        h="48px"
        fontSize={18}
        alignItems="center"
        fontWeight="bold"
        borderRadius="8px 8px 0 0"
        pl="25px"
        minWidth="max-content"
      >
        {title}
      </Flex>
      <Box
        bg="text.Inverse"
        borderRadius="0 0 8px 8px"
        border="solid 1px #E8E8E8"
        mb="20px"
        pt="20px"
      >
        <Flex
          mx="25px"
          pb="20px"
          color="text.Secondary"
          minWidth="max-content"
          flexDirection="column"
        >
          {children}
        </Flex>
        {footer && (
          <Box
            bg="#FAFAFA"
            borderBottomLeftRadius="8px"
            borderBottomRightRadius="8px"
          >
            <Flex
              justifyContent="end"
              mr="25px"
              pb={5}
              pt={3}
              alignItems="center"
            >
              {footer}
            </Flex>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default BaseContainerBox