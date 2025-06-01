/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState } from 'react';

interface OnClickProps {
  onNavigate?: (path: string) => void;
}

const AppleNavbar: React.FC<OnClickProps> = ({ onNavigate }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavigate = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <nav className="bg-[#f5f5f7] bg-opacity-90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center justify-between w-full">
            {/* Apple Logo */}
            <button 
              onClick={() => handleNavigate('/')}
              className="text-gray-800 hover:text-gray-600"
              aria-label="Apple"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 16 20">
                <path d="M11.03,9.97c0.02,2.69,2.37,3.58,2.39,3.59c-0.02,0.07-0.37,1.25-1.21,2.47c-0.73,1.07-1.49,2.14-2.68,2.16 c-1.17,0.02-1.55-0.69-2.89-0.69c-1.34,0-1.76,0.67-2.86,0.71c-1.15,0.04-2.02-1.16-2.75-2.23c-1.5-2.17-2.65-6.13-1.11-8.81 c0.77-1.33,2.14-2.18,3.63-2.2c1.13-0.02,2.2,0.76,2.89,0.76c0.69,0,1.99-0.94,3.36-0.8c0.57,0.02,2.18,0.23,3.21,1.76 C13.01,6.73,11.01,7.28,11.03,9.97 M8.94,3.03C9.55,2.3,9.95,1.31,9.83,0.32C8.97,0.36,7.92,0.9,7.3,1.62 C6.73,2.27,6.26,3.28,6.4,4.24C7.35,4.31,8.32,3.76,8.94,3.03" />
              </svg>
            </button>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => handleNavigate('/cua-hang')}
                className="text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                Cửa Hàng
              </button>
              <button 
                onClick={() => handleNavigate('/mac')}
                className="text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                Mac
              </button>
              <button 
                onClick={() => handleNavigate('/ipad')}
                className="text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                iPad
              </button>
              <button 
                onClick={() => handleNavigate('/iphone')}
                className="text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                iPhone
              </button>
              <button 
                onClick={() => handleNavigate('/watch')}
                className="text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                Watch
              </button>
              <button 
                onClick={() => handleNavigate('/airpods')}
                className="text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                AirPods
              </button>
              <button 
                onClick={() => handleNavigate('/tv-nha')}
                className="text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                TV & Nhà
              </button>
              <button 
                onClick={() => handleNavigate('/giai-tri')}
                className="text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                Giải Trí
              </button>
              <button 
                onClick={() => handleNavigate('/phu-kien')}
                className="text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                Phụ Kiện
              </button>
              <button 
                onClick={() => handleNavigate('/ho-tro')}
                className="text-sm font-medium text-gray-800 hover:text-gray-600"
              >
                Hỗ Trợ
              </button>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-gray-800 hover:text-gray-600"
                aria-label="Search"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                  <path d="M15.7 14.3l-4.2-4.2c1-1.2 1.6-2.8 1.6-4.6 0-3.9-3.1-7-7-7S0 1.6 0 5.5s3.1 7 7 7c1.8 0 3.4-.6 4.6-1.6l4.2 4.2c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.7 0-1zM2 5.5C2 2.7 4.2.5 7 .5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z" />
                </svg>
              </button>
              <button 
                onClick={() => handleNavigate('/cart')}
                className="text-gray-800 hover:text-gray-600"
                aria-label="Shopping Bag"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                  <path d="M12.32 10.68a.5.5 0 0 1 .48.48v.16a.5.5 0 0 1-.48.48H3.68a.5.5 0 0 1-.48-.48v-.16a.5.5 0 0 1 .48-.48h8.64zm0-3.68a.5.5 0 0 1 .48.48v.16a.5.5 0 0 1-.48.48H3.68a.5.5 0 0 1-.48-.48v-.16a.5.5 0 0 1 .48-.48h8.64zm0-3.68a.5.5 0 0 1 .48.48v.16a.5.5 0 0 1-.48.48H3.68a.5.5 0 0 1-.48-.48v-.16a.5.5 0 0 1 .48-.48h8.64zM14 16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button - Visible on small screens */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-800 hover:text-gray-600 focus:outline-none">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-12 left-0 right-0 bg-white p-4 shadow-md">
          <div className="max-w-md mx-auto flex items-center border-b border-gray-300">
            <svg className="w-4 h-4 fill-current text-gray-500 mr-2" viewBox="0 0 16 16">
              <path d="M15.7 14.3l-4.2-4.2c1-1.2 1.6-2.8 1.6-4.6 0-3.9-3.1-7-7-7S0 1.6 0 5.5s3.1 7 7 7c1.8 0 3.4-.6 4.6-1.6l4.2 4.2c.1.1.3.2.5.2s.4-.1.5-.2c.3-.3.3-.7 0-1zM2 5.5C2 2.7 4.2.5 7 .5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z" />
            </svg>
            <input
              type="text"
              placeholder="Tìm kiếm trên apple.com"
              className="w-full py-2 focus:outline-none"
            />
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                <path d="M15.7 1.7c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 6.6 1.7.3C1.3-.1.7-.1.3.3s-.4 1 0 1.4L6.6 8 .3 14.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3L8 9.4l6.3 6.3c.2.2.4.3.7.3.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4L9.4 8l6.3-6.3z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AppleNavbar;