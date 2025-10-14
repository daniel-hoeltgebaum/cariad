export default function License() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-start px-4 py-8 text-center">
      <h1 className="inter-bold mb-8 text-5xl sm:text-6xl md:text-7xl">
        License
      </h1>
      <div className="max-w-4xl space-y-6">
        <p className="inter-regular text-lg leading-relaxed text-muted-foreground sm:text-xl">
          The Zenseact Open Dataset (ZOD) is the property of Zenseact AB (© 2022 Zenseact AB)
          and is licensed under the permissive CC BY-SA.
        </p>
        <p className="inter-regular text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Any public use, distribution, or display of this dataset must contain this entire notice:
          For this dataset, Zenseact AB has taken all reasonable measures to remove all personally
          identifiable information, including faces and license plates.
        </p>
        <p className="inter-regular text-lg leading-relaxed text-muted-foreground sm:text-xl">
          To request removal of specific images from the dataset, please contact{" "}
          <a href="mailto:privacy@zenseact.com" className="text-primary hover:underline">
            privacy@zenseact.com
          </a>
        </p>
        <p className="inter-regular text-lg leading-relaxed text-muted-foreground sm:text-xl">
          The purpose of Zenseact is to save lives in road traffic. We encourage use of this
          dataset with the intention of avoiding losses in road traffic. ZOD is not intended
          for military use.
        </p>
        <p className="inter-regular text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Together with this dataset, we release a development kit (find more information under Docs)
          containing a set of tools to help you get started with and use the dataset. The development
          kit is hosted on this GitHub repository and is licensed under the MIT License.
        </p>
      </div>
    </div>
  );
}
