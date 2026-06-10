export default function ProfileSection() {
  return (
    <section className="flex items-center gap-4 sm:gap-5 py-10 sm:py-14">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-2xl shrink-0">
        <img
          src="/avatar.png"
          alt="Fadd"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1 leading-tight">
          Fadd
        </h1>
        <p className="text-fg-secondary text-sm sm:text-base tracking-wide">
          Backend Developer &bull; IT Student
        </p>
      </div>
    </section>
  );
}
