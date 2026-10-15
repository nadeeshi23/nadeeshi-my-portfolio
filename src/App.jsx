import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { personalInfo, skillsData, educationData, projectsData } from './data/portfolioData';
import './App.css';

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const handleOpenCV = () => setIsCVModalOpen(true);
  const handleCloseCV = () => setIsCVModalOpen(false);

  return (
    <div className="portfolio-app">
      {/* Top Navbar */}
      <Navbar personalInfo={personalInfo} onOpenCV={handleOpenCV} />

      {/* Main Content Sections */}
      <main className="main-content">
        <Hero personalInfo={personalInfo} onOpenCV={handleOpenCV} />
        <About personalInfo={personalInfo} />
        <Skills skillsData={skillsData} />
        <Education educationData={educationData} />
        <Projects projectsData={projectsData} />
        <Contact personalInfo={personalInfo} onOpenCV={handleOpenCV} />
      </main>

      {/* Footer */}
      <Footer personalInfo={personalInfo} />

      {/* Interactive CV / Resume Preview Modal */}
      <ResumeModal
        isOpen={isCVModalOpen}
        onClose={handleCloseCV}
        personalInfo={personalInfo}
      />
    </div>
  );
}

export default App;
