import { motion } from 'framer-motion';

export function ShootSection() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-black py-32 sm:py-44 lg:py-56">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/n1.jpg"
          alt="Let's shoot your story"
          className="h-full w-full object-cover object-center"
        />
        {/* Subtle Gradient & Contrast Mask focused on left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      {/* Content Container - Far Left Aligned */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-sm sm:max-w-md lg:max-w-lg"
        >
          <h2 className="font-serif text-4xl font-normal leading-[1.15] text-white sm:text-5xl lg:text-6xl">
            Let's shoot
            <br />
            your story.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-200 sm:mt-6 sm:text-lg">
            Where wedding photography meets chaos, charm, and chemistry.
          </p>

          <div className="mt-8 sm:mt-10">
            <a
              href="#contact"
              className="inline-block border border-white/80 px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:text-sm"
            >
              CONTACT US
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
