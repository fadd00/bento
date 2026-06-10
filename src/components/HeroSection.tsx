export default function HeroSection() {
  return (
    <header className="relative w-full">
      <img
        src="/hero-bg.png"
        alt=""
        className="w-full h-auto block"
        aria-hidden="true"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Fade to black at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary" />
    </header>
  );
}
