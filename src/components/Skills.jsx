import { 
  IconCode, 
  IconServer, 
  IconTerminal, 
  IconDatabase, 
  IconSparkles 
} from './Icons';

export const Skills = ({ skillsData }) => {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return <IconCode size={22} />;
      case 'server':
        return <IconServer size={22} />;
      case 'terminal':
        return <IconTerminal size={22} />;
      case 'database':
      default:
        return <IconDatabase size={22} />;
    }
  };

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <div className="section-eyebrow">
          <span className="eyebrow-dot"></span>
          <span>Technical Toolkit</span>
        </div>
        <h2 className="section-title">
          Technical <span className="text-gradient-emerald">Skills</span>
        </h2>
        <p className="section-subtitle">
          Core technologies, libraries, databases, and engineering principles I utilize to build robust software.
        </p>
      </div>

      <div className="skills-grid">
        {skillsData.map((categoryGroup) => (
          <div key={categoryGroup.category} className="skill-category-card">
            <div className="skill-card-top">
              <div className="category-icon-box">
                {getCategoryIcon(categoryGroup.icon)}
              </div>
              <div>
                <h3 className="category-name">{categoryGroup.category}</h3>
                <p className="category-desc">{categoryGroup.description}</p>
              </div>
            </div>

            <div className="skills-tags-wrap">
              {categoryGroup.skills.map((skill) => (
                <div key={skill.name} className="skill-pill">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Primary Highlights Bar */}
      <div className="skills-featured-bar">
        <div className="featured-bar-header">
          <IconSparkles size={18} className="text-emerald" />
          <span>Primary Technology Stack in Focus:</span>
        </div>
        <div className="stack-badges-row">
          <span className="stack-badge highlight-react">React.js</span>
          <span className="stack-badge highlight-php">PHP</span>
          <span className="stack-badge highlight-mysql">MySQL</span>
          <span className="stack-badge highlight-js">JavaScript (ES6+)</span>
          <span className="stack-badge highlight-git">Git & GitHub</span>
          <span className="stack-badge highlight-rest">RESTful APIs</span>
        </div>
      </div>
    </section>
  );
};
