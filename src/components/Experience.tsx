import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Company Name",
      period: "2023 - Present",
      description: [
        "Developed and maintained scalable web applications using React and Node.js.",
        "Collaborated with cross-functional teams to deliver high-quality software solutions.",
        "Optimized application performance, reducing load times by 20%."
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Previous Company",
      period: "2022 - 2023",
      description: [
        "Assisted in the development of frontend components using React.",
        "Wrote unit tests to ensure code reliability and quality.",
        "Participated in code reviews and agile scrum meetings."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 md:p-8 hover:bg-gray-800/80 transition-colors border border-gray-800 hover:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <div className="flex items-center text-blue-400">
                    <Briefcase size={16} className="mr-2" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;