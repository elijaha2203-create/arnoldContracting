import { serviceCategories } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import './Services.css';

export function Services() {
  return (
    <section className="services" id="services">
      <div className="services__inner">
        <SectionHead />
        <div className="services__categories">
          {serviceCategories.map((category, index) => (
            <ServiceCategory key={category.name} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead() {
  const { ref: titleRef, className: titleClassName, style: titleStyle } = useReveal<HTMLHeadingElement>({ delay: 0 });
  const { ref: introRef, className: introClassName, style: introStyle } = useReveal<HTMLParagraphElement>({ delay: 100 });
  return (
    <div className="services__head">
      <h2
        ref={titleRef}
        className={`services__title ${titleClassName}`}
        style={titleStyle}
      >
        What we build and fix
      </h2>
      <p
        ref={introRef}
        className={`services__intro ${introClassName}`}
        style={introStyle}
      >
        From a single room to the whole house &mdash; every job gets the same
        finish-carpentry attention to detail.
      </p>
    </div>
  );
}

function ServiceCategory({
  category,
  index,
}: {
  category: (typeof serviceCategories)[number];
  index: number;
}) {
  const { ref, className, style } = useReveal<HTMLDivElement>({ delay: index * 100 });
  return (
    <div ref={ref} className={`service-category ${className}`} style={style}>
      <div className="service-category__intro">
        <h3 className="service-category__name">{category.name}</h3>
        <p className="service-category__blurb">{category.blurb}</p>
      </div>
      <ul className="service-category__list">
        {category.services.map((service) => (
          <li key={service.name}>
            <span className="service-category__service-name">{service.name}</span>
            <span className="service-category__service-desc">{service.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
