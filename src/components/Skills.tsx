

const Skills = () => {
  const skills = {
    "Frontend": ["React", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    "Backend": ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
    "Tools": ["Git", "Docker", "VS Code", "Postman", "Figma"],
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-blue-400">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;