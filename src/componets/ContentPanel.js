import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';

function ContentPanel({ activeSection }) {
  return (
    <div className="content-panel ">
      {activeSection === "about" && <h2>Hi, I'm Akash 👋</h2>}
      {activeSection === "skills" && <Skills />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "education" && <Education />}
    </div>
  );
}

export default ContentPanel;
