import { useRef } from "react";

interface PlaybackPageProps {
  videoSrc?: string;
}

export default function PlaybackPage({ videoSrc = "src/assets/videos/rerun_carmiano.mp4" }: PlaybackPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSeek = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  return (
    <div className="flex flex-col gap-6 p-4">
      {/* Video Section */}
      <div className="w-full">
        <video
          ref={videoRef}
          src={videoSrc}
          controls
          className="w-full rounded-xl shadow"
        />
      </div>

      {/* Timeline / Steuerung */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => handleSeek(0)}
          className="rounded-lg bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          ⏮ Zum Anfang
        </button>
        <button
          onClick={() => {
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime += 5;
              videoRef.current.play();
            }
          }}
          className="rounded-lg bg-gray-200 px-4 py-2 text-sm hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          +5 Sek
        </button>
      </div>

      {/* Placeholder für Rerun Viewer */}
      <div className="flex h-[400px] w-full items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400">
          📊 Rerun Viewer wird hier eingebunden, sobald eine .rrd Datei vorliegt
        </p>
      </div>
    </div>
  );
}
