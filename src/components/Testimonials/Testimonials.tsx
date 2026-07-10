import { testimonials } from '../../data/content';
import { QuoteIcon } from '../icons';
import { useReveal } from '../../hooks/useReveal';
import './Testimonials.css';

export function Testimonials() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section className="testimonials" aria-label="What clients say">
      <div ref={ref} className={`testimonials__inner ${className}`}>
        <h2 className="testimonials__title">What homeowners say</h2>
        <ul className="testimonials__list">
          {testimonials.map((testimonial) => (
            <li key={testimonial.name} className="testimonials__item">
              <QuoteIcon className="testimonials__mark" />
              <p className="testimonials__quote">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="testimonials__attribution">
                <span className="testimonials__name">{testimonial.name}</span>
                <span className="testimonials__location">{testimonial.location}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
