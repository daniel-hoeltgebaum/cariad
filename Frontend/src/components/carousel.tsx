import { useState, useEffect, useCallback, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";
import { motion, AnimatePresence, type PanInfo } from "framer-motion";

type ImageItem = { src: string; alt?: string; title?: string };

interface CarouselProps {
  images: ImageItem[];
  height?: number;
  showThumbnails?: boolean;
  infinite?: boolean;
  className?: string;
}

export default function Carousel({
  images,
  height = 400,
  showThumbnails = false,
  infinite = true,
  className = "",
}: CarouselProps) {
  const [[current, direction], setCurrent] = useState<[number, number]>([0, 0]);
  const [loadingStates, setLoadingStates] = useState<Record<number, boolean>>({});
  const carouselRef = useRef<HTMLDivElement>(null);

  // Navigation functions
  const goToPrev = useCallback(() => {
    if (!infinite && current === 0) return;
    setCurrent(([prev]) => [prev === 0 ? images.length - 1 : prev - 1, -1]);
  }, [current, images.length, infinite]);

  const goToNext = useCallback(() => {
    if (!infinite && current === images.length - 1) return;
    setCurrent(([prev]) => [prev === images.length - 1 ? 0 : prev + 1, +1]);
  }, [current, images.length, infinite]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrent([index, index > current ? 1 : -1]);
    },
    [current],
  );


  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!carouselRef.current?.contains(document.activeElement)) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          goToPrev();
          break;
        case "ArrowRight":
        case " ":
          e.preventDefault();
          goToNext();
          break;
        case "Home":
          e.preventDefault();
          goToSlide(0);
          break;
        case "End":
          e.preventDefault();
          goToSlide(images.length - 1);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [goToPrev, goToNext, goToSlide, images.length]);

  // Touch/swipe handling
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    const { offset } = info;

    if (offset.x > threshold) {
      goToPrev();
    } else if (offset.x < -threshold) {
      goToNext();
    }
  };



  // Image loading handler
  const handleImageLoad = (index: number) => {
    setLoadingStates((prev) => ({ ...prev, [index]: false }));
  };

  const handleImageLoadStart = (index: number) => {
    setLoadingStates((prev) => ({ ...prev, [index]: true }));
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  if (images.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
        <p className="text-gray-500 dark:text-gray-400">No images to display</p>
      </div>
    );
  }

  return (
    <div
      ref={carouselRef}
      className={`relative mx-auto w-full max-w-5xl ${className}`}
      tabIndex={0}
      role="region"
      aria-label="Image carousel"
      aria-live="polite"
    >
      {/* Main image container */}
      <div className="relative w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="relative"
          >
            {loadingStates[current] && (
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-white" />
              </div>
            )}
            <img
              src={images[current].src}
              alt={images[current].alt ?? `Image ${current + 1}`}
              title={images[current].title}
              loading="lazy"
              decoding="async"
              className="mx-auto w-full object-contain shadow"
              style={{ maxHeight: `${height}px`, minHeight: `${height}px` }}
              onLoadStart={() => handleImageLoadStart(current)}
              onLoad={() => handleImageLoad(current)}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/800x400?text=Image+not+found";
                handleImageLoad(current);
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            disabled={!infinite && current === 0}
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-all hover:bg-black/60 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            disabled={!infinite && current === images.length - 1}
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-all hover:bg-black/60 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}


      {/* Preview thumbnails */}
      {images.length > 1 && (
        <div className="mt-4 flex justify-center space-x-2">
          {images.map((image, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`flex-shrink-0 overflow-hidden rounded transition-all focus:outline-none ${
                i === current
                  ? "ring-2 ring-blue-500 scale-110"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt ?? `Thumbnail ${i + 1}`}
                className="h-12 w-16 object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Thumbnails */}
      {showThumbnails && images.length > 1 && (
        <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
          {images.map((image, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`flex-shrink-0 overflow-hidden rounded-lg transition-all focus:outline-none ${
                i === current
                  ? "ring-2 ring-blue-500"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt ?? `Thumbnail ${i + 1}`}
                className="h-16 w-20 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
