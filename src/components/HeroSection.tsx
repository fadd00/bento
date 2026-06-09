export default function HeroSection() {
  return (
    <header className="relative w-full h-48 sm:h-56 overflow-hidden mb-6">
      <div className="hero-bg absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary" />

      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-content mx-auto px-4">
          <div className="flex items-end gap-4 sm:gap-5 translate-y-8 sm:translate-y-10">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-4 border-bg-primary bg-bg-secondary shadow-xl shrink-0">
              <img
                src="/avatar.png"
                alt="Fadd"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pb-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1 leading-tight">
                Fadd
              </h1>
              <p className="text-fg-secondary text-sm sm:text-base tracking-wide font-normal">
                Backend Developer &bull; IT Student
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
