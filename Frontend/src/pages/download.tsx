export default function Download() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {/* Überschrift */}
      <h1 className="inter-bold mb-6 text-5xl sm:text-6xl md:text-7xl">
        Download
      </h1>
      {/* Fließtext */}
      <p className="text-muted-foreground inter-regular max-w-3xl text-lg leading-relaxed sm:text-xl">
        A2D2 is around 2.3 TB in total. It is split by annotation type (i.e.
        semantic segmentation, 3D bounding box), to break up the download into
        smaller packages. Each split is packaged into a single tar file, while
        the remaining unlabelled sequence data is split into multiple tar files.
      </p>
    </div>
  );
}
