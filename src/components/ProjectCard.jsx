import { IconGithub, IconExternalLink, IconSparkles, IconCheckCircle } from './Icons';

export const ProjectCard = ({ project }) => {
  const isFeatured = project.featured;

  return (
    <article className={`project-card ${isFeatured ? 'featured-project-card' : ''}`}>
      {/* Featured Badge */}
      {isFeatured && (
        <div className="featured-ribbon">
          <IconSparkles size={14} />
          <span>Featured University Group Project</span>
        </div>
      )}

      {/* Image container for featured project or project with visual */}
      {project.image && (
        <div className="project-image-wrapper">
          <img
            src={project.image}
            alt={`${project.title} - ${project.subtitle}`}
            className="project-image"
            loading="lazy"
          />
          <div className="project-image-overlay">
            <span className="project-category-badge">{project.category}</span>
          </div>
        </div>
      )}

      <div className="project-details">
        {!project.image && (
          <div className="project-top-meta">
            <span className="project-category-badge">{project.category}</span>
          </div>
        )}

        <div className="project-title-row">
          <div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
        </div>

        <p className="project-description">{project.description}</p>

        {/* Highlights / Features list for featured project */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="project-highlights-box">
            <h4 className="highlights-heading">Key Architecture & Features:</h4>
            <ul className="project-highlights-list">
              {project.highlights.slice(0, isFeatured ? 5 : 3).map((item, idx) => (
                <li key={idx} className="project-highlight-item">
                  <IconCheckCircle size={14} className="highlight-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="project-tech-stack" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="project-links-row">
          {project.githubUrl && project.githubUrl !== '#' ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label={`View ${project.title} on GitHub`}
            >
              <IconGithub size={16} />
              <span>GitHub Code</span>
            </a>
          ) : (
            <span className="btn btn-secondary btn-sm disabled-btn" title="Repository in private academic archive">
              <IconGithub size={16} />
              <span>GitHub (Academic Repo)</span>
            </span>
          )}

          {project.hasLiveDemo && project.demoUrl && project.demoUrl !== '#' ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <span>Live Preview</span>
              <IconExternalLink size={14} />
            </a>
          ) : null}

          {isFeatured && (
            <div className="featured-footer-note">
              <span>Built with React + PHP + MySQL</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};
