import { motion } from 'framer-motion';
import { staggerContainerVariants, slideRightItemVariants } from '../../lib/animations';

const tracks = [
  { title: '晴る - Sunny', artist: 'Yorushika', image: 'https://i.ytimg.com/vi/PXkHAlskFAM/maxresdefault.jpg' },
  { title: 'Fake Plastic Trees', artist: 'Radiohead', image: 'https://i.ytimg.com/vi/6gDhsUWCHrg/maxresdefault.jpg' },
  { title: 'Adu Nasib', artist: 'Riski Inrahim', image: 'https://i.ytimg.com/vi/LyDihaEYkAQ/maxresdefault.jpg' },
  { title: 'About You', artist: 'The 1975', image: 'https://i.ytimg.com/vi/4PgOJwUCdIc/maxresdefault.jpg' },
  { title: '505', artist: 'Arctic Monkeys', image: 'https://i.ytimg.com/vi/qU9mHegkTc4/maxresdefault.jpg' },
  { title: 'Dancing in the Moonlight', artist: 'Toploader', image: 'https://i.ytimg.com/vi/67CN8FOCc84/maxresdefault.jpg' },
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
      <section>
        <h3 className="text-2xl font-semibold text-white mb-8">yes, my music is random</h3>
        <a 
          href="https://music.youtube.com/playlist?list=PLges8okB7NyXHMaSgD80xmtmPktMishak&si=9o2qnungYkyPdi50" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-fg-secondary mb-6 inline-block hover:underline underline-offset-4"
        >
          My comfort playlist.
        </a>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
          {tracks.map((track) => (
            <motion.div
              key={track.title}
              variants={slideRightItemVariants}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              {/* Album art */}
              <img
                src={track.image}
                alt={`${track.title} album art`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-white font-semibold text-base truncate">{track.title}</h4>
                <p className="text-white/70 text-sm truncate">{track.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      
    </motion.div>
  );
}
