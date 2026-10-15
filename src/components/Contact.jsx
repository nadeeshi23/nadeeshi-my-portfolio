import { useState } from 'react';
import { 
  IconMail, 
  IconGithub, 
  IconLinkedin, 
  IconMapPin, 
  IconCopy, 
  IconCheck, 
  IconArrowRight, 
  IconCV
} from './Icons';

export const Contact = ({ personalInfo, onOpenCV }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socialLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    // Client-side confirmation state
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <div className="section-eyebrow">
          <span className="eyebrow-dot"></span>
          <span>Get In Touch</span>
        </div>
        <h2 className="section-title">
          Contact <span className="text-gradient-emerald">Me</span>
        </h2>
        <p className="section-subtitle">
          Interested in discussing a software development internship opportunity, technical collaboration, or my university work? I'd love to connect!
        </p>
      </div>

      <div className="contact-grid">
        {/* Left: Contact Info & Channels */}
        <div className="contact-info-column">
          <div className="contact-intro-card">
            <div className="internship-status-tag">
              <span className="status-dot"></span>
              <span>Available for Software Development Internship</span>
            </div>
            <h3 className="contact-heading">Let's connect & collaborate</h3>
            <p className="contact-lead">
              I am actively seeking software development internship opportunities where I can apply my skills in React, PHP, and MySQL while contributing to impactful digital solutions.
            </p>
          </div>

          <div className="contact-methods-list">
            {/* Email Card with Quick Copy */}
            <div className="contact-method-card">
              <div className="method-icon-box emerald">
                <IconMail size={20} />
              </div>
              <div className="method-details">
                <span className="method-label">Direct Email</span>
                <a href={`mailto:${personalInfo.socialLinks.email}`} className="method-value">
                  {personalInfo.socialLinks.email}
                </a>
              </div>
              <button
                onClick={handleCopyEmail}
                className="copy-btn"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <IconCheck size={16} className="text-emerald" /> : <IconCopy size={16} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-card link-card"
            >
              <div className="method-icon-box dark">
                <IconGithub size={20} />
              </div>
              <div className="method-details">
                <span className="method-label">GitHub Profile</span>
                <span className="method-value">github.com/nadeeshi23</span>
              </div>
              <span className="method-action-arrow">
                <IconArrowRight size={16} />
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-card link-card"
            >
              <div className="method-icon-box mint">
                <IconLinkedin size={20} />
              </div>
              <div className="method-details">
                <span className="method-label">LinkedIn Profile</span>
                <span className="method-value">linkedin.com/in/# (Placeholder)</span>
              </div>
              <span className="method-action-arrow">
                <IconArrowRight size={16} />
              </span>
            </a>

            {/* University & Location Card */}
            <div className="contact-method-card">
              <div className="method-icon-box blue">
                <IconMapPin size={20} />
              </div>
              <div className="method-details">
                <span className="method-label">Location & University</span>
                <span className="method-value">Uva Wellassa University, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Quick CV Download Trigger */}
          <div className="cv-banner-box">
            <div>
              <h4 className="cv-banner-title">Need a copy of my CV?</h4>
              <p className="cv-banner-subtitle">Review my academic coursework and project experience.</p>
            </div>
            <button onClick={onOpenCV} className="btn btn-outline-emerald btn-sm">
              <IconCV size={16} />
              <span>Preview CV</span>
            </button>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="contact-form-column">
          <div className="contact-form-card">
            <h3 className="form-card-title">Send a Direct Message</h3>
            <p className="form-card-subtitle">
              Have an internship opening, question, or project inquiry? Fill out the form below.
            </p>

            {submitted ? (
              <div className="form-success-box">
                <div className="success-icon-wrap">
                  <IconCheck size={28} />
                </div>
                <h4>Message Sent!</h4>
                <p>
                  Thank you for reaching out, <strong>{formState.name}</strong>. I will get back to you promptly at <strong>{formState.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn btn-secondary btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="text-emerald">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="e.g. Jane Doe"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email <span className="text-emerald">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@company.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Development Internship Opportunity"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="text-emerald">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your opportunity or send a message..."
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  <span>Send Message</span>
                  <IconArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
