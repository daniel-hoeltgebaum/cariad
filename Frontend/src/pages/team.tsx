export default function Team() {
  return (
    <div className="bg-background flex min-h-screen flex-col items-center justify-start px-4 text-center">
      {/* Überschrift */}
      <h1 className="inter-bold mb-6 text-5xl sm:text-6xl md:text-7xl">Team</h1>
      {/* Fließtext */}
      <p className="text-muted-foreground inter-regular max-w-3xl text-lg leading-relaxed sm:text-xl">
        We are a multi-disciplinary team of computer scientists, engineers,
        physicists, and mathematicians addressing some of today’s biggest
        challenges in AI, robotics, and autonomous driving technology. Our
        internal work on perception led to the creation of A2D2, and its public
        release reflects our team culture of openness, collaboration, and
        community spirit. Likewise, the highly international nature of our team
        embodies a belief that creativity thrives when nurtured by diversity of
        thought, opinion, and experience.
      </p>
    </div>
  );
}
