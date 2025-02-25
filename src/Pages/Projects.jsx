import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Conference Ticket Generator",
    description: "A web app for generating and managing conference tickets using QR codes.",
    tech: ["React", "Next.js", "Tailwind", "Firebase"],
    image: "https://via.placeholder.com/400x250", // Replace with real image
    github: "https://github.com/yourusername/conference-ticket-generator",
    demo: "https://yourprojectdemo.com",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my skills and projects with smooth animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "https://via.placeholder.com/400x250", // Replace with real image
    github: "https://github.com/yourusername/portfolio",
    demo: "https://yourportfolio.com",
  },
  {
    title: "E-Commerce Store",
    description: "A fully responsive online store with authentication and payment integration.",
    tech: ["Next.js", "Stripe", "Tailwind", "MongoDB"],
    image: "https://via.placeholder.com/400x250", // Replace with real image
    github: "https://github.com/yourusername/ecommerce-store",
    demo: "https://yourecommercedemo.com",
  },
];

const Projects = () => {
  return (
    <section id="project" className="flex items-center justify-center text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">🚀 My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-green-500/40 transition duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400 my-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-green-600/20 text-green-400 text-sm px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center gap-1">
                    <FontAwesomeIcon icon={faCode} className="text-lg" /> GitHub
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 flex items-center gap-1">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-lg" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
