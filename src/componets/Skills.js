import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaBootstrap,
  FaMicrosoft,
  FaCode,
} from "react-icons/fa";
import {
  DiDotnet,
  DiMysql,
  DiMsqlServer,
} from "react-icons/di";

function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        { name: " C# ", icon: <FaCode /> },
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },
    {
      category: "Web Technologies",
      items: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Vue.js", icon: <FaVuejs /> },
        { name: "jQuery", icon: <FaCode /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: ".NET Core", icon: <DiDotnet /> },
        { name: "ASP.NET MVC", icon: <FaMicrosoft /> },
        { name: ".NET MAUI", icon: <FaMicrosoft /> },
        { name: "ASP.NET Razor", icon: <FaMicrosoft /> },
        { name: "Entity Framework (EF) Core", icon: <FaDatabase /> },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: <DiMysql /> },
        { name: "SQL Server", icon: <DiMsqlServer /> },
      ],
    },
    {
      category: "Tools & Methodologies",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Agile", icon: <FaCode /> },
        { name: "SOLID principles", icon: <FaCode /> },
        { name: "REST APIs", icon: <FaCode /> },
        { name: "JWT", icon: <FaCode /> },
      ],
    },
  ];

  return (
    <div className="px-4">
      <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skills.map((section, index) => (
          <div key={index}>
            <h4 className="font-bold text-lg mb-2">{section.category}</h4>
            <ul className="space-y-2">
              {section.items.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-xl text-blue-600"> {skill.icon} </span>
                  <span> {skill.name} </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
