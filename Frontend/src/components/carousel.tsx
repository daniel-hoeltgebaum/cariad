import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ImageItem = { src: string; alt?: string };

export default function Carousel({
  images,
  height = 400,
}: {
  images: ImageItem[];
  height?: number;
}) {
  const [[current, direction], setCurrent] = useState<[number, number]>([0, 0]);

  const prev = () =>
    setCurrent(([prev]) => [prev === 0 ? images.length - 1 : prev - 1, -1]);
  const next = () =>
    setCurrent(([prev]) => [prev === images.length - 1 ? 0 : prev + 1, +1]);

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

  return (
    <div className="relative mx-auto w-full max-w-5xl">
      {/* Bild */}
      <div className="relative w-full overflow-hidden rounded-xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={current}
            src={images[current].src}
            alt={images[current].alt ?? ""}
            loading="lazy"
            decoding="async"
            className="mx-auto w-full object-contain shadow"
            style={{ maxHeight: `${height}px` }}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/800x400?text=Bild+nicht+geladen";
            }}
          />
        </AnimatePresence>
      </div>

      {/* Pfeile */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Punkte */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 space-x-2 rounded-full bg-black/30 px-3 py-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent([i, i > current ? 1 : -1])}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
