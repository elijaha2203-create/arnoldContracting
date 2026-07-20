import { testimonials } from '../../data/content';
import { QuoteIcon } from '../icons';
import { useReveal } from '../../hooks/useReveal';
import './Testimonials.css';

export function Testimonials() {
<<<<<<< HEAD
  const { ref, className } = useReveal<HTMLHeadingElement>();
=======
  const { ref: titleRef, className: titleClassName, style: titleStyle } = useReveal<HTMLHeadingElement>({ delay: 0 });
>>>>>>> 5c43364fafc42c60721fa8e8ede3364e911c2f7b

  return (
    <section className="testimonials" aria-label="What clients say">
      <div className="testimonials__inner">
<<<<<<< HEAD
        <h2 ref={ref} className={`testimonials__title ${className}`}>
          What homeowners say
        </h2>
        <ul className="testimonials__list">
          {testimonials.map((testimonial) => (
            <TestimonialItem key={testimonial.name} testimonial={testimonial} />
=======
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
>>>>>>> 5c43364fafc42c60721fa8e8ede3364e911c2f7b
          ))}
        </ul>
      </div>
    </section>
  );
}

function TestimonialItem({
  testimonial,
<<<<<<< HEAD
}: {
  testimonial: (typeof testimonials)[number];
}) {
  const { ref, className } = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} className={`testimonials__item ${className}`}>
=======
  delay,
}: {
  testimonial: (typeof testimonials)[number];
  delay: number;
}) {
  const { ref, className, style } = useReveal<HTMLLIElement>({ delay });

  return (
    <li ref={ref} className={`testimonials__item ${className}`} style={style}>
>>>>>>> 5c43364fafc42c60721fa8e8ede3364e911c2f7b
      <QuoteIcon className="testimonials__mark" />
      <p className="testimonials__quote">&ldquo;{testimonial.quote}&rdquo;</p>
      <p className="testimonials__attribution">
        <span className="testimonials__name">{testimonial.name}</span>
        <span className="testimonials__location">{testimonial.location}</span>
      </p>
    </li>
  );
}
