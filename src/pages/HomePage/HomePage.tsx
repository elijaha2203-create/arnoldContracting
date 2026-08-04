import { Hero } from '../../components/Hero/Hero';
import { TrustStrip } from '../../components/TrustStrip/TrustStrip';
import { Services } from '../../components/Services/Services';
import { Gallery } from '../../components/Gallery/Gallery';
import { Testimonials } from '../../components/Testimonials/Testimonials';
import { About } from '../../components/About/About';
import { ContactSection } from '../../components/ContactSection/ContactSection';

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <div className="section-divider" aria-hidden="true" />
      <Gallery />
      <Testimonials />
      <About />
      <ContactSection />
    </>
  );
}
