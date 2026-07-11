import { business, unsplashUrl } from '../../data/content';
import { ArrowRightIcon } from '../icons';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <img
          src={unsplashUrl('1779031242509-af360178ebb3', 1800)}
          alt="Carpenter's hands guiding a board through a table saw, close up"
          className="hero__image"
          fetchPriority="high"
        />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

      <div className="hero__content">
        <h1 className="hero__headline">
          Craftsmanship your home deserves, from a crew that treats it like our own.
        </h1>
        <p className="hero__subhead">
          {business.name} is a family-owned general contractor built on finish
          carpentry and remodeling done right the first time &mdash; whole-home
          renovations, kitchens, baths, additions, and the detail work that
          holds it all together.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary hero__cta" href="#contact">
            Contact Now To Get a Free Quote
            <ArrowRightIcon className="hero__cta-icon" />
          </a>
          <a className="btn btn--ghost" href={business.phoneHref}>
            Call {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
