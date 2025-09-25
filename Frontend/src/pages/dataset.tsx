export default function Dataset() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-start px-4 text-center">
      {/* Überschrift */}
      <h1 className="inter-bold mb-6 text-5xl sm:text-6xl md:text-7xl">
        Dataset
      </h1>
      {/* Fließtext */}
      <p className="text-muted-foreground inter-regular max-w-3xl text-lg leading-relaxed sm:text-xl">
        Our dataset includes more than 40,000 frames with semantic segmentation
        image and point cloud labels, of which more than 12,000 frames also have
        annotations for 3D bounding boxes. In addition, we provide unlabelled
        sensor data (approx. 390,000 frames) for sequences with several loops,
        recorded in three cities.
      </p>
    </div>
  );
}
