import { NavLink } from "react-router-dom";
import Carousel from "../components/carousel";
import PlaybackPage from "@/components/playbackPage";

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

const cards = [
  {
    title: "Sensor Setup",
    img: "src/assets/images/sensor_setup.jpg",
    link: "/sensor-setup",
  },
  {
    title: "Dataset",
    img: "src/assets/images/dataset.jpg",
    link: "/dataset",
  },
  {
    title: "Tutorial",
    img: "src/assets/images/tutorial.jpg",
    link: "/tutorial",
  },
  {
    title: "Team",
    img: "src/assets/images/team.jpg",
    link: "/team",
  },
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

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {cards.map((card, i) => (
              <NavLink
                to={card.link}
                key={i}
                className="group relative block overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 rounded bg-black/70 px-3 py-1 text-sm text-white">
                  {card.title}
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section>
        <PlaybackPage />
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
