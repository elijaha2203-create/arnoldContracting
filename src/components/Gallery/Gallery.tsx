import { galleryProjects, unsplashUrl } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import './Gallery.css';

export function Gallery() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__inner">
        <div ref={ref} className={`gallery__head ${className}`}>
          <h2 className="gallery__title">Recent work</h2>
          <p className="gallery__intro">
            A sample of finished projects across Essex County, MA &mdash;
            more added as each job wraps.
          </p>
        </div>

        <ul className="gallery__grid">
          {galleryProjects.map((project, index) => (
            <GalleryItem key={project.id} project={project} featured={index === 0} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function GalleryItem({
  project,
  featured,
}: {
  project: (typeof galleryProjects)[number];
  featured: boolean;
}) {
  const { ref, className } = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className={`gallery__item ${className}${featured ? ' gallery__item--featured' : ''}`}
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
