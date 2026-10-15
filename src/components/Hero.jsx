import { 
  IconGithub, 
  IconLinkedin, 
  IconMail, 
  IconCV, 
  IconArrowRight, 
  IconSparkles, 
  IconCode, 
  IconGraduationCap 
} from './Icons';

export const Hero = ({ personalInfo, onOpenCV }) => {
  return (
    <section id="home" className="hero-section">
      <div className="ambient-glow ambient-glow-top"></div>
      <div className="ambient-glow ambient-glow-bottom"></div>

      <div className="hero-container">
        {/* Left: Text & CTAs */}
        <div className="hero-content">
          <div className="status-badge-container">
            <div className="hero-status-pill">
              <span className="pulsing-green-dot"></span>
              <span className="status-text">{personalInfo.status}</span>
            </div>
            <div className="uni-badge-pill">
              <IconGraduationCap size={14} />
              <span>Uva Wellassa University</span>
            </div>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient-emerald">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-subtitle">
            <span className="hero-role">{personalInfo.role}</span>
            <span className="hero-divider">/</span>
            <span className="hero-stream">Computer Science & Technology Undergrad</span>
          </h2>

          <p className="hero-description">
            Undergraduate at <strong>Uva Wellassa University, Sri Lanka</strong>, actively seeking a{' '}
            <span className="highlight-text">Software Development Internship</span>. Passionate about crafting responsive web applications, robust backends, and modular architectures using <strong>React, PHP, and MySQL</strong>.
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary hero-btn">
              <span>View Projects</span>
              <IconArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn-secondary hero-btn">
              <span>Contact Me</span>
              <IconMail size={18} />
            </a>

            <button onClick={onOpenCV} className="btn btn-outline-emerald hero-btn">
              <IconCV size={18} />
              <span>Curriculum Vitae</span>
            </button>
          </div>

          {/* Social Links Row */}
          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <div className="social-links-wrap">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="GitHub Profile"
              >
                <IconGithub size={18} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="LinkedIn Profile (Placeholder)"
              >
                <IconLinkedin size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.socialLinks.email}`}
                className="social-pill"
                aria-label="Direct Email"
              >
                <IconMail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Modern Visual Card with Glowing Profile & Floating Badges */}
        <div className="hero-visual">
          <div className="hero-card-wrapper">
            <div className="hero-avatar-frame">
              <img
                src={personalInfo.avatar}
                alt={`${personalInfo.name} - CST Undergraduate`}
                className="hero-avatar-img"
              />
              <div className="avatar-overlay-gradient"></div>
            </div>

            {/* Floating Tech Card 1 */}
            <div className="floating-badge badge-top-right">
              <div className="badge-icon-wrap emerald">
                <IconSparkles size={16} />
              </div>
              <div>
                <span className="badge-label">Featured Project</span>
                <span className="badge-value">LK Agro Market</span>
              </div>
            </div>

            {/* Floating Tech Card 2 */}
            <div className="floating-badge badge-bottom-left">
              <div className="badge-icon-wrap mint">
                <IconCode size={16} />
              </div>
              <div>
                <span className="badge-label">Core Stack</span>
                <span className="badge-value">React • PHP • MySQL</span>
              </div>
            </div>

            {/* Floating University Pill */}
            <div className="floating-badge badge-bottom-right">
              <div className="badge-icon-wrap dark">
                <IconGraduationCap size={16} />
              </div>
              <div>
                <span className="badge-label">Institution</span>
                <span className="badge-value">UWU, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
