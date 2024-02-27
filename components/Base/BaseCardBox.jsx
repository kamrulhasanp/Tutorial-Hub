'use client'

import {
  Card,
  CardHeader,
  CardBody,
  Text,
  CardFooter,
  Flex,
} from '@chakra-ui/react'

const BaseCardBox = ({
  title,
  description,
  children,
  footer,
  footerAlign = 'right',
  ...props
}) => {
  return (
    <Card colorScheme="whiteAlpha" width="100%" {...props}>
      {title && (
        <CardHeader>
          <Text
            className="notoSanJp"
            fontSize={20}
            color="text.Primary"
            fontWeight="bold"
          >
            {title}
          </Text>
        </CardHeader>
      )}
      <CardBody py={0}>
        {description && (
          <Text
            className="notoSanJp"
            fontSize={14}
            color="text.Secondary"
          >
            {description}
          </Text>
        )}
        {children}
      </CardBody>
      <CardFooter justify={footerAlign}>
        {footer}
      </CardFooter>
    </Card>
  )
}

export default BaseCardBox