import Carousel from "../components/carousel";

const carousel1 = [
  { src: "src/assets/images/dynamic_objects.jpg", alt: "dynamic objects" },
  { src: "src/assets/images/static_objects.jpg", alt: "static objects" },
  { src: "src/assets/images/lane_markings.jpg", alt: "lane markings" },
  { src: "src/assets/images/ego_road.jpg", alt: "ego road" },
];

const carousel2 = [
  { src: "src/assets/images/anon-faces.png", alt: "anonymized faces" },
  { src: "src/assets/images/anon-plates.png", alt: "anonymized plates" },
];

export default function Home() {
  return (
    <div className="prose dark:prose-invert mx-auto max-w-5xl px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Zenseact Open Dataset</h1>
        <p className="text-gray-700 dark:text-gray-300">
          The <strong>Zenseact Open Dataset</strong> (ZOD) is a large
          multi-modal autonomous driving (AD) dataset... The development kit is
          available on{" "}
          <a
            href="https://github.com/zenseact/zod"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            Github
          </a>
          .
        </p>

        <div className="notice--success mt-3">
          <strong>News:</strong>{" "}
          <span className="ml-2">
            Jan. 27, 2025 — We have added radar point cloud data to ZOD
            Sequences and Drives.
          </span>
        </div>
      </div>

      <section className="mb-8">
        <h2>Annotations</h2>
        <p>
          Together with our dataset, we also release a comprehensive set of
          annotations for several different tasks. For details visit the{" "}
          <a href="/annotations" className="text-primary underline">
            Annotations
          </a>{" "}
          page.
        </p>

        <ul>
          <li>
            <strong>Objects:</strong> 2D and 3D bounding boxes for static and
            dynamic objects.
          </li>
          <li>
            <strong>Lane markings:</strong> Instance and semantic segmentation
            of lane markings and road paintings.
          </li>
          <li>
            <strong>Ego road:</strong> Semantic segmentation of ego-road.
          </li>
          <li>
            <strong>Traffic signs:</strong> Classification labels with 156
            classes.
          </li>
          <li>
            <strong>Road condition:</strong> Classification of road-surface
            (e.g., wet or snow).
          </li>
        </ul>

        <div className="mt-6">
          <Carousel images={carousel1} height={450} />
        </div>
      </section>

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

      <section className="mb-8">
        <h2>Anonymization</h2>
        <p>
          We anonymize images to protect privacy and comply with GDPR using
          third-party services (e.g. Brighter AI). For Frames we provide DNAT
          and blurring; Sequences/Drives are blurred.
        </p>

        <div className="mt-4">
          <Carousel images={carousel2} />
        </div>

        <p className="mt-4">
          For more details see the{" "}
          <a href="/paper" className="text-primary underline">
            paper
          </a>{" "}
          and the Brighter AI product page.
        </p>
      </section>

      <section className="mb-8">
        <h2>Citation</h2>
        <p>
          If you publish work that uses Zenseact Open Dataset, please cite our
          paper:
        </p>
        <pre className="overflow-auto rounded bg-gray-100 p-4 text-sm">
          {`@inproceedings{alibeigi2023zenseact,
  title={Zenseact Open Dataset: A large-scale and diverse multimodal dataset for autonomous driving},
  author={Alibeigi, Mina and Ljungbergh, William and ...},
  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
  year={2023}
}`}
        </pre>
      </section>
    </div>
  );
}
