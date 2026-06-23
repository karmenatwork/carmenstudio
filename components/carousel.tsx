'use client'

import { useState, useEffect, useCallback } from 'react'
import Image, {
    type ImageProps as NextImageProps,
    StaticImageData,
} from 'next/image'
import clsx from 'clsx'
import { ChevronLeft2, ChevronRight2 } from "@deemlol/next-icons"

export interface CarouselImageItem extends Pick<NextImageProps, 'alt'> {
    src: string | StaticImageData
    width?: number | `${number}` | undefined
    height?: number | `${number}` | undefined
    id?: string | number
    label?: string
}

interface CarouselProps {
    images: CarouselImageItem[]
    imagesPerView?: number
    autoPlay?: boolean
    autoPlayInterval?: number
    showIndicators?: boolean
    showControls?: boolean
    imageContainerClassName?: string // Class for the immediate div wrapping the Image
    imageWrapperClassName?: string // Class for the div that gets the rotation and width/height
    imageClassName?: string // Class for the Next/Image component itself
    gapBetweenImages?: string
    enableRotation?: boolean // New prop to toggle rotation
    variant?: 'hover' | 'polaroid'
}

// The rotations from your original ImageGallery
const rotations = [
    'transform -rotate-2',
    'transform rotate-2',
    'transform -rotate-1',
    'transform rotate-1',
    'transform -rotate-3',
    'transform rotate-3',
]

