'use client'
import { useState, useRef, useEffect } from 'react';

interface OnClickProps {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  onClickHome?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickAbout?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickContact?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickSupport?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickSearch?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavigationBar: React.FC<OnClickProps> = ({
  id,
  style,
  className,
  onClickHome,
  onClickAbout,
  onClickContact,
  onClickSupport,
  onClickSearch
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav 
      id={id} 
      style={style} 
      className={`bg-red-500 rounded-full shadow-lg px-6 py-3 text-white flex items-center justify-between ${className || ''}`}
    >
      <div className="flex space-x-8 items-center">
        <a
          href="#"
          className="font-semibold hover:text-pink-100 transition-colors"
          onClick={onClickHome}
        >
          Home
        </a>
        <a
          href="#"
          className="font-semibold hover:text-pink-100 transition-colors"
          onClick={onClickAbout}
        >
          About
        </a>
        <a
          href="#"
          className="font-semibold hover:text-pink-100 transition-colors"
          onClick={onClickContact}
        >
          Contact
        </a>
        <div className="relative" ref={dropdownRef}>
          <a
            href="#"
            className="font-semibold hover:text-pink-100 transition-colors flex items-center"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
              onClickSupport?.(e);
            }}
          >
            Support
          </a>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-rose-500 rounded-lg shadow-xl py-2 z-10">
              <a href="#" className="block px-4 py-2 text-white hover:bg-rose-600 transition-colors">
                HTML
              </a>
              <a href="#" className="block px-4 py-2 text-white hover:bg-rose-600 transition-colors">
                CSS
              </a>
              <a href="#" className="block px-4 py-2 text-white hover:bg-rose-600 transition-colors">
                Javascript
              </a>
              <a href="#" className="block px-4 py-2 text-white hover:bg-rose-600 transition-colors">
                Sass
              </a>
            </div>
          )}
        </div>
      </div>
      
      <button 
        className="ml-6"
        onClick={(e) => {
          toggleSearch();
          onClickSearch?.(e);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      
      {searchOpen && (
        <div className="absolute top-16 right-4 w-64 bg-white rounded-lg shadow-lg p-2 z-10">
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1 text-gray-700 border rounded-l-lg focus:outline-none"
            />
            <button className="bg-red-500 text-white px-3 py-1 rounded-r-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;