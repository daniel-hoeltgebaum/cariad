import Carousel from "../components/carousel";
import { Camera, Radar, Navigation, Car, Cpu } from "lucide-react";

const setupImages = [
  {
    src: "/src/assets/images/Setup/setup_noBACKGROUND.jpeg",
    alt: "Vehicle sensor setup - clean view",
  },
  {
    src: "/src/assets/images/Setup/very_nice_side_view.jpeg",
    alt: "Vehicle side view with sensors",
  },
  {
    src: "/src/assets/images/Setup/nice_side_view.jpeg",
    alt: "Vehicle side profile",
  },
  {
    src: "/src/assets/images/Setup/setup_side.jpeg",
    alt: "Sensor setup side view",
  },
  {
    src: "/src/assets/images/Setup/setup_side_6.jpeg",
    alt: "Complete sensor arrangement",
  },
  {
    src: "/src/assets/images/Setup/sideview_nobackground.jpeg",
    alt: "Clean side view",
  },
  {
    src: "/src/assets/images/Setup/franz_calibiration.jpeg",
    alt: "Sensor calibration setup",
  },
];

export default function SensorSetup() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl dark:text-white">
          Sensor Setup
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
          Advanced multi-sensor data collection system deployed across Europe
          over two years
        </p>
      </div>

      {/* Carousel Section */}
      <div className="mb-16">
        <Carousel images={setupImages} height={500} />
      </div>

      {/* Overview Section */}
      <div className="mb-16">
        <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
          <div className="mb-6 flex items-center gap-3">
            <Car className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Overview
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            The data collection has been conducted using several vehicles with
            an identical sensor layout driven around Europe over two years. The
            cars are equipped with a <strong>high-resolution camera</strong>,
            <strong> 3x LiDARs</strong>, a{" "}
            <strong>high-precision GNSS/IMU sensor</strong> and other
            consumer-grade sensors. The sensor setup is outlined in the images
            above and each sensor is described in more detail below.
          </p>
        </div>
      </div>

      {/* Sensors Grid */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Camera */}
        <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
          <div className="mb-6 flex items-center gap-3">
            <Camera className="h-8 w-8 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Camera
            </h3>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
              1x 120° FOV 3848x2168 RGB camera
            </span>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              The camera data is captured by high-resolution (8MP) wide-angle
              fish-eye lenses. All raw captured camera data is converted to RGB
              images using an internal production-level image signal processor.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                RGB camera images captured at <strong>10.1Hz</strong>
              </li>
              <li>
                Provided as <strong>JPG files</strong> (lossless PNG available
                on request)
              </li>
              <li>120° field of view for comprehensive scene coverage</li>
              <li>Production-level image processing pipeline</li>
            </ul>
          </div>
        </div>

        {/* LiDAR */}
        <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
          <div className="mb-6 flex items-center gap-3">
            <Radar className="h-8 w-8 text-purple-600" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              LiDAR
            </h3>
            <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              1x Velodyne VLS128 + 2x Velodyne VLP16
            </span>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              The LiDAR point clouds are captured at ~9Hz and stored in a
              standard binary file format (.npy) per scan. Each file contains
              data from all three LiDAR sensors.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                6-dimensional vector: timestamp, 3D coordinates (x, y, z),
                intensity, diode index
              </li>
              <li>Timestamp relative to frame timestamp in UTC</li>
              <li>3D coordinates in meters, intensity 0-255</li>
              <li>
                Diode index: [0, 128) VLS128, [128, 144) & [144, 160) left/right
                VLP-16
              </li>
              <li>
                <strong>~254k points</strong> on average, range up to{" "}
                <strong>245m</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Radar */}
        <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
          <div className="mb-6 flex items-center gap-3">
            <Cpu className="h-8 w-8 text-red-600" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Radar
            </h3>
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800 dark:bg-red-900 dark:text-red-200">
              Continental ARS513 B1 sample – year 2022
            </span>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              The radar point clouds are captured every 60ms and stored in
              binary format (.npy) with comprehensive metadata including
              timestamps, spatial coordinates, and quality metrics.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Mode 0
                </h4>
                <p className="text-sm">Speed: &lt;60-65 kph</p>
                <p className="text-sm">Range: 102m</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Mode 1
                </h4>
                <p className="text-sm">Speed: 60-115 kph</p>
                <p className="text-sm">Range: 178.5m</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Mode 2
                </h4>
                <p className="text-sm">Speed: &gt;115 kph</p>
                <p className="text-sm">Range: 250m</p>
              </div>
            </div>
            <ul className="list-disc space-y-2 pl-6">
              <li>Azimuth angle: -50° to +50°</li>
              <li>Quality values: 0-2 (2 = highest quality)</li>
              <li>Includes range rate, amplitude/SNR, validity indicators</li>
            </ul>
          </div>
        </div>

        {/* GNSS/IMU */}
        <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
          <div className="mb-6 flex items-center gap-3">
            <Navigation className="h-8 w-8 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              GNSS/IMU
            </h3>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              High-precision OxTS
            </span>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              The high-precision GNSS/IMU data is logged at 100Hz and stored as
              HDF5 files, providing comprehensive positioning and orientation
              data.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Position
                </h4>
                <p className="text-sm">Accuracy: 0.01m</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Pitch/Roll
                </h4>
                <p className="text-sm">Accuracy: 0.03°</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Heading
                </h4>
                <p className="text-sm">Accuracy: 0.1°</p>
              </div>
            </div>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Logged at <strong>100Hz</strong> sampling rate
              </li>
              <li>
                Includes latitude, longitude, altitude, heading, pitch, roll
              </li>
              <li>Velocities, accelerations, and angular rates</li>
              <li>
                Poses relative to first pose in file for trajectory tracking
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vehicle Data Section */}
      <div className="mt-16">
        <div className="rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 p-8 shadow-lg dark:from-gray-800 dark:to-gray-700">
          <div className="mb-6 flex items-center gap-3">
            <Car className="h-8 w-8 text-indigo-600" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Vehicle Data
            </h3>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              Production-grade vehicle data
            </span>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Various vehicle data are also released for Sequences and Drives,
              providing comprehensive insights into vehicle dynamics and driver
              behavior.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Control Signals (100Hz)
                </h4>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Steering wheel angle</li>
                  <li>Acceleration/brake pedal ratios</li>
                  <li>Turn indicator status</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Consumer IMU (50Hz)
                </h4>
                <ul className="list-disc space-y-1 pl-6">
                  <li>Acceleration data</li>
                  <li>Angular velocity</li>
                  <li>Orientation estimates</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  Satellite Positioning (1Hz)
                </h4>
                <ul className="list-disc space-y-1 pl-6">
                  <li>GPS coordinates</li>
                  <li>Altitude information</li>
                  <li>Speed estimates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
