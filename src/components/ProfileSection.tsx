export default function ProfileSection() {
  return (
    <section className="py-8 sm:py-10 border-b border-white/[0.06]">
      <div className="flex items-center gap-4 sm:gap-5 mb-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-xl shrink-0 border border-white/10">
          <img
            src="/avatar.webp"
            alt="Dhika"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            Dhika
          </h1>
          <p className="text-fg-secondary text-xs sm:text-sm tracking-wide mt-0.5">
            Backend Specialist &bull; Co-Builder at{' '}
            <a
              href="https://www.linkedin.com/company/modern-solution-it/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline underline-offset-4 inline-flex items-center gap-0.5 group"
            >
              <span>MOSU</span>
              <span className="text-[10px] text-muted-text group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </p>
        </div>
      </div>

      <p className="text-fg-secondary text-xs sm:text-sm leading-relaxed max-w-xl mb-4">
        Architecting core backend services, RESTful APIs, and CI/CD pipelines. Working primarily with <span className="text-white font-medium">Go, Laravel, Node.js, and PostgreSQL</span>.
      </p>

      {/* Seamless inline actions */}
      <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-fg-secondary flex-wrap">
        <a
          href="https://wa.me/6282310180884?text=Hi%20Dhika,%20I%20saw%20your%20portfolio."
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1 group"
        >
          <span>WhatsApp</span>
          <span className="text-[10px] text-muted-text group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </a>
        <span className="text-white/10">&bull;</span>
        <a
          href="mailto:andhikahutama9@gmail.com"
          className="hover:text-white transition-colors flex items-center gap-1 group"
        >
          <span>Email</span>
          <span className="text-[10px] text-muted-text group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </a>
        <span className="text-white/10">&bull;</span>
        <a
          href="https://github.com/fadd00"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1 group"
        >
          <span>GitHub</span>
          <span className="text-[10px] text-muted-text group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </a>
        <span className="text-white/10">&bull;</span>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1 group"
        >
          <span>CV</span>
          <span className="text-[10px] text-muted-text group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </a>
      </div>
    </section>
  );
}
