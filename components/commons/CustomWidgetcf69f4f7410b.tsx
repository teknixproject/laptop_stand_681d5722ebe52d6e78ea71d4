/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React from 'react';

interface OnClickProps {
  onClickApple?: () => void;
  onClickStore?: () => void;
  onClickMac?: () => void;
  onClickIpad?: () => void;
  onClickIphone?: () => void;
  onClickWatch?: () => void;
  onClickAirPods?: () => void;
  onClickTvAndHome?: () => void;
  onClickEntertainment?: () => void;
  onClickAccessories?: () => void;
  onClickSupport?: () => void;
  onClickSearch?: () => void;
  onClickCart?: () => void;
}

const AppleNavbar: React.FC<OnClickProps> = ({
  onClickApple,
  onClickStore,
  onClickMac,
  onClickIpad,
  onClickIphone,
  onClickWatch,
  onClickAirPods,
  onClickTvAndHome,
  onClickEntertainment,
  onClickAccessories,
  onClickSupport,
  onClickSearch,
  onClickCart
}) => {
  return (
    <nav className="bg-[#f5f5f7] bg-opacity-90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-8">
            <button onClick={onClickApple} className="text-gray-800">
              <svg className="w-5 h-5" viewBox="0 0 16 20" fill="currentColor">
                <path d="M12.563 4.456c1.167-1.417 1.04-3.343 1.04-3.343s-1.896.167-3.063 1.584c-1.167 1.417-1.04 3.343-1.04 3.343s1.896-.167 3.063-1.584zm.437 2.544c-1.583 0-2.292.812-3.458.812-1.167 0-2.292-.812-3.875-.812-1.583 0-3.25.958-4.25 2.583-1.5 2.584-.396 6.417 1.083 8.521.75 1.063 1.625 2.23 2.75 2.188 1.125-.042 1.542-.73 2.875-.73 1.333 0 1.708.73 2.875.73 1.167 0 1.917-1.042 2.667-2.105.833-1.188 1.167-2.344 1.167-2.396 0 0-2.292-.875-2.292-3.5 0-2.21 1.833-3.25 1.833-3.25-.958-1.458-2.458-1.542-2.958-1.542-.125 0-.208 0-.208 0z" />
              </svg>
            </button>
            <button onClick={onClickStore} className="text-gray-800 text-xs font-medium hover:text-gray-600">
              Cửa Hàng
            </button>
            <button onClick={onClickMac} className="text-gray-800 text-xs font-medium hover:text-gray-600">
              Mac
            </button>
            <button onClick={onClickIpad} className="text-gray-800 text-xs font-medium hover:text-gray-600">
              iPad
            </button>
            <button onClick={onClickIphone} className="text-gray-800 text-xs font-medium hover:text-gray-600">
              iPhone
            </button>
            <button onClick={onClickWatch} className="text-gray-800 text-xs font-medium hover:text-gray-600">
              Watch
            </button>
            <button onClick={onClickAirPods} className="text-gray-800 text-xs font-medium hover:text-gray-600">
              AirPods
            </button>
            <button onClick={onClickTvAndHome} className="text-gray-800 text-xs font-medium hover:text-gray-600">
              TV & Nhà
            </button>
            <button onClick={onClickEntertainment} className="text-gray-800 text-xs font-medium hover:text-gray-600">
              Giải Trí
            </button>
            <button onClick={onClickAccessories} className="text-gray-800 text-xs font-medium hover:text-gray-600">
              Phụ Kiện
            </button>
            <button onClick={onClickSupport} className="text-gray-800 text-xs font-medium hover:text-gray-600">
              Hỗ Trợ
            </button>
          </div>
          <div className="flex items-center space-x-5">
            <button onClick={onClickSearch} className="text-gray-800">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={onClickCart} className="text-gray-800">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11M5 9H19L20 21H4L5 9Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppleNavbar;