export default function Tutorial() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {/* Überschrift */}
      <h1 className="inter-bold mb-6 text-5xl sm:text-6xl md:text-7xl">
        Tutorial
      </h1>
      {/* Fließtext */}
      <p className="text-muted-foreground inter-regular max-w-3xl text-lg leading-relaxed sm:text-xl">
        The following tutorial gives an introduction to working with A2D2. In
        particular, it shows how to work with the sensor configuration file,
        sensor views, LiDAR points, camera images, and 3D bounding boxes.
      </p>
    </div>
  );
}
