import React, { useState, useEffect } from 'react';
import { useInView, AnimatePresence, motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { Trash2, X, Loader2 } from 'lucide-react';

type ImageGalleryProps = {
  images: string[];
  loading?: boolean;
  embedded?: boolean;
  isAdmin?: boolean;
  onDelete?: (url: string) => void;
};

const BATCH_SIZE = 12;

export function ImageGallery({ images, loading = false, embedded = false, isAdmin, onDelete }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(BATCH_SIZE);

  useEffect(() => {
    // Reset visible count when category images change
    setVisibleCount(BATCH_SIZE);
  }, [images]);

  if (loading) {
    return (
      <div className="mx-auto w-full max-w-5xl px-3 py-10 sm:px-4 sm:py-16">
        <div className="columns-2 gap-4 space-y-4 sm:gap-6 sm:space-y-6 lg:columns-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="break-inside-avoid">
              <AspectRatio ratio={i % 2 === 0 ? 9 / 16 : 16 / 9} className="rounded-lg bg-zinc-200 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="flex w-full items-center justify-center py-20">
        <p className="text-sm text-zinc-400">No photos uploaded yet for this gallery.</p>
      </div>
    );
  }

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, images.length));
  };

  return (
    <>
      <div
        className={cn(
          'relative flex w-full flex-col items-center justify-center px-3 sm:px-4',
          embedded ? 'bg-transparent py-2 sm:py-4' : 'min-h-0 bg-white py-10 sm:min-h-screen sm:py-16',
        )}
      >
        <div className="mx-auto w-full max-w-5xl columns-2 gap-4 space-y-4 sm:gap-6 sm:space-y-6 lg:columns-3">
          {visibleImages.map((src, index) => {
            const isPortrait = index % 2 === 0;
            const ratio = isPortrait ? 9 / 16 : 16 / 9;

            return (
              <div key={`${index}-${src}`} className="relative break-inside-avoid">
                <AnimatedImage alt={`Gallery ${index + 1}`} src={src} ratio={ratio} onClick={() => setSelectedImage(src)} priority={index < 4} />
                {isAdmin && onDelete && (
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this photo?')) {
                        onDelete(src);
                      }
                    }}
                    className="absolute right-2 top-2 z-20 rounded-full bg-black/60 p-2 text-white hover:bg-red-500 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Lazy load more photos trigger button */}
        {hasMore && (
          <div className="mt-10 flex justify-center pb-8">
            <button
              onClick={handleLoadMore}
              className="flex items-center gap-2 rounded-full border border-zinc-900 bg-zinc-900 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-orange-500 hover:border-orange-500"
            >
              <span>Load More Photos ({visibleCount} of {images.length})</span>
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm select-none"
            onClick={() => setSelectedImage(null)}
            onContextMenu={(e) => e.preventDefault()}
          >
            <button
              className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-[90vh] w-[90vw] items-center justify-center select-none"
              onClick={(e) => e.stopPropagation()}
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                src={selectedImage}
                alt="Fullscreen view"
                className="h-full w-full object-contain select-none pointer-events-none"
                draggable={false}
              />
              {/* Anti-download transparent overlay */}
              <div className="absolute inset-0 z-10 bg-transparent" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

type AnimatedImageProps = {
  alt: string;
  src: string;
  ratio: number;
  onClick: () => void;
  priority?: boolean;
};

function AnimatedImage({ alt, src, ratio, onClick, priority }: AnimatedImageProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  // Trigger loading 200px before the element enters the viewport
  const isInView = useInView(ref, { once: true, margin: '200px 0px' });
  const [isLoading, setIsLoading] = React.useState(true);
  const [imgSrc, setImgSrc] = React.useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <div 
      className="cursor-zoom-in group relative" 
      onClick={onClick}
      onContextMenu={(e) => e.preventDefault()}
    >
      <AspectRatio ref={ref} ratio={ratio} className={cn("relative size-full rounded-lg border border-zinc-200 bg-zinc-100 overflow-hidden", isLoading && "animate-pulse")}>
        {(isInView || priority) ? (
          <img
            alt={alt}
            src={imgSrc}
            className={cn(
              'size-full rounded-lg object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:scale-105 pointer-events-none select-none',
              !isLoading && 'opacity-100',
            )}
            onLoad={() => setIsLoading(false)}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
            onError={() => setImgSrc('/hero.png')}
            draggable={false}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-zinc-100">
            <Loader2 className="h-4 w-4 animate-spin text-zinc-300" />
          </div>
        )}
        {/* Anti-download overlay */}
        <div className="absolute inset-0 z-10 bg-transparent" />
      </AspectRatio>
    </div>
  );
}
