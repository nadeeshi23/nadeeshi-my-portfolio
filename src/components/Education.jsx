import { IconGraduationCap, IconMapPin, IconCheckCircle } from './Icons';

export const Education = ({ educationData }) => {
  return (
    <section id="education" className="section-container">
      <div className="section-header">
        <div className="section-eyebrow">
          <span className="eyebrow-dot"></span>
          <span>Academic Background</span>
        </div>
        <h2 className="section-title">
          My <span className="text-gradient-emerald">Education</span>
        </h2>
        <p className="section-subtitle">
          Academic foundation and coursework shaping my understanding of computer systems, software engineering, and problem solving.
        </p>
      </div>

      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div key={item.institution} className="education-card">
            <div className="timeline-marker">
              <div className="marker-dot">
                <IconGraduationCap size={16} />
              </div>
              {index < educationData.length - 1 && <div className="marker-line"></div>}
            </div>

            <div className="education-content">
              <div className="education-header">
                <div>
                  <div className="edu-status-badge">
                    <span className="status-dot"></span>
                    <span>{item.status}</span>
                  </div>
                  <h3 className="institution-name">{item.institution}</h3>
                  <h4 className="degree-title">{item.degree}</h4>
                </div>
                <div className="edu-meta">
                  <span className="edu-period">{item.period}</span>
                  <span className="edu-location">
                    <IconMapPin size={14} />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="education-description">{item.description}</p>

              <div className="education-highlights">
                <h5 className="highlights-title">Key Highlights & Modules:</h5>
                <ul className="highlights-list">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="highlight-item">
                      <IconCheckCircle size={15} className="highlight-check" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
