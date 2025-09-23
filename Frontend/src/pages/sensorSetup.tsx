export default function SensorSetup() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-start px-4 py-8 text-center">
      {/* Überschrift */}
      <h1 className="inter-bold mb-6 text-5xl sm:text-6xl md:text-7xl">
        Sensor setup
      </h1>
      {/* Fließtext */}
      <p className="text-muted-foreground inter-regular max-w-3xl text-lg leading-relaxed sm:text-xl">
        Our sensor suite consists of six cameras, five LiDAR sensors, and an
        automotive gateway for recording bus data. This configuration provides
        360° coverage of the environment with camera and LiDAR. The bus data
        give information about vehicle state and driver control input.
      </p>
    </div>
  );
}
