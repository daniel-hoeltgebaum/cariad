import {
  Mail,
  Download as DownloadIcon,
  ExternalLink,
  Terminal,
} from "lucide-react";

export default function Download() {
  const downloadMethods = [
    {
      icon: DownloadIcon,
      title: "CLI Tool (Recommended)",
      description: "Use our command line interface for easy downloading",
      color: "blue",
      features: [
        "Interactive download process",
        "Resume interrupted downloads",
        "Selective data stream downloads",
        "Progress tracking",
      ],
    },
    {
      icon: ExternalLink,
      title: "Academic Torrents",
      description: "Download via torrent for better reliability",
      color: "green",
      features: [
        "Distributed downloading",
        "Integrity verification",
        "No access request needed",
        "Peer-to-peer sharing",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl dark:text-white">
          Downloading ZOD
        </h1>
        <p className="mx-auto max-w-4xl text-lg text-gray-600 dark:text-gray-400">
          We provide two convenient ways to download the Zenseact Open Dataset:
          through our CLI tool with Dropbox integration or via Academic Torrents
          for distributed downloading.
        </p>
      </div>

      {/* Download Methods */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
          Download Methods
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {downloadMethods.map((method, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800"
            >
              <div className="mb-6 flex items-center gap-4">
                <div
                  className={`rounded-lg bg-${method.color}-100 p-3 text-${method.color}-600 dark:bg-${method.color}-900 dark:text-${method.color}-400`}
                >
                  <method.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {method.title}
                  </h3>
                </div>
              </div>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {method.description}
              </p>
              <ul className="space-y-2">
                {method.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <div
                      className={`h-1.5 w-1.5 rounded-full bg-${method.color}-500`}
                    ></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Requesting Access */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
          Requesting Access
        </h2>
        <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 dark:from-blue-900/20 dark:to-indigo-900/20">
          <div className="mb-6 flex items-start gap-4">
            <Mail className="h-8 w-8 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                Email Access Request
              </h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                To download via CLI tool, please email us at{" "}
                <a
                  href="mailto:opendataset@zenseact.com"
                  className="font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400"
                >
                  opendataset@zenseact.com
                </a>{" "}
                with the following information:
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="mb-4 font-bold text-gray-900 dark:text-white">
                Required Information:
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  Your name
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  Your affiliation
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  Email connected to your Dropbox account
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                  Short description of intended use
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold text-gray-900 dark:text-white">
                Email Template:
              </h4>
              <div className="rounded-lg bg-gray-900 p-4 text-sm text-green-400">
                <code>
                  Dear Zenseact,
                  <br />
                  <br />
                  I am interested in using the Zenseact Open Dataset (ZOD)
                  <br />
                  for my research and would like to request access.
                  <br />
                  <br />
                  Name: &lt;your name&gt;
                  <br />
                  Affiliation: &lt;your affiliation&gt;
                  <br />
                  Email: &lt;your email address&gt;
                  <br />
                  Intended use: &lt;description&gt;
                  <br />
                  <br />
                  Best regards,
                  <br />
                  &lt;your name&gt;
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CLI Download Instructions */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white">
          Download using the CLI
        </h2>
        <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
          <div className="mb-6 flex items-center gap-3">
            <Terminal className="h-8 w-8 text-gray-700 dark:text-gray-300" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Command Line Interface
            </h3>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="mb-3 font-bold text-gray-900 dark:text-white">
                Basic Installation & Download:
              </h4>
              <div className="rounded-lg bg-gray-900 p-4 text-green-400">
                <code className="text-sm">
                  # Install ZOD CLI tool
                  <br />
                  pip install zod[cli]
                  <br />
                  <br />
                  # Start interactive download
                  <br />
                  zod download
                </code>
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-bold text-gray-900 dark:text-white">
                Direct Command (No Confirmation):
              </h4>
              <div className="rounded-lg bg-gray-900 p-4 text-green-400">
                <code className="text-sm">
                  zod download -y --url="&lt;download-link&gt;" \<br />
                  &nbsp;&nbsp;--output-dir=&lt;path/to/outputdir&gt; \<br />
                  &nbsp;&nbsp;--subset=frames --version=mini
                </code>
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-bold text-gray-900 dark:text-white">
                Full Download with All Data:
              </h4>
              <div className="rounded-lg bg-gray-900 p-4 text-green-400">
                <code className="text-sm">
                  zod download -y --url="&lt;download-link&gt;" \<br />
                  &nbsp;&nbsp;--output-dir=&lt;path/to/outputdir&gt; \<br />
                  &nbsp;&nbsp;--subset=frames --version=full \<br />
                  &nbsp;&nbsp;--num-scans-before=-1 --num-scans-after=-1 --dnat
                </code>
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-bold text-gray-900 dark:text-white">
                Selective Download (DNAT images only):
              </h4>
              <div className="rounded-lg bg-gray-900 p-4 text-green-400">
                <code className="text-sm">
                  zod download --dnat --no-blur --no-lidar \<br />
                  &nbsp;&nbsp;--no-oxts --no-vehicle-data
                </code>
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-bold text-gray-900 dark:text-white">
                Get Help:
              </h4>
              <div className="rounded-lg bg-gray-900 p-4 text-green-400">
                <code className="text-sm">zod download --help</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
