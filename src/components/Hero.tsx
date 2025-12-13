import { Mail, ArrowRight } from 'lucide-react';
import { siGithub } from 'simple-icons';
import SimpleIcon from './SimpleIcon';

// LinkedIn icon data (manually defined since it's missing from simple-icons export)
const siLinkedin = {
  title: 'LinkedIn',
  slug: 'linkedin',
  hex: '0A66C2',
  source: 'https://brand.linkedin.com/',
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
};

const Hero = () => {
  return (
    <section className="pt-20 pb-12 bg-gray-900 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Yugal Garg</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Associate Software Engineer
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            <strong>I build scalable systems smarter, not just harder.</strong><br /> My focus is on the backbone of modern software: Microservices and CI/CD Automation. What sets my process apart is my commitment to AI-augmented development. By continuously empowering myself with the latest AI engineering tools, I turn complex architectural concepts into deployed reality faster than traditional workflows allow. I am constantly evolving my stack to ensure reliability, scalability, and speed.
          </p>

          <div className="flex space-x-4 mb-8">
            <a href="https://github.com/Yugalgarg2002" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <SimpleIcon icon={siGithub} size={24} />
            </a>
            <a href="https://www.linkedin.com/in/yugalgarg2002/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <SimpleIcon icon={siLinkedin} size={24} />
            </a>
            <a href="mailto:yugalgarg7@gmail.com" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Mail size={24} />
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center transition-colors">
              View Work <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="#contact" className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Me
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-800 rounded-full overflow-hidden border-4 border-blue-500/20">
            {/* Placeholder for profile image */}
            <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-500">
              Profile Image
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
