import { useMemo, useState } from 'react';
import { extendedGalleryProjects } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import '../../components/Gallery/Gallery.css';
import './GalleryPage.css';

export function GalleryPage() {
  const { ref: titleRef, className: titleClassName, style: titleStyle } = useReveal<HTMLHeadingElement>({ delay: 0 });
  const { ref: introRef, className: introClassName, style: introStyle } = useReveal<HTMLParagraphElement>({ delay: 100 });
  const categories = useMemo(
    () => Array.from(new Set(extendedGalleryProjects.map((project) => project.category))),
    [],
  );
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const filteredProjects =
    activeFilter === 'All'
      ? extendedGalleryProjects
      : extendedGalleryProjects.filter((project) => project.category === activeFilter);

  return (
    <section className="gallery-page">
      <div className="gallery-page__inner">
        <a href="/" className="gallery-page__back">
          &larr; Back to home
        </a>
        <div className="gallery-page__head">
          <h1
            ref={titleRef}
            className={`gallery-page__title ${titleClassName}`}
            style={titleStyle}
          >
            The full gallery
          </h1>
          <p
            ref={introRef}
            className={`gallery-page__intro ${introClassName}`}
            style={introStyle}
          >
            Every project we&rsquo;ve photographed across Essex County, MA
            &mdash; remodels, additions, and the finish work in between. More
            added as each job wraps.
          </p>
        </div>
        <div className="gallery-page__filters" role="group" aria-label="Filter by category">
          {['All', ...categories].map((category) => (
            <button
              key={category}
              type="button"
              className={`gallery-page__filter${activeFilter === category ? ' is-active' : ''}`}
              aria-pressed={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <ul className="gallery__grid gallery-page__grid">
          {filteredProjects.map((project, index) => (
            <GalleryPageItem key={project.id} project={project} delay={(index % 6) * 100} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function GalleryPageItem({
  project,
  delay,
}: {
  project: (typeof extendedGalleryProjects)[number];
  delay: number;
}) {
  const { ref, className, style } = useReveal<HTMLLIElement>({ delay });
  return (
    <li ref={ref} className={`gallery__item ${className}`} style={style}>
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        className="gallery__image"
      />
      <div className="gallery__caption">
        <span className="gallery__category">{project.category}</span>
        <span className="gallery__project-title">{project.title}</span>
        <span className="gallery__location">{project.location}</span>
      </div>
    </li>
  );
}
