import { serviceCategories } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import './Services.css';

export function Services() {
  return (
    <section className="services" id="services">
      <div className="services__inner">
        <SectionHead />
        <div className="services__categories">
          {serviceCategories.map((category) => (
            <ServiceCategory key={category.name} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead() {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`services__head ${className}`}>
      <h2 className="services__title">What we build and fix</h2>
      <p className="services__intro">
        From a single room to the whole house &mdash; every job gets the same
        finish-carpentry attention to detail.
      </p>
    </div>
  );
}

function ServiceCategory({
  category,
}: {
  category: (typeof serviceCategories)[number];
}) {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`service-category ${className}`}>
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
