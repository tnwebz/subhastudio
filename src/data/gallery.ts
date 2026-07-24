export type ServiceSlug = 
  | 'birthday' 
  | 'hindu_wedding' 
  | 'christian_wedding'
  | 'naming_ceremony'
  | 'engagement'
  | 'housewarming'
  | 'puberty'
  | 'aldhi'
  | 'reception'
  | 'bangle_ceremony'
  | 'salangai_poojai'
  | 'maternity'
  | 'model_shoot'
  | 'gift_items';

export type GalleryCategory = 'outdoor' | 'candid' | 'events' | 'others';

export const SERVICE_META: Record<
  ServiceSlug,
  { title: string; description: string; image: string }
> = {
  birthday: {
    title: 'Birthday Party',
    description:
      'We provide a professional photography service and have many years of experience capturing joyous celebrations.',
    image: '/b1.png',
  },
  hindu_wedding: {
    title: 'Hindu Wedding',
    description:
      'We believe wedding photography should be unscripted, fun, and timeless.',
    image: '/w1.jpg',
  },
  christian_wedding: {
    title: 'Christian Wedding',
    description:
      'Beautifully capturing the sacred vows and cherished moments of your special day.',
    image: '/chr1.png',
  },
  naming_ceremony: {
    title: 'Naming Ceremony',
    description:
      'Welcoming your little one with joy, blessings, and unforgettable family moments.',
    image: '/bhr1.jpg',
  },
  engagement: {
    title: 'Engagement Ceremony',
    description:
      'Celebrate the beginning of your forever with stunning and intimate portraits.',
    image: '/eng1.png',
  },
  housewarming: {
    title: 'Housewarming Ceremony',
    description:
      'Capturing the warmth and joy of stepping into your new home.',
    image: '/hou1.png',
  },
  puberty: {
    title: 'Puberty Ceremony',
    description:
      'Honoring milestone traditions with vibrant and heartfelt photography.',
    image: '/pub1.png',
  },
  aldhi: {
    title: 'Aldhi',
    description:
      'Capturing the vibrant moments, joy, and laughter of your traditional Aldhi ceremony.',
    image: '/sat1.jpg',
  },
  reception: {
    title: 'Reception',
    description:
      'Capturing the elegance, celebrations, and joyous moments of your wedding reception.',
    image: '/upn1.jpg',
  },
  bangle_ceremony: {
    title: 'Bangle Ceremony',
    description:
      'Celebrating love, expectations, and motherly blessings with beautiful, traditional bangle ceremony portraits.',
    image: '/ban.jpg',
  },
  salangai_poojai: {
    title: 'Salangai Poojai',
    description:
      'Documenting the auspicious musical milestone and expressive dance performances with grace and focus.',
    image: '/sal.jpg',
  },
  maternity: {
    title: 'Maternity Photography',
    description:
      'Celebrate the beauty of motherhood with elegant, heartfelt portraits in a relaxed and comfortable session.',
    image: '/m1.png',
  },
  model_shoot: {
    title: 'Model Shoot',
    description:
      'High-fashion, portfolio, and commercial modeling shoots crafted with studio lighting and editorial flair.',
    image: '/mod.JPG',
  },
  gift_items: {
    title: 'GIFT Items',
    description:
      'Customized photo gifts, personalized keepsakes, frames, and memorable merchandise.',
    image: '/gift.jfif',
  },
};
