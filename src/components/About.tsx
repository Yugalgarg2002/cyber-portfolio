import { Code, Globe, Server } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <Code className="text-blue-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Frontend Dev</h3>
            <p className="text-gray-400">
              Passionate about crafting responsive and interactive user interfaces using React, Tailwind, and modern CSS.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
              <Server className="text-green-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Backend Dev</h3>
            <p className="text-gray-400">
              Experience building scalable APIs and backend services using Node.js, Express, and SQL/NoSQL databases.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <Globe className="text-purple-500" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Deployment</h3>
            <p className="text-gray-400">
              Proficient in CI/CD pipelines and deploying applications to cloud platforms like Vercel, Netlify, and AWS.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-900 p-8 rounded-lg">
          <p className="text-gray-300 leading-relaxed mb-6">
            I am an Associate Software Engineer with a strong foundation in computer science principles. 
            I love solving complex problems and turning ideas into reality through code. 
            Currently focused on full-stack development and learning new technologies to stay ahead in the tech landscape.
          </p>
          <p className="text-gray-300 leading-relaxed">
            When I'm not coding, you can find me [Your Hobby 1], [Your Hobby 2], or exploring [Your Interest].
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;