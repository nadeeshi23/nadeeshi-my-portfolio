import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { IconSparkles } from './Icons';

export const Projects = ({ projectsData }) => {
  const [filter, setFilter] = useState('all');

  const featuredProject = projectsData.find((p) => p.featured);
  const otherProjects = projectsData.filter((p) => !p.featured);

  const filteredOtherProjects = otherProjects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'web') return project.technologies.includes('React') || project.technologies.includes('PHP');
    if (filter === 'academic') return project.category.includes('Academic');
    return true;
  });

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <div className="section-eyebrow">
          <span className="eyebrow-dot"></span>
          <span>Portfolio & Work</span>
        </div>
        <h2 className="section-title">
          Featured <span className="text-gradient-emerald">Projects</span>
        </h2>
        <p className="section-subtitle">
          Real-world applications and academic initiatives demonstrating full-stack engineering, database systems, and user interface craftsmanship.
        </p>
      </div>

      {/* Featured Flagship Project: LK Agro Market */}
      {featuredProject && (
        <div className="featured-project-container">
          <div className="featured-header-tag">
            <IconSparkles size={16} className="text-emerald" />
            <span>Spotlight Project • Uva Wellassa University</span>
          </div>
          <ProjectCard project={featuredProject} />
        </div>
      )}

      {/* Filter Tabs for Other Projects */}
      <div className="projects-filter-bar">
        <h3 className="other-projects-heading">Additional Academic & Personal Projects</h3>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects ({otherProjects.length})
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Apps
          </button>
          <button
            className={`filter-btn ${filter === 'academic' ? 'active' : ''}`}
            onClick={() => setFilter('academic')}
          >
            Academic Systems
          </button>
        </div>
      </div>

      {/* Grid of Other Projects */}
      <div className="projects-grid">
        {filteredOtherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};
