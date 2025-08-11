import { FaLightbulb , FaLaptopCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";

function VerticalNav({ setActiveSection, activeSection }) {
  return (
    
    <div className="vertical-nav">

      <div className="nav-item m-0 p-0" onClick={() => setActiveSection("skills")}>
       <FaLaptopCode
        className={`nav-icon ${activeSection === "skills" ? "active" : ""}`}
        onClick={() => setActiveSection("skills")}
        title="Skills"
        />
        <span className="m-0 p-0 text-center ">Skills</span>
      </div>

      <div className="nav-item m-0 p-0" onClick={() => setActiveSection("projects")}>
        <FaBriefcase
          className={`nav-icon ${activeSection === "projects" ? "active" : ""}`}
          onClick={() => setActiveSection("projects")}
          title="Projects"
        />
        <span className="m-0 p-0 text-center ">Client</span>
      </div>

      <div className="nav-item m-0 p-0" onClick={() => setActiveSection("ownprojects")}>
        <FaLightbulb
          className={`nav-icon ${activeSection === "ownprojects" ? "active" : ""}`}
          onClick={() => setActiveSection("ownprojects")}
          title="OwnProjects"
        />
        <span className="m-0 p-0 text-center ">Personal</span>
      </div>

      <div className="nav-item m-0 p-0" onClick={() => setActiveSection("education")}>
        <FaGraduationCap
          className={`nav-icon ${activeSection === "education" ? "active" : ""}`}
          title="Education"
        />
        <span className="m-0 p-0">Education</span>
      </div>
    </div>
  );
}
export default VerticalNav;