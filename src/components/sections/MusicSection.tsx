import { motion } from 'framer-motion';
import { staggerContainerVariants, slideRightItemVariants } from '../../lib/animations';

const tracks = [
  { title: 'Adu Nasib', artist: 'Riski Inrahim', duration: '3:24', image: 'https://i.ytimg.com/vi/LyDihaEYkAQ/hqdefault.jpg' },
  { title: 'About You', artist: 'The 1975', duration: '4:12', image: 'https://i.ytimg.com/vi/4PgOJwUCdIc/hqdefault.jpg' },
  { title: '505', artist: 'Arctic Monkeys', duration: '5:01', image: 'https://i.ytimg.com/vi/qU9mHegkTc4/hqdefault.jpg' },
  { title: 'Dancing in the Moonlight', artist: 'Toploader', duration: '3:58', image: 'https://i.ytimg.com/vi/67CN8FOCc84/hqdefault.jpg' },
];

const genres = ['Jazz', 'J-pop', 'Indie Rock', 'Rage rap', 'Ambient'];

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
          <img
            src="https://i.ytimg.com/vi/PXkHAlskFAM/hqdefault.jpg"
            alt="晴る - Sunny album art"
            className="w-20 h-20 rounded-lg object-cover shrink-0 shadow-lg"
          />
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase mb-1.5 text-indigo-400">
              Now Playing
            </p>
            <h3 className="text-xl font-semibold text-white mb-1">晴る - Sunny</h3>
            <p className="text-sm text-fg-secondary">Yorushika &middot; second person</p>
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
              <img
                src={track.image}
                alt={`${track.title} album art`}
                className="w-11 h-11 rounded-lg object-cover shrink-0 group-hover:scale-105 transition-transform duration-200"
              />
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
