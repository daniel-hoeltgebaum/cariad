export default function Home() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-start px-4 py-8 text-center">
      {/* Überschrift */}
      <h1 className="inter-bold mb-6 text-5xl sm:text-6xl md:text-7xl">
        Driving Dataset
      </h1>
      {/* Fließtext */}
      <p className="text-muted-foreground inter-regular max-w-3xl text-lg leading-relaxed sm:text-xl">
        We have published the Audi Autonomous Driving Dataset (A2D2) to support
        startups and academic researchers working on autonomous driving.
        Equipping a vehicle with a multimodal sensor suite, recording a large
        dataset, and labelling it, is time and labour intensive. Our dataset
        removes this high entry barrier and frees researchers and developers to
        focus on developing new technologies instead. The dataset features 2D
        semantic segmentation, 3D point clouds, 3D bounding boxes, and vehicle
        bus data.
      </p>
    </div>
  );
}
