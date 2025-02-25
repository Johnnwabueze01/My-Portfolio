import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { CodeBracketIcon } from "@heroicons/react/24/solid"; // Tailwind Icon

const skills = [
  { name: "HTML5", icon: <FontAwesomeIcon icon={faHtml5} className="text-orange-500 text-4xl mb-3" /> },
  { name: "CSS3", icon: <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 text-4xl mb-3" /> },
  { name: "JavaScript", icon: <FontAwesomeIcon icon={faJs} className="text-yellow-400 text-4xl mb-3" /> },
  { name: "React", icon: <FontAwesomeIcon icon={faReact} className="text-blue-400 text-4xl mb-3" /> },
  { name: "Tailwind CSS", icon: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS Logo" className="w-16 h-16"/>   },
  { name: "Bootstrap", icon: <FontAwesomeIcon icon={faBootstrap} className="text-purple-500 text-4xl mb-3" /> },
  { name: "Frontend Dev", icon: <FontAwesomeIcon icon={faLaptopCode} className="text-indigo-500 text-4xl mb-3" /> },
  { name: "Responsive Design", icon: <FontAwesomeIcon icon={faMobileAlt} className="text-green-400 text-4xl mb-3" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="items-center justify-center bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">💡 My Skills</h2>
        <div className="grid grid-cols-2 justify-center sm:grid-cols-3 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-green-500/40 transition duration-300 flex flex-col items-center justify-center"
            >
              {skill.icon} {/* ✅ Now this renders correctly */}
              <p className="text-white font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
