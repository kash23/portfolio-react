import { FaUser, FaLaptopCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";

function VerticalNav({ setActiveSection, activeSection }) {
  return (
    <div className="vertical-nav align-items-center d-flex flex-column">
      <FaUser
        className={`nav-icon ${activeSection === "about" ? "active" : ""}`}
        onClick={() => setActiveSection("about")}
        title="About"
      />
      <FaLaptopCode
        className={`nav-icon ${activeSection === "skills" ? "active" : ""}`}
        onClick={() => setActiveSection("skills")}
        title="Skills"
      />
      <FaBriefcase
        className={`nav-icon ${activeSection === "projects" ? "active" : ""}`}
        onClick={() => setActiveSection("projects")}
        title="Projects"
      />
      <FaGraduationCap
        className={`nav-icon ${activeSection === "education" ? "active" : ""}`}
        onClick={() => setActiveSection("education")}
        title="Education"
      />
    </div>
  );
}

export default VerticalNav;
