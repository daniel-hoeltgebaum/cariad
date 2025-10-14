import Carousel from "../components/carousel";
import PlaybackPage from "../components/playbackPage";

// All videos from assets/videos
const videos = [
  { src: "/src/assets/videos/rerun_carmiano.mp4", title: "Rerun Carmiano" },
  { src: "/src/assets/videos/vi_7_latest_good.mp4", title: "VI 7 Latest Good" },
  { src: "/src/assets/videos/rerun_nardo_speedbump2.mp4", title: "Rerun Nardo Speedbump" },
];

// All images from assets/images (main folder)
const mainImages = [
  { src: "/src/assets/images/dynamic_objects.jpg", alt: "Dynamic Objects" },
  { src: "/src/assets/images/static_objects.jpg", alt: "Static Objects" },
  { src: "/src/assets/images/lane_markings.jpg", alt: "Lane Markings" },
  { src: "/src/assets/images/ego_road.jpg", alt: "Ego Road" },
  { src: "/src/assets/images/sensor_positions.png", alt: "Sensor Positions" },
  { src: "/src/assets/images/anon-faces.png", alt: "Anonymized Faces" },
  { src: "/src/assets/images/anon-plates.png", alt: "Anonymized Plates" },
];

// All images from assets/images/Setup
const setupImages = [
  { src: "/src/assets/images/Setup/setup_noBACKGROUND.jpeg", alt: "Setup No Background" },
  { src: "/src/assets/images/Setup/very_nice_side_view.jpeg", alt: "Very Nice Side View" },
  { src: "/src/assets/images/Setup/nice_side_view.jpeg", alt: "Nice Side View" },
  { src: "/src/assets/images/Setup/setup_side.jpeg", alt: "Setup Side View" },
  { src: "/src/assets/images/Setup/setup_side_6.jpeg", alt: "Setup Side 6" },
  { src: "/src/assets/images/Setup/sideview_nobackground.jpeg", alt: "Side View No Background" },
  { src: "/src/assets/images/Setup/franz_calibiration.jpeg", alt: "Franz Calibration" },
];

export default function Visualization() {
  return (
    <div className="bg-background min-h-screen px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="inter-bold mb-6 text-5xl sm:text-6xl md:text-7xl">
            Visualization
          </h1>
          <p className="text-muted-foreground inter-regular mx-auto max-w-3xl text-lg leading-relaxed sm:text-xl">
            Explore our dataset through videos and images showcasing various aspects of autonomous driving data collection and processing.
          </p>
        </div>

        {/* Videos Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-center">Video Content</h2>
          <div className="space-y-12">
            {videos.map((video, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-semibold">{video.title}</h3>
                <PlaybackPage videoSrc={video.src} />
              </div>
            ))}
          </div>
        </section>

        {/* Main Images Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-center">Dataset Images</h2>
          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <Carousel images={mainImages} height={500} />
          </div>
        </section>

        {/* Setup Images Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold text-center">Sensor Setup</h2>
          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <Carousel images={setupImages} height={500} />
          </div>
        </section>
      </div>
    </div>
  );
}
