import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="h-full w-64 bg-gray-800 text-white">
      <ul className="space-y-2 p-4">
        <li>
          <Link to="/" className="block p-2 hover:bg-gray-700 rounded">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="block p-2 hover:bg-gray-700 rounded">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="block p-2 hover:bg-gray-700 rounded">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
