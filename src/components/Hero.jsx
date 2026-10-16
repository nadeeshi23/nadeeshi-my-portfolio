import { 
  IconMail, 
  IconCV, 
  IconArrowRight, 
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
              <IconGraduationCap size={15} />
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
        </div>

        {/* Right: Modern Visual Card with Glowing Profile Frame */}
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
          </div>
        </div>

        {/* Centered Action Buttons below both text and photo */}
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
      </div>
    </section>
  );
};
