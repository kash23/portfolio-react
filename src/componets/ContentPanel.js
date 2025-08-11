import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import OwnProjects from './OwnProjects';

function ContentPanel({ activeSection }) {
  return (
    <div className="content-panel ">
      {activeSection === "ownprojects" && <OwnProjects />}
      {activeSection === "skills" && <Skills />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "education" && <Education />}
    </div>
  );
}

export default ContentPanel;
