import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { type GalleryCategory } from '@/data/gallery';

const CATEGORIES: Array<{ key: GalleryCategory; label: string; image: string }> = [
  { key: 'outdoor', label: 'Outdoor', image: '/SAMPLE PICS/SAMPLE PICS/009 OUTDOOR/0 (10) (website).jpg' },
  { key: 'candid', label: 'Candid', image: '/SAMPLE PICS/SAMPLE PICS/003 ENGAGEMENT/0 (2) (website).jpg' },
  { key: 'events', label: 'Events', image: '/SAMPLE PICS/SAMPLE PICS/001 RECEPTION/0 (6).jpg' },
  { key: 'others', label: 'Others', image: '/SAMPLE PICS/SAMPLE PICS/015 MODEL SHOOT/DSC05120 (website).JPG' },
  { key: 'candid_videos', label: 'Candid Videos', image: '/cand.png' },
  { key: 'drone_videos', label: 'Drone Videos', image: '/dr.png' },
];

export function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative z-20 rounded-t-2xl bg-zinc-50 px-4 pb-16 pt-12 shadow-[0_-16px_40px_rgba(0,0,0,0.1)] sm:rounded-t-[2rem] sm:px-8 sm:pb-20 sm:pt-16 sm:shadow-[0_-24px_48px_rgba(0,0,0,0.12)] lg:px-14 lg:pt-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Portfolio</p>
        <h2 className="mt-3 font-serif text-3xl text-black sm:text-4xl lg:text-5xl">Our Gallery</h2>
        <p className="mt-3 max-w-xl text-zinc-600">Discover Captivating Gallery Display</p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              to={`/collections/${cat.key}`}
              className="group relative h-48 overflow-hidden text-left transition-shadow sm:h-56 md:h-64 ring-1 ring-transparent hover:shadow-xl rounded-xl"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-transparent" />

              <div className="absolute bottom-3 left-3 flex items-stretch sm:bottom-4 sm:left-4">
                <div className="bg-white px-2.5 py-2 sm:px-3 sm:py-2.5">
                  <p className="text-xs font-bold text-black sm:text-sm leading-tight">{cat.label}</p>
                  <p className="text-[9px] sm:text-[10px] text-zinc-500">View Collection →</p>
                </div>
                <div className="flex w-8 items-center justify-center bg-orange-500 transition-colors group-hover:bg-orange-600 sm:w-10">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white sm:h-7 sm:w-7">
                    <ArrowUpRight className="h-3 w-3 text-white" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
