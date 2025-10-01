export default function SensorSetup() {
  return (
    <div className="prose dark:prose-invert mx-auto max-w-5xl px-4">
      {/* Überschrift */}
      <h1 className="inter-bold mb-6 text-5xl sm:text-6xl md:text-7xl">
        Sensor setup
      </h1>
      {/* Fließtext */}
      <section className="prose max-w-none">
        <h2>Sensor setup</h2>

        <p>
          <img
            src="src/assets/images/sensor_positions.png"
            alt="Sensor setup"
            className="float-right mb-2 ml-4 w-80 rounded-lg shadow"
          />
          The data collection has been conducted using several vehicles with an
          identical sensor layout driven around Europe over two years. The cars
          are equipped with a <strong>high-resolution camera</strong>,{" "}
          <strong>3x LiDARs</strong>, a <strong>high-precision GNSS/IMU</strong>{" "}
          and other consumer-grade sensors. The sensor setup is outlined in the
          figure to the right and each sensor is described in more detail below.
        </p>

        <h4>Camera</h4>
        <p>
          1x 120° FOV 3848x2168 RGB camera, captured at ~10.1Hz as JPG (PNG
          optional).
        </p>

        <h4>LiDAR</h4>
        <p>
          1x Velodyne VLS128 and 2x Velodyne VLP16. Point clouds at ~9Hz, stored
          as .npy per scan (~254k points on average).
        </p>

        <h4>Radar</h4>
        <p>
          Continental ARS513 B1 sample – captured every 60ms, stored as .npy.
          Several modes depending on speed (mode 0..2) with ranges up to 250m.
        </p>

        <h4>GNSS/IMU</h4>
        <p>
          High-precision OxTS logged at 100Hz. Position accuracy 0.01m,
          orientation accuracy ~0.03° pitch/roll.
        </p>
      </section>
    </div>
  );
}
