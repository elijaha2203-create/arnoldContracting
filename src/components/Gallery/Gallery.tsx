import { galleryProjects, unsplashUrl } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import './Gallery.css';

export function Gallery() {
  const { ref: titleRef, className: titleClassName, style: titleStyle } = useReveal<HTMLHeadingElement>({ delay: 0 });
  const { ref: introRef, className: introClassName, style: introStyle } = useReveal<HTMLParagraphElement>({ delay: 100 });

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__inner">
        <div className="gallery__head">
          <h2
            ref={titleRef}
            className={`gallery__title ${titleClassName}`}
            style={titleStyle}
          >
            Recent work
          </h2>
          <p
            ref={introRef}
            className={`gallery__intro ${introClassName}`}
            style={introStyle}
          >
            A sample of finished projects across Essex County, MA &mdash;
            more added as each job wraps.
          </p>
        </div>

        <ul className="gallery__grid">
          {galleryProjects.map((project, index) => (
            <GalleryItem key={project.id} project={project} featured={index === 0} delay={index * 100} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function GalleryItem({
  project,
  featured,
  delay,
}: {
  project: (typeof galleryProjects)[number];
  featured: boolean;
  delay: number;
}) {
  const { ref, className, style } = useReveal<HTMLLIElement>({ delay });
  return (
    <li
      ref={ref}
      className={`gallery__item ${className}${featured ? ' gallery__item--featured' : ''}`}
      style={style}
    >
      <img
        src={unsplashUrl(project.imageId, featured ? 1600 : 900)}
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
