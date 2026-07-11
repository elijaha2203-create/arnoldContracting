import { testimonials } from '../../data/content';
import { QuoteIcon } from '../icons';
import { useReveal } from '../../hooks/useReveal';
import './Testimonials.css';

export function Testimonials() {
  const { ref: titleRef, className: titleClassName, style: titleStyle } = useReveal<HTMLHeadingElement>({ delay: 0 });

  return (
    <section className="testimonials" aria-label="What clients say">
      <div className="testimonials__inner">
        <h2
          ref={titleRef}
          className={`testimonials__title ${titleClassName}`}
          style={titleStyle}
        >
          What homeowners say
        </h2>
        <ul className="testimonials__list">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={testimonial.name} testimonial={testimonial} delay={index * 100 + 100} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function TestimonialItem({
  testimonial,
  delay,
}: {
  testimonial: (typeof testimonials)[number];
  delay: number;
}) {
  const { ref, className, style } = useReveal<HTMLLIElement>({ delay });

  return (
    <li ref={ref} className={`testimonials__item ${className}`} style={style}>
      <QuoteIcon className="testimonials__mark" />
      <p className="testimonials__quote">&ldquo;{testimonial.quote}&rdquo;</p>
      <p className="testimonials__attribution">
        <span className="testimonials__name">{testimonial.name}</span>
        <span className="testimonials__location">{testimonial.location}</span>
      </p>
    </li>
  );
}
