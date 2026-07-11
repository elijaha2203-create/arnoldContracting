import { testimonials } from '../../data/content';
import { QuoteIcon } from '../icons';
import { useReveal } from '../../hooks/useReveal';
import './Testimonials.css';

export function Testimonials() {
  const { ref, className } = useReveal<HTMLHeadingElement>();

  return (
    <section className="testimonials" aria-label="What clients say">
      <div className="testimonials__inner">
        <h2 ref={ref} className={`testimonials__title ${className}`}>
          What homeowners say
        </h2>
        <ul className="testimonials__list">
          {testimonials.map((testimonial) => (
            <TestimonialItem key={testimonial.name} testimonial={testimonial} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function TestimonialItem({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  const { ref, className } = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} className={`testimonials__item ${className}`}>
      <QuoteIcon className="testimonials__mark" />
      <p className="testimonials__quote">&ldquo;{testimonial.quote}&rdquo;</p>
      <p className="testimonials__attribution">
        <span className="testimonials__name">{testimonial.name}</span>
        <span className="testimonials__location">{testimonial.location}</span>
      </p>
    </li>
  );
}
