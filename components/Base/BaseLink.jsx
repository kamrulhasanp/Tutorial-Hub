import NextLink from 'next/link';
import {
  Link,
  Text
} from '@chakra-ui/react'

const BaseLink = ({
  href,
  children,
  ...props
}) => {
  return (
    <Text
    color="text.LinkText"
    textAlign="center"
    fontSize={14}
    fontWeight={600}
  >
    <Link as={NextLink} href={href} {...props}>
      {children}
    </Link>
  </Text>
   );
}

export default BaseLink;