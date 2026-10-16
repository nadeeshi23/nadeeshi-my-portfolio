import { 
  IconCheckCircle,
  IconSparkles 
} from './Icons';
import girlImg from '../assets/girl.jpg';

export const About = () => {
  return (
    <section id="about" className="section-container about-section">
      <div className="section-header about-section-header">
        <div className="section-eyebrow">
          <span className="eyebrow-dot"></span>
          <span>Background & Profile</span>
        </div>
        <h2 className="section-title">
          About <span className="text-gradient-emerald">Me</span>
        </h2>
        <p className="section-subtitle">
          An overview of my academic foundation at Uva Wellassa University and technical drive as a software developer.
        </p>
      </div>

      <div className="about-main-wrapper">
        {/* Left Side: Image */}
        <div className="about-image-side">
          <div className="about-image-card">
            <img src={girlImg} alt="About Me - Nadeeshi" className="about-girl-img" />
            <div className="about-image-glow"></div>
          </div>
        </div>

        {/* Right Side: All Texts aligned to the left */}
        <div className="about-content-side">
          <div className="about-narrative-card">
            <h3 className="card-heading">
              Computer Science & Technology Undergraduate
            </h3>
            <p className="narrative-text highlight-lead">
              I am currently pursuing my degree in <strong>Computer Science and Technology at Uva Wellassa University, Sri Lanka</strong>. I have developed a strong passion for full-stack software development, architectural problem solving, and modern web engineering.
            </p>

            <p className="narrative-text">
              My coursework and project experience have equipped me with a strong command of object-oriented programming, data structures, relational database design with <strong>MySQL</strong>, and modern component-driven frontends with <strong>React</strong>.
            </p>

            <p className="narrative-text">
              Through practical group endeavors like <strong>LK Agro Market</strong> and the <strong>FITZONE Gym Management System</strong>, I have engaged in end-to-end development sprints—translating real-world workflow challenges into functional database schemas, PHP backends, and responsive React user interfaces.
            </p>

            <p className="narrative-text">
              Beyond software engineering, I am currently a <strong>Design Team Member at the FOSS Community</strong> and have valuable experience working as a <strong>volunteer in IEEE projects</strong>. These roles have strengthened my creative design thinking, UI/UX aesthetics, and collaborative teamwork skills across community-driven initiatives.
            </p>

            {/* Community & Volunteer Experience Cards */}
            <div className="about-community-box">
              <h4 className="strengths-title">Community & Volunteer Involvement</h4>
              <div className="community-cards-grid">
                <div className="community-card">
                  <div className="community-card-icon emerald">
                    <IconSparkles size={18} />
                  </div>
                  <div className="community-card-body">
                    <h5 className="community-role">Design Team Member</h5>
                    <span className="community-org">FOSS Community</span>
                    <p className="community-desc">
                      Contributing creative design assets, UI concepts, and community visual branding.
                    </p>
                  </div>
                </div>

                <div className="community-card">
                  <div className="community-card-icon mint">
                    <IconCheckCircle size={18} />
                  </div>
                  <div className="community-card-body">
                    <h5 className="community-role">Project Volunteer</h5>
                    <span className="community-org">IEEE Projects</span>
                    <p className="community-desc">
                      Actively contributing to project execution, team coordination, and student branch activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Strengths & Values */}
            <div className="strengths-box-inline">
              <h4 className="strengths-title">Core Strengths & Values</h4>
              <div className="strengths-grid-inline">
                <div className="strength-item">
                  <IconCheckCircle size={18} className="text-emerald" />
                  <span>Clean, modular, and maintainable code</span>
                </div>
                <div className="strength-item">
                  <IconCheckCircle size={18} className="text-emerald" />
                  <span>Creative UI/UX design & visual communication</span>
                </div>
                <div className="strength-item">
                  <IconCheckCircle size={18} className="text-emerald" />
                  <span>Collaborative team player (group & community tested)</span>
                </div>
                <div className="strength-item">
                  <IconCheckCircle size={18} className="text-emerald" />
                  <span>Dedicated work ethic with continuous improvement mindset</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




