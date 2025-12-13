import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Project Title 1",
      description: "A brief description of the project, its purpose, and the problem it solves. Highlight the key features and your specific contributions.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Project Title 2",
      description: "Another interesting project that demonstrates your skills. Explain the technical challenges you faced and how you overcame them.",
      tags: ["TypeScript", "Next.js", "Tailwind"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Project Title 3",
      description: "A side project or experiment. Showcases your ability to learn new technologies and build something from scratch.",
      tags: ["Python", "FastAPI", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-all duration-300 border border-gray-700 group">
              <div className="h-48 bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition-colors">
                <Folder size={48} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium text-blue-300 bg-blue-900/30 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                    <Github size={18} className="mr-2" /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink size={18} className="mr-2" /> Live Demo
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