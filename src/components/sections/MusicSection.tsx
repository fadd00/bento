import { motion } from 'framer-motion';
import { staggerContainerVariants, slideRightItemVariants } from '../../lib/animations';

const tracks = [
  { title: 'Midnight Echo', artist: 'Atlas Bound', duration: '3:24', color: '#4F46E5' },
  { title: 'Neon Pulse', artist: 'Waveshaper', duration: '4:12', color: '#831843' },
  { title: 'Stellar Drift', artist: 'Homeomorphic', duration: '5:01', color: '#7C2D12' },
  { title: 'Hushed Tones', artist: 'Khruangbin', duration: '3:58', color: '#4F46E5' },
];

const genres = ['Lo-Fi Beats', 'Synthwave', 'Ambient', 'Electronic', 'Indie Pop'];

export default function MusicSection() {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="initial"
      animate="animate"
      className="flex flex-col gap-10 max-w-content mx-auto"
    >
      <motion.div
        variants={slideRightItemVariants}
        className="p-6 rounded-xl border-2 bg-gradient-to-br from-bg-primary to-indigo-950/30 border-indigo-500/30 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
      >
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-indigo-600 to-pink-800 flex items-center justify-center shrink-0 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="white" opacity="0.9">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-1.5 text-indigo-400">
              Now Playing
            </p>
            <h3 className="text-xl font-semibold text-white mb-1">Lo-Fi Coding Session</h3>
            <p className="text-sm text-fg-secondary">chill beats &middot; lofi hip hop</p>
          </div>
        </div>
      </motion.div>

      <section>
        <h3 className="text-2xl font-semibold text-white mb-1">Currently on Repeat</h3>
        <p className="text-sm text-fg-secondary mb-6">
          A collection of tracks keeping me focused while coding.
        </p>

        <div className="flex flex-col gap-3">
          {tracks.map((track) => (
            <motion.div
              key={track.title}
              variants={slideRightItemVariants}
              className="glass-card flex items-center gap-4 p-4 group cursor-pointer"
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200"
                style={{ backgroundColor: track.color }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[15px] font-semibold text-white truncate">
                  {track.title}
                </div>
                <div className="text-[13px] text-fg-secondary">{track.artist}</div>
              </div>
              <span className="text-xs text-muted-text shrink-0 tabular-nums">
                {track.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section variants={slideRightItemVariants}>
        <h3 className="text-2xl font-semibold text-white mb-4">Favorite Genres</h3>
        <div className="flex flex-wrap gap-2">
          {genres.map((genre, i) => {
            const colors = [
              'text-indigo-400 border-indigo-400/50 bg-indigo-400/10',
              'text-pink-400 border-pink-400/50 bg-pink-400/10',
            ];
            const colorClass = colors[i % colors.length];
            return (
              <span
                key={genre}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${colorClass}`}
              >
                {genre}
              </span>
            );
          })}
        </div>
      </motion.section>
    </motion.div>
  );
}
