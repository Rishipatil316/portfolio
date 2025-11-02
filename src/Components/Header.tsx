import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800">Rishi's Portfolio</h1>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-800 focus:outline-none">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/about" className="text-blue-500 hover:underline">About</Link>
          <Link to="/skills" className="text-blue-500 hover:underline">Skills</Link>
          <Link to="/projects" className="text-blue-500 hover:underline">Projects</Link>
          <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col mt-4 space-y-2 md:hidden">
          <Link to="/" className="text-blue-500 hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="text-blue-500 hover:underline" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/skills" className="text-blue-500 hover:underline" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/projects" className="text-blue-500 hover:underline" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="text-blue-500 hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
