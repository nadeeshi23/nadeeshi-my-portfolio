import { IconGithub, IconLinkedin, IconMail, IconArrowUp } from './Icons';

export const Footer = ({ personalInfo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="footer-top-divider"></div>
      <div className="footer-content">
        <div className="footer-brand-col">
          <div className="footer-brand">
            <div className="brand-monogram">
              <span>NJ</span>
            </div>
            <span className="brand-name">{personalInfo.name}</span>
          </div>
          <p className="footer-bio">
            Computer Science and Technology undergraduate at Uva Wellassa University, Sri Lanka. Passionate about full-stack web engineering, React, PHP, and MySQL.
          </p>
          <div className="footer-status-pill">
            <span className="status-dot"></span>
            <span>Seeking Software Development Internship</span>
          </div>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">LK Agro Market & Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social-col">
          <h4 className="footer-col-title">Connect</h4>
          <div className="footer-social-buttons">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="GitHub"
            >
              <IconGithub size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn"
            >
              <IconLinkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.socialLinks.email}`}
              className="footer-social-btn"
              aria-label="Email"
            >
              <IconMail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p className="footer-copyright">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React & Vite.
        </p>
        <button
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Scroll to top of page"
        >
          <span>Back to top</span>
          <IconArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};
