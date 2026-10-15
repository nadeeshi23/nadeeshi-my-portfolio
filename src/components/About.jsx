import { 
  IconGraduationCap, 
  IconBriefcase, 
  IconMapPin, 
  IconCode, 
  IconCheckCircle 
} from './Icons';
import nadeeshiImg from '../assets/nadeeshi.png';

export const About = ({ personalInfo }) => {
  const photoSrc = personalInfo?.avatar || nadeeshiImg;

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
        {/* Left Column: Photo Card & Key Pillars */}
        <div className="about-profile-col">
          <div className="about-photo-card">
            <div className="about-photo-frame">
              <img
                src={photoSrc}
                alt={`${personalInfo?.name || 'Nadeeshi Jayaweera'} - Profile`}
                className="about-profile-img"
              />
              <div className="about-photo-badge">
                <span className="pulsing-green-dot"></span>
                <span>{personalInfo?.status || 'Available for Internship'}</span>
              </div>
            </div>
            <div className="about-photo-info">
              <h3 className="about-photo-name">{personalInfo?.name || 'Nadeeshi Jayaweera'}</h3>
              <p className="about-photo-title">Computer Science & Technology Undergrad</p>
              <p className="about-photo-sub">Uva Wellassa University, Sri Lanka</p>
            </div>
          </div>

          <div className="fact-card">
            <div className="fact-icon-wrap emerald">
              <IconGraduationCap size={22} />
            </div>
            <div className="fact-details">
              <span className="fact-label">Academic Degree</span>
              <h4 className="fact-value">{personalInfo?.degree || 'B.Sc. (Hons) in Computer Science & Technology'}</h4>
              <p className="fact-desc">Uva Wellassa University, Badulla, Sri Lanka</p>
            </div>
          </div>

          <div className="fact-card">
            <div className="fact-icon-wrap mint">
              <IconCode size={22} />
            </div>
            <div className="fact-details">
              <span className="fact-label">Core Technical Stack</span>
              <h4 className="fact-value">React • PHP • MySQL</h4>
              <p className="fact-desc">Full-stack web application development & database systems</p>
            </div>
          </div>

          <div className="fact-card">
            <div className="fact-icon-wrap green">
              <IconMapPin size={22} />
            </div>
            <div className="fact-details">
              <span className="fact-label">Location & Availability</span>
              <h4 className="fact-value">Sri Lanka</h4>
              <p className="fact-desc">Available for On-site & Remote Internship roles</p>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Strengths */}
        <div className="about-narrative-col">
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

            <div className="internship-callout-box">
              <div className="callout-icon">
                <IconBriefcase size={22} />
              </div>
              <div className="callout-body">
                <h4>Actively Seeking Software Development Internship</h4>
                <p>
                  Ready to contribute my energy, adaptability, and software fundamentals to production engineering teams while learning modern industrial methodologies.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Strengths Checklist */}
          <div className="strengths-box">
            <h4 className="strengths-title">Core Strengths & Values</h4>
            <div className="strengths-list">
              <div className="strength-item">
                <IconCheckCircle size={16} className="text-emerald" />
                <span>Clean, modular, and maintainable code</span>
              </div>
              <div className="strength-item">
                <IconCheckCircle size={16} className="text-emerald" />
                <span>Quick learner with strong algorithmic aptitude</span>
              </div>
              <div className="strength-item">
                <IconCheckCircle size={16} className="text-emerald" />
                <span>Collaborative team player (group project tested)</span>
              </div>
              <div className="strength-item">
                <IconCheckCircle size={16} className="text-emerald" />
                <span>Dedicated work ethic with continuous improvement mindset</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

