'use client'

import { Button, Icon } from '@chakra-ui/react'

const BaseButton = ({
  buttonLabel,
  icon, // Only icon is leftIcon
  rightIcon,
  isDisabled = false,
  isLoading = false,
  outline = false,
  variant = 'unstyled',
  onClick,
  colorScheme,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      isDisabled={isDisabled}
      isLoading={isLoading}
      colorScheme={colorScheme}
      className={`
        relative
        rounded-lg
        w-full
        ${outline ? 'border-blue-500' : ''}
        ${outline ? 'bg-white' : 'bg-orange-400'}
        ${outline ? 'text-blue-500' : 'text-white'}
        ${
          outline
            ? 'hover:bg-blue-100'
            : 'hover:bg-orange-400/80'
        }
      `}
      leftIcon={icon ? <Icon as={icon} /> : null}
      rightIcon={rightIcon ? <Icon as={rightIcon} /> : null}
      {...props}
    >
      {buttonLabel}
    </Button>
  )
}

export default BaseButton