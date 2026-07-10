import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { TrustStrip } from './components/TrustStrip/TrustStrip';
import { Services } from './components/Services/Services';
import { Gallery } from './components/Gallery/Gallery';
import { Testimonials } from './components/Testimonials/Testimonials';
import { About } from './components/About/About';
import { ContactSection } from './components/ContactSection/ContactSection';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Gallery />
        <Testimonials />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;

