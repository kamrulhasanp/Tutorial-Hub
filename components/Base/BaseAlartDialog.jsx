import {
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Flex,
  } from '@chakra-ui/react'
  import BaseButton from './BaseButton'
  
  const BasicAlertDialog = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    body,
  }) => {
    return (
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>
          <AlertDialogBody>{body}</AlertDialogBody>
          <AlertDialogFooter>
            <Flex gap={5}>
              <BaseButton
                size="lg"
                outline={true}
                buttonLabel="Cancel"
                onClick={onClose}
              />
              <BaseButton
                variant="solid"
                colorScheme="red"
                size="lg"
                buttonLabel="削除する"
                onClick={onConfirm}
              />
            </Flex>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  
  export default BasicAlertDialog