export function Carousel({
    images,
    imagesPerView = 2,
    autoPlay = false,
    autoPlayInterval = 5000,
    showIndicators = true,
    showControls = true,
    imageContainerClassName = '', // e.g. "h-full w-full"
    imageWrapperClassName = 'aspect-[9/10]', // This will get the rotation and define aspect/size
    imageClassName = 'absolute inset-0 h-full w-full object-cover',
    gapBetweenImages = 'gap-0',
    enableRotation = true, // Default to true to show rotation
    variant = 'hover',
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [effectiveImagesPerView, setEffectiveImagesPerView] = useState(imagesPerView)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)

    // Responsive logic
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setEffectiveImagesPerView(1)
            } else if (window.innerWidth < 1024) {
                setEffectiveImagesPerView(Math.min(2, imagesPerView))
            } else {
                setEffectiveImagesPerView(imagesPerView)
            }
        }

        // Initial check
        handleResize()

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [imagesPerView])

    const totalSlides = Math.ceil(images.length / effectiveImagesPerView)

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex - effectiveImagesPerView
            if (newIndex < 0) {
                // If at the beginning, go to the last slide (handle non-even division)
                return Math.max(0, (totalSlides - 1) * effectiveImagesPerView)
            }
            return newIndex
        })
    }, [effectiveImagesPerView, totalSlides])

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + effectiveImagesPerView
            if (newIndex >= images.length) {
                return 0 // Loop to start
            }
            // Ensure we don't skip the last few items if not a perfect multiple
            if (
                newIndex > images.length - effectiveImagesPerView &&
                prevIndex < images.length - effectiveImagesPerView
            ) {
                return images.length - effectiveImagesPerView
            }
            return newIndex
        })
    }, [effectiveImagesPerView, images.length])

    const goToSlide = (slidePageIndex: number) => {
        setCurrentIndex(slidePageIndex * effectiveImagesPerView)
    }

    useEffect(() => {
        if (!autoPlay || images.length <= effectiveImagesPerView) return
        const intervalId = setInterval(goToNext, autoPlayInterval)
        return () => clearInterval(intervalId)
    }, [
        autoPlay,
        autoPlayInterval,
        goToNext,
        images.length,
        effectiveImagesPerView,
    ])

    if (!images || images.length === 0) {
        return (
            <div className="mt-16 flex h-72 w-full items-center justify-center rounded-xl bg-zinc-100 text-zinc-500 sm:mt-20 sm:h-96 dark:bg-zinc-800 dark:text-zinc-400">
                No images to display.
            </div>
        )
    }

    const itemWidthStyle = `calc(${100 / effectiveImagesPerView}% - (${gapBetweenImages !== 'gap-0' ? `((${effectiveImagesPerView} - 1) / ${effectiveImagesPerView}) * var(--carousel-gap, 0px)` : '0px'}) )`
    const gapValue = gapBetweenImages.startsWith('gap-')
        ? `${parseFloat(gapBetweenImages.substring(4)) * 0.35}rem`
        : '0px'

    // Minimum swipe distance (in px)
    const minSwipeDistance = 50

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null) // Reset touch end
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (touchStart === null || touchEnd === null) return

        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            goToNext()
        }
        if (isRightSwipe) {
            goToPrevious()
        }
    }

    return (
        <div
            className="relative my-10 w-full overflow-hidden"
            style={{ '--carousel-gap': gapValue } as React.CSSProperties}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div
                className={clsx(
                    'flex transition-transform duration-700 ease-in-out',
                    gapBetweenImages,
                )}
                style={{
                    transform: `translateX(-${(currentIndex / effectiveImagesPerView) * 100}%)`,
                    // Add some padding to the sliding container if rotation makes edges clip
                    // This depends on the amount of rotation. Alternatively, the main wrapper's overflow and padding handles it.
                    // paddingLeft: enableRotation ? '1rem' : '0',
                    // paddingRight: enableRotation ? '1rem' : '0',
                }}
            >
                {images.map((image, imageIndex) => (
                    <div
                        key={image.id || imageIndex}
                        className={clsx('relative flex-none overflow-visible')} // overflow-visible for rotation
                        style={{ width: itemWidthStyle }}
                    >
                        {variant === 'polaroid' ? (
                            /* Polaroid Variant */
                            <div
                                className={clsx(
                                    'mx-auto w-[90%] bg-white p-3 pb-10 shadow-xl dark:bg-zinc-100 ring-1 ring-black/5 rounded-sm transition-transform duration-300 hover:scale-105 hover:z-30 relative',
                                    enableRotation && rotations[imageIndex % rotations.length],
                                )}
                            >
                                <div className="aspect-square overflow-hidden relative border border-black/5 bg-zinc-200 w-full">
                                    <Image
                                        src={image.src}
                                        alt={image.alt || ""}
                                        fill
                                        sizes={`(min-width: 1024px) ${100 / effectiveImagesPerView}vw, (min-width: 640px) ${80 / effectiveImagesPerView}vw, ${50 / effectiveImagesPerView}vw`}
                                        className="object-cover"
                                        priority={
                                            imageIndex >= currentIndex &&
                                            imageIndex < currentIndex + effectiveImagesPerView
                                        }
                                    />
                                </div>
                                {image.label && (
                                    <div className="mt-4 text-center">
                                        <p className="font-caveat text-md text-zinc-800 tracking-tight leading-none rotate-[-1deg]">
                                            {image.label}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* Modern Hover Variant (Default) */
                            <div
                                className={clsx(
                                    'relative rounded-xl bg-zinc-100 sm:rounded-2xl dark:bg-zinc-800', // Background for the rotated item
                                    imageWrapperClassName, // e.g., "aspect-[9/10]"
                                    enableRotation && rotations[imageIndex % rotations.length], // Apply rotation
                                    'overflow-hidden', // Clip the Image content within the rotated wrapper
                                )}
                            >
                                <div
                                    className={clsx(
                                        'h-full w-full rounded-xl sm:rounded-2xl overflow-hidden relative group',
                                        imageContainerClassName,
                                    )}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt || `Slide ${imageIndex + 1}`}
                                        fill
                                        sizes={`(min-width: 1024px) ${100 / effectiveImagesPerView}vw, (min-width: 640px) ${80 / effectiveImagesPerView}vw, ${50 / effectiveImagesPerView}vw`}
                                        className={clsx(imageClassName)}
                                        priority={
                                            imageIndex >= currentIndex &&
                                            imageIndex < currentIndex + effectiveImagesPerView
                                        }
                                    />
                                    {image.label && (
                                        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/60 backdrop-blur-md p-3">
                                            <p className="text-white text-xs font-medium text-center">{image.label}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}

            </div>

            {/* Controls */}
            {showControls && images.length > effectiveImagesPerView && (
                <>
                    <button
                        onClick={goToPrevious}
                        disabled={currentIndex === 0 && !autoPlay}
                        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 disabled:opacity-50 sm:left-4"
                        aria-label="Previous set of slides"
                    >
                        <ChevronLeft2 className="h-6 w-6 sm:h-8 sm:w-8" />
                    </button>
                    <button
                        onClick={goToNext}
                        disabled={
                            currentIndex >= images.length - effectiveImagesPerView &&
                            !(
                                autoPlay &&
                                images.length % effectiveImagesPerView !== 0 &&
                                currentIndex + effectiveImagesPerView > images.length
                            ) &&
                            !(
                                autoPlay &&
                                currentIndex === 0 &&
                                images.length % effectiveImagesPerView === 0
                            )
                        }
                        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-white hover:bg-black/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 disabled:opacity-50 sm:right-4"
                        aria-label="Next set of slides"
                    >
                        <ChevronRight2 className="h-6 w-6 sm:h-8 sm:w-8" />
                    </button>
                </>
            )}

            {/* Indicators */}
            {showIndicators && images.length > effectiveImagesPerView && (
                <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 transform space-x-2">
                    {Array.from({ length: totalSlides }).map((_, slidePageIndex) => (
                        <button
                            key={slidePageIndex}
                            onClick={() => goToSlide(slidePageIndex)}
                            className={clsx(
                                'h-2 w-2 rounded-full sm:h-3 sm:w-3',
                                Math.floor(currentIndex / effectiveImagesPerView) ===
                                    slidePageIndex
                                    ? 'bg-white'
                                    : 'bg-white/50 hover:bg-white/75',
                            )}
                            aria-label={`Go to slide ${slidePageIndex + 1}`}
                            aria-current={
                                Math.floor(currentIndex / effectiveImagesPerView) ===
                                    slidePageIndex
                                    ? 'true'
                                    : 'false'
                            }
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
export default Carousel