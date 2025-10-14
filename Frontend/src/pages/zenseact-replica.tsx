export default function ZenseactReplica() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Zenseact Open Dataset
              </h1>
            </div>
            <div className="hidden items-center space-x-6 md:flex">
              <a
                href="#frames"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Frames
              </a>
              <a
                href="#sequences"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Sequences
              </a>
              <a
                href="#drives"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Drives
              </a>
              <a
                href="#annotations"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Annotations
              </a>
              <a
                href="#download"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Download
              </a>
              <a
                href="#team"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Team
              </a>
              <a
                href="#license"
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                License
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Zenseact Open Dataset
          </h1>
          <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
            A large multi-modal autonomous driving dataset collected over 2
            years across 14 European countries. Three data subsets available:
            Frames, Sequences, and Drives.
          </p>

          {/* Placeholder for main hero image */}
          <div className="mb-8 flex h-64 w-full items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700">
            <div className="text-center">
              <div className="mb-2 text-4xl">🚗</div>
              <p className="text-gray-500 dark:text-gray-400">
                Hero Image Placeholder
              </p>
              <p className="text-sm text-gray-400">
                Autonomous Driving Dataset Visual
              </p>
            </div>
          </div>
        </section>

        {/* Dataset Overview */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Dataset Overview
          </h2>
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold">Frames</h3>
              <div className="mb-4 flex h-32 w-full items-center justify-center rounded bg-gray-200 dark:bg-gray-700">
                <div className="text-center">
                  <div className="mb-1 text-2xl">📷</div>
                  <p className="text-xs text-gray-500">Frame Data</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                High-resolution camera images with 2D/3D annotations
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold">Sequences</h3>
              <div className="mb-4 flex h-32 w-full items-center justify-center rounded bg-gray-200 dark:bg-gray-700">
                <div className="text-center">
                  <div className="mb-1 text-2xl">🎬</div>
                  <p className="text-xs text-gray-500">Sequence Data</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Short temporal sequences with multi-modal sensor data
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold">Drives</h3>
              <div className="mb-4 flex h-32 w-full items-center justify-center rounded bg-gray-200 dark:bg-gray-700">
                <div className="text-center">
                  <div className="mb-1 text-2xl">🛣️</div>
                  <p className="text-xs text-gray-500">Drive Data</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Complete driving scenarios with full sensor suite
              </p>
            </div>
          </div>
        </section>

        {/* Annotations Section */}
        <section className="mb-12" id="annotations">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Annotations
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Comprehensive set of annotations for several different autonomous
            driving tasks:
          </p>

          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <div>
                    <strong>Object Detection:</strong> 2D and 3D bounding boxes
                    for static and dynamic objects
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <div>
                    <strong>Lane Marking Segmentation:</strong> Instance and
                    semantic segmentation
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <div>
                    <strong>Traffic Sign Classification:</strong> 156 different
                    traffic sign classes
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <div>
                    <strong>Road Condition Classification:</strong> Surface
                    conditions (wet, snow, etc.)
                  </div>
                </li>
              </ul>
            </div>

            {/* Placeholder for annotation examples */}
            <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700">
              <div className="text-center">
                <div className="mb-2 text-3xl">🏷️</div>
                <p className="text-gray-500 dark:text-gray-400">
                  Annotation Examples
                </p>
                <p className="text-sm text-gray-400">
                  Bounding boxes, lane markings, etc.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sensor Setup Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Sensor Setup
          </h2>
          <div className="mb-6 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-semibold">Camera System</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• 1x 120° high-resolution camera</li>
                  <li>• 3848x2168 RGB resolution</li>
                  <li>• 10.1Hz capture frequency</li>
                </ul>

                <h3 className="mt-6 mb-4 text-xl font-semibold">
                  LiDAR Sensors
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• 3 LiDAR sensors</li>
                  <li>• ~9Hz frequency</li>
                  <li>• 254k points per scan</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-xl font-semibold">
                  Additional Sensors
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• High-precision GNSS/IMU (100Hz)</li>
                  <li>• Radar point cloud data (60ms interval)</li>
                  <li>• Multi-modal sensor fusion</li>
                </ul>

                {/* Placeholder for sensor setup diagram */}
                <div className="mt-4 flex h-32 w-full items-center justify-center rounded bg-gray-200 dark:bg-gray-700">
                  <div className="text-center">
                    <div className="mb-1 text-2xl">📡</div>
                    <p className="text-xs text-gray-500">
                      Sensor Setup Diagram
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Anonymization Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Anonymization
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            We use Brighter AI's Deep Neural Anonymization Technology to protect
            privacy and comply with GDPR regulations. All faces and license
            plates are automatically anonymized.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex h-48 w-full items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700">
              <div className="text-center">
                <div className="mb-2 text-3xl">👤</div>
                <p className="text-gray-500 dark:text-gray-400">
                  Face Anonymization
                </p>
                <p className="text-sm text-gray-400">Before/After Comparison</p>
              </div>
            </div>

            <div className="flex h-48 w-full items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700">
              <div className="text-center">
                <div className="mb-2 text-3xl">🚗</div>
                <p className="text-gray-500 dark:text-gray-400">
                  License Plate Anonymization
                </p>
                <p className="text-sm text-gray-400">Before/After Comparison</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="mb-12">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Technical Highlights
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-blue-50 p-4 text-center dark:bg-blue-900/20">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                2 Years
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Data Collection Period
              </p>
            </div>
            <div className="rounded-lg bg-green-50 p-4 text-center dark:bg-green-900/20">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                14
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                European Countries
              </p>
            </div>
            <div className="rounded-lg bg-purple-50 p-4 text-center dark:bg-purple-900/20">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                CC BY-SA
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Open License
              </p>
            </div>
            <div className="rounded-lg bg-orange-50 p-4 text-center dark:bg-orange-900/20">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                Multi-Modal
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Sensor Data
              </p>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="mb-12" id="download">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Download
          </h2>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              The Zenseact Open Dataset is available under the CC BY-SA 4.0
              license. Access the development kit and download instructions on
              GitHub.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                Download Dataset
              </button>
              <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
                View on GitHub
              </button>
            </div>
          </div>
        </section>

        {/* License Section */}
        <section className="mb-12" id="license">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            License
          </h2>
          <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              The Zenseact Open Dataset is the only autonomous driving dataset
              released under the
              <strong> CC BY-SA 4.0</strong> license, enabling both academic and
              commercial use.
            </p>
            <a
              href="#"
              className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
            >
              Read full license terms →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© 2024 Zenseact. Released under CC BY-SA 4.0 License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
