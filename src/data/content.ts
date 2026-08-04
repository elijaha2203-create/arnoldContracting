export const business = {
  name: 'Arnold Contracting',
  tagline: 'Family-owned craftsmanship, built to last.',
  // LAUNCH TODO: replace with the real phone number, email, and license number before launch.
  phone: '(978) 290-7566',
  phoneHref: 'tel:+19782907566',
  email: 'earnweld@gmail.com',
  emailHref: 'mailto:earnweld@gmail.com',
  address: 'Serving the Northshore',
  license: 'MA HIC #000000 · Licensed & Insured',
};

export const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

// LAUNCH TODO: illustrative placeholders — swap for the real figures (years
// in business, completed project count) before launch.
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
        name: 'Drywall & Interior Painting',
        description:
          'Hanging, taping, and finishing a wall you would never guess was patched, then a clean, even coat of paint to match.',
      },
    ],
  },
];

export type GalleryProject = {
  id: string;
  title: string;
  location: string;
  category: string;
  image: string;
  alt: string;
};

// LAUNCH TODO: placeholder project set. Add your own photo files to
// /public/images and update the `image` path below for each project as
// photos are supplied.
export const galleryProjects: GalleryProject[] = [
  {
    id: 'kitchen-andover',
    title: 'Kitchen Remodel',
    location: 'Essex, MA',
    category: 'Remodeling',
    image: '/images/kitchen-remodel.jpg',
    alt: 'Custom kitchen cabinetry and window trim, finished in place',
  },
  {
    id: 'bath-north-andover',
    title: 'Roof Replacement',
    location: 'Beverly, MA',
    category: 'Exteriors',
    image: '/images/roofing.jpg',
    alt: 'Roof installation on a residential home',
  },
  {
    id: 'deck-hamilton',
    title: 'Custom Deck & Outdoor Living',
    location: 'Hamilton, MA',
    category: 'Exteriors',
    image: '/images/deck-hamilton.jpg',
    alt: 'Wooden deck built off a home\u2019s rear glass door',
  },
  {
    id: 'addition-lawrence',
    title: 'Whole-Home Addition',
    location: 'Manchester, MA',
    category: 'Remodeling',
    image: '/images/addition.jpg',
    alt: 'Wood framing underway on a home addition construction site',
  },
  {
    id: 'stairs-haverhill',
    title: 'Custom Built-Ins & Cabinetry',
    location: 'Essex, MA',
    category: 'Carpentry',
    image: '/images/builtin.jpg',
    alt: 'Hand-built wooden staircase inside a timber-framed home',
  },
  {
    id: 'siding-tewksbury',
    title: 'Siding & Facade Replacement',
    location: 'Hamilton, MA',
    category: 'Exteriors',
    image: '/images/siding3.jpeg',
    alt: 'Close-up of a home\u2019s freshly finished wood siding',
  },
];

// Additional real project photos, shown only on the full /gallery page so the
// homepage teaser above stays a short, curated sample.
export const extendedGalleryProjects: GalleryProject[] = [
  ...galleryProjects,
  {
    id: 'siding-georgetown',
    title: 'Siding Replacement \u2014 In Progress',
    location: 'Georgetown, MA',
    category: 'Exteriors',
    image: '/images/siding1.jpeg',
    alt: 'Crew member stripping old siding down to the sheathing during a facade replacement',
  },
  {
    id: 'siding-rowley',
    title: 'Exterior Weatherproofing',
    location: 'Rowley, MA',
    category: 'Exteriors',
    image: '/images/siding2.jpeg',
    alt: 'Ice-and-water shield membrane and new shake siding being installed on a home exterior',
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

// LAUNCH TODO: placeholder quotes standing in for real client testimonials.
// Replace with the actual testimonials on hand before launch.
export const testimonials: Testimonial[] = [
  {
    quote:
      'They treated our kitchen like it was their own. Every cut was clean, every day they cleaned up before leaving \u2014 exactly what you hope for and rarely get.',
    name: 'Maria D.',
    location: 'Beverly, MA',
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
    location: 'Essex, MA',
  },
];

export const credentials = [
  { label: 'Family-owned & operated' },
  { label: 'Licensed & fully insured' },
  { label: '20+ years serving the Northshore' },
];