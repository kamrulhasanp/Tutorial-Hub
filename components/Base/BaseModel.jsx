'use client'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
} from '@chakra-ui/react'

const BaseModal = ({
  isOpen,
  onClose,
  title,
  titleColor = 'surface.AccentPrimaryLight',
  footerColer = 'surface.Disable',
  children,
  alignItems = 'center',
  footer,
  ...props
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered={true}
      {...props}
    >
      <ModalOverlay />
      <ModalContent alignItems={alignItems}>
        <ModalHeader>
          <Text color={titleColor}> {title}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter
          bg={footerColer}
          borderBottomLeftRadius="8px"
          borderBottomRightRadius="8px"
        >
          {footer}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default BaseModal