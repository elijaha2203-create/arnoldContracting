export const business = {
  name: 'Arnold Contracting',
  tagline: 'Family-owned craftsmanship, built to last.',
  // TODO: replace with the real phone number, email, and license number before launch.
  phone: '(508) 555-0173',
  phoneHref: 'tel:+15085550173',
  email: 'info@arnoldcontracting.com',
  emailHref: 'mailto:info@arnoldcontracting.com',
  address: 'Serving Andover, MA and the Merrimack Valley',
  license: 'MA HIC #000000 · Licensed & Insured',
};

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

// Trust-strip stats. Numbers are illustrative placeholders — swap for the
// real figures (years in business, completed project count) before launch.
export const trustStats = [
  { value: '20+', label: 'years in business' },
  { value: '350+', label: 'projects completed' },
  { value: '100%', label: 'licensed & insured' },
];

export type ServiceCategory = {
  name: string;
  blurb: string;
  services: { name: string; description: string }[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    name: 'Remodeling & Renovation',
    blurb: 'The big transformations — done room by room or top to bottom.',
    services: [
      {
        name: 'Whole-Home Renovation',
        description:
          'Full-scope renovations planned and built around how your family actually lives.',
      },
      {
        name: 'Kitchen Remodels',
        description:
          'Layout, cabinetry, and finishes reworked into a kitchen built for daily use.',
      },
      {
        name: 'Bathroom Remodels',
        description:
          'Fixtures, tile, and layout updated for a bathroom that works and lasts.',
      },
    ],
  },
  {
    name: 'Exteriors',
    blurb: 'Everything that protects the house and how it looks from the curb.',
    services: [
      {
        name: 'Siding Repair & Replacement',
        description: 'Weather-tight siding work that holds up through New England winters.',
      },
      {
        name: 'Windows & Doors',
        description: 'Energy-efficient replacements, fitted and sealed correctly the first time.',
      },
      {
        name: 'Decks',
        description: 'Custom-built decks sized and framed for the way you actually use your yard.',
      },
      {
        name: 'Exterior Painting',
        description: 'Prep-heavy painting that protects the wood, not just the color coat.',
      },
    ],
  },
  {
    name: 'Carpentry & Finish Work',
    blurb: 'The detail work that separates a remodel from a rush job.',
    services: [
      {
        name: 'Custom Carpentry & Built-Ins',
        description: 'Bookshelves, mudroom benches, and built-ins made to fit your space exactly.',
      },
      {
        name: 'Cabinets',
        description: 'Custom and semi-custom cabinetry, installed level, square, and flush.',
      },
      {
        name: 'Stairs',
        description: 'Staircase rebuilds and railings, framed and finished by hand.',
      },
      {
        name: 'Drywall',
        description: 'Hanging, taping, and finishing for a wall you would never guess was patched.',
      },
      {
        name: 'Interior Painting',
        description: 'Clean lines and even coats, done after the finish carpentry — not before.',
      },
    ],
  },
];

export type GalleryProject = {
  id: string;
  title: string;
  location: string;
  category: string;
  imageId: string;
  alt: string;
};

// Placeholder project set — sourced stock imagery standing in for real job-site
// photos. Swap `imageId` + `alt` for real project photography as it's supplied.
export const galleryProjects: GalleryProject[] = [
  {
    id: 'kitchen-andover',
    title: 'Kitchen Remodel',
    location: 'Andover, MA',
    category: 'Remodeling',
    imageId: '1618832515490-e181c4794a45',
    alt: 'Custom kitchen cabinetry and window trim, finished in place',
  },
  {
    id: 'bath-north-andover',
    title: 'Bathroom Remodel',
    location: 'North Andover, MA',
    category: 'Remodeling',
    imageId: '1638799869566-b17fa794c4de',
    alt: 'Bathroom remodel with a walk-in shower beside a freestanding tub',
  },
  {
    id: 'deck-methuen',
    title: 'Custom Deck & Outdoor Living',
    location: 'Methuen, MA',
    category: 'Exteriors',
    imageId: '1574120583586-de8847ae992c',
    alt: 'Wooden deck built off a home\u2019s rear glass door',
  },
  {
    id: 'addition-lawrence',
    title: 'Whole-Home Addition',
    location: 'Lawrence, MA',
    category: 'Remodeling',
    imageId: '1676802037786-3697d60497ae',
    alt: 'Wood framing underway on a home addition construction site',
  },
  {
    id: 'stairs-haverhill',
    title: 'Custom Staircase & Millwork',
    location: 'Haverhill, MA',
    category: 'Carpentry',
    imageId: '1656733911006-fcad49fa0d52',
    alt: 'Hand-built wooden staircase inside a timber-framed home',
  },
  {
    id: 'siding-tewksbury',
    title: 'Siding & Facade Replacement',
    location: 'Tewksbury, MA',
    category: 'Exteriors',
    imageId: '1604177420528-44bb3e1dcd7b',
    alt: 'Close-up of a home\u2019s freshly finished wood siding',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

// Placeholder quotes standing in for real client testimonials. Replace with
// the actual testimonials on hand before launch.
export const testimonials: Testimonial[] = [
  {
    quote:
      'They treated our kitchen like it was their own. Every cut was clean, every day they cleaned up before leaving \u2014 exactly what you hope for and rarely get.',
    name: 'Maria D.',
    location: 'Andover, MA',
  },
  {
    quote:
      'We got quotes from four contractors. Arnold was the only one who walked the whole project with us before naming a price, and it showed in the finish work.',
    name: 'Tom & Rachel K.',
    location: 'North Andover, MA',
  },
  {
    quote:
      'Our deck has held up through three winters without a single warped board. That is the kind of thing you only notice years later, when it does not go wrong.',
    name: 'James P.',
    location: 'Methuen, MA',
  },
];

export const credentials = [
  { label: 'Family-owned & operated' },
  { label: 'Licensed & fully insured' },
  { label: '20+ years serving the Merrimack Valley' },
];

/** `imageId` is the CDN suffix after `photo-` on images.unsplash.com (verified, non-Plus). */
export function unsplashUrl(imageId: string, width = 1600): string {
  return `https://images.unsplash.com/photo-${imageId}?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=srgb&w=${width}`;
}
