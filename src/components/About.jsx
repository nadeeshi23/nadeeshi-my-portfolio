import { 
  IconCheckCircle 
} from './Icons';

export const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="section-header">
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

      <div className="about-grid">
        {/* Left Column: Narrative Card */}
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
            Through practical group endeavors like <strong>LK Agro Market</strong>, I have engaged in end-to-end development sprints—translating agricultural workflow challenges into functional database schemas, PHP backends, and responsive React user interfaces.
          </p>
        </div>

        {/* Right Column: Core Strengths */}
        <div className="strengths-box">
          <h4 className="strengths-title">Core Strengths & Values</h4>
          <div className="strengths-list">
            <div className="strength-item">
              <IconCheckCircle size={18} className="text-emerald" />
              <span>Clean, modular, and maintainable code</span>
            </div>
            <div className="strength-item">
              <IconCheckCircle size={18} className="text-emerald" />
              <span>Quick learner with strong algorithmic aptitude</span>
            </div>
            <div className="strength-item">
              <IconCheckCircle size={18} className="text-emerald" />
              <span>Collaborative team player (group project tested)</span>
            </div>
            <div className="strength-item">
              <IconCheckCircle size={18} className="text-emerald" />
              <span>Dedicated work ethic with continuous improvement mindset</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



