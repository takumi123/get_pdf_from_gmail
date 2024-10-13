import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-xl font-bold text-blue-500">
          <Mail className="w-6 h-6 mr-2" />
          Gmail Attachment Processor
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/dashboard" className="text-gray-600 hover:text-blue-500">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/files" className="text-gray-600 hover:text-blue-500">
                Files
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;