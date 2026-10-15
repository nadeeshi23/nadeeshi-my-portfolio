import { IconClose, IconBriefcase, IconGraduationCap, IconCheckCircle } from './Icons';

export const ResumeModal = ({ isOpen, onClose, personalInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="cv-modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="badge-pill">Curriculum Vitae Preview</span>
            <h3 id="cv-modal-title">{personalInfo.name} - Resume Overview</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close CV modal">
            <IconClose size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="cv-summary-card">
            <div className="cv-summary-top">
              <div>
                <h4 className="cv-name">{personalInfo.name}</h4>
                <p className="cv-role">{personalInfo.role} • CST Undergraduate</p>
                <p className="cv-uni">{personalInfo.university}</p>
              </div>
              <div className="cv-target-badge">
                <span className="status-dot"></span>
                <span>Seeking Internship</span>
              </div>
            </div>

            <div className="cv-grid">
              <div className="cv-col">
                <h5><IconGraduationCap size={16} /> Education</h5>
                <p className="cv-item-title">B.Sc. (Hons) in Computer Science & Technology</p>
                <p className="cv-item-sub">Uva Wellassa University, Sri Lanka</p>
                <p className="cv-item-meta">Focus: Software Engineering, Data Structures, Database Systems</p>
              </div>

              <div className="cv-col">
                <h5><IconBriefcase size={16} /> Key Academic Project</h5>
                <p className="cv-item-title">LK Agro Market (University Group Project)</p>
                <p className="cv-item-sub">Agricultural Marketplace • React, PHP, MySQL</p>
                <p className="cv-item-meta">Direct farmer-to-buyer web platform with role dashboards & order flows.</p>
              </div>
            </div>

            <div className="cv-skills-preview">
              <h5>Core Competencies</h5>
              <div className="cv-tag-list">
                <span>React.js</span>
                <span>PHP</span>
                <span>MySQL</span>
                <span>JavaScript (ES6+)</span>
                <span>REST APIs</span>
                <span>Git & GitHub</span>
                <span>OOP</span>
                <span>Data Structures</span>
              </div>
            </div>

            <div className="cv-note-box">
              <IconCheckCircle size={18} className="text-emerald" />
              <div>
                <p className="cv-note-title">Ready for Interview & Technical Assessment</p>
                <p className="cv-note-desc">
                  To view or download the full formatted resume, contact via email or replace <code>public/resume.pdf</code>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href={`mailto:${personalInfo.socialLinks.email}?subject=Software%20Development%20Internship%20Inquiry%20-%20Nadeeshi%20Jayaweera`}
            className="btn btn-secondary"
          >
            Request Full CV via Email
          </a>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={onClose}
          >
            Direct Contact Form
          </a>
        </div>
      </div>
    </div>
  );
};
