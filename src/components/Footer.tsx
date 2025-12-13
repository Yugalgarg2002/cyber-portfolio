import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} Yugal Garg. All rights reserved.</p>
        </div>
        <div className="flex items-center space-x-1 text-sm">
          <span>Built with</span>
          <Heart size={16} className="text-red-500 fill-current" />
          <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
