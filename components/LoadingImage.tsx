"use client"

import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image, { StaticImageData } from "next/image"
import { useState } from "react"

interface LoadingImageProps {
  image: StaticImageData | string
  alt: string
  className?: string
  width: number
  height: number
}

export default function LoadingImage({
  image,
  alt,
  className,
  width,
  height,
}: LoadingImageProps) {
  const [isComplete, setIsComplete] = useState<boolean>(false)

  return (
    <div className={`relative w-full`}>
      <Image
        src={image}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading="lazy"
        quality={100}
        onLoadingComplete={() => setIsComplete(true)}
      />
      <div
        className={`absolute top-0 left-0 right-0 bottom-0 bg-gray-400/50 dark:bg-black/50 backdrop-blur-md ${
          isComplete ? "opacity-0 invisible" : "opacity-100 visible"
        } transition-all ease-in-out duration-200`}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xl">
          <FontAwesomeIcon
            icon={faSpinner}
            className="animate-spin text-gray-300"
          />
        </div>
      </div>
    </div>
  )
}
