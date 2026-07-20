import { business, unsplashUrl } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import './About.css';

export function About() {
  const { ref: mediaRef, className: mediaClassName, style: mediaStyle } = useReveal<HTMLDivElement>({ delay: 0 });
  const { ref: titleRef, className: titleClassName, style: titleStyle } = useReveal<HTMLHeadingElement>({ delay: 100 });
  const {
    ref: firstParagraphRef,
    className: firstParagraphClassName,
    style: firstParagraphStyle,
  } = useReveal<HTMLParagraphElement>({ delay: 200 });
  const {
    ref: secondParagraphRef,
    className: secondParagraphClassName,
    style: secondParagraphStyle,
  } = useReveal<HTMLParagraphElement>({ delay: 300 });

  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div
          ref={mediaRef}
          className={`about__media ${mediaClassName}`}
          style={mediaStyle}
        >
          <img
            src={unsplashUrl('1769353086138-19ee65291a04', 1200)}
            alt="Carpenter working with wood inside the shop"
            loading="lazy"
            className="about__image"
          />
        </div>
        <div className="about__copy">
          <h2
            ref={titleRef}
            className={`about__title ${titleClassName}`}
            style={titleStyle}
          >
            A family business, not a subcontractor pipeline
          </h2>
          <p
            ref={firstParagraphRef}
            className={`about__paragraph ${firstParagraphClassName}`}
            style={firstParagraphStyle}
          >
            {business.name} has spent two decades in Essex County
            building additions, remodeling kitchens, and fixing the things
            other crews rush through. We're small on purpose &mdash; every job
            gets the same owner-level attention, whether it's a full
            renovation or a single custom staircase.
          </p>
          <p
            ref={secondParagraphRef}
            className={`about__paragraph ${secondParagraphClassName}`}
            style={secondParagraphStyle}
          >
            We show up, we clean up, and we stand behind the work after the
            invoice is paid. {business.address}.
          </p>
        </div>
      </div>
    </section>
  );
}
