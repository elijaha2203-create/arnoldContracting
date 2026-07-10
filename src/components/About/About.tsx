import { business, unsplashUrl } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import './About.css';

export function About() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section className="about" id="about">
      <div ref={ref} className={`about__inner ${className}`}>
        <div className="about__media">
          <img
            src={unsplashUrl('1769353086138-19ee65291a04', 1200)}
            alt="Carpenter working with wood inside the shop"
            loading="lazy"
            className="about__image"
          />
        </div>
        <div className="about__copy">
          <h2 className="about__title">A family business, not a subcontractor pipeline</h2>
          <p className="about__paragraph">
            {business.name} has spent two decades in Essex County
            building additions, remodeling kitchens, and fixing the things
            other crews rush through. We're small on purpose &mdash; every job
            gets the same owner-level attention, whether it's a full
            renovation or a single custom staircase.
          </p>
          <p className="about__paragraph">
            We show up, we clean up, and we stand behind the work after the
            invoice is paid. {business.address}.
          </p>
        </div>
      </div>
    </section>
  );
}
