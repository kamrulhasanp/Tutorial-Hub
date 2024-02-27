'use client'

import Image from 'next/image'
import { IoImageOutline } from "react-icons/io5"

const BaseImage = ({
  imageURL,
  alt = '' ,
  width,
  height,
  sizes,
  ...props
}) => {
  // Default Image
  if (!imageURL) {
    return (
      <div
        className="w-full h-full flex items-center justify-center"
        sizes={sizes}
      >
        <IoImageOutline className="text-gray-400" size={32} />
      </div>
    )
  }

  return (
    <Image
        src={imageURL}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        fill
        style={{
          objectFit: 'contain'
        }}
        {...props}
    />
   )
}

export default BaseImage