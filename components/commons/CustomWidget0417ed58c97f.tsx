/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState } from 'react';

interface NavBarProps {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  onClickHome?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickAbout?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickServices?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClickContact?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onSubmitForm?: React.MouseEventHandler<HTMLFormElement> | undefined;
  onChangeInput?: (value: string) => void;
  onFocusInput?: () => void;
  onBlurInput?: () => void;
}

const AppleNavBar: React.FC<NavBarProps> = ({
  id,
  style,
  className,
  onClickHome
}) => {
  const [searchActive, setSearchActive] = useState(false);
  
  const navItems = [
    { id: 'store', label: 'Cửa Hàng' },
    { id: 'mac', label: 'Mac' },
    { id: 'ipad', label: 'iPad' },
    { id: 'iphone', label: 'iPhone' },
    { id: 'watch', label: 'Watch' },
    { id: 'airpods', label: 'AirPods' },
    { id: 'tv', label: 'TV & Nhà' },
    { id: 'entertainment', label: 'Giải Trí' },
    { id: 'accessories', label: 'Phụ Kiện' },
    { id: 'support', label: 'Hỗ Trợ' },
  ];

  return (
    <nav 
      id={id} 
      style={style} 
      className={`w-full bg-[#1d1d1f]/80 backdrop-blur-md text-white h-12 px-4 md:px-8 flex items-center justify-between ${className || ''}`}
    >
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <button 
          onClick={onClickHome} 
          className="mr-6"
        >
          <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 17 17">
            <path d="M8.565 1.8c.966 0 1.932.731 2.703 1.463-.731.731-1.463 1.463-2.198 1.463-.966 0-1.932-.731-2.703-1.463.731-.731 1.463-1.463 2.198-1.463zm4.396 7.782c0-1.463.731-2.703 2.198-3.669-.731-1.463-2.703-2.703-4.396-2.703-1.463 0-2.198.731-3.164.731-.731 0-1.932-.731-3.164-.731-1.932.235-4.13 1.932-4.13 5.601 0 3.669 2.703 7.782 4.901 7.782.966 0 1.932-.731 3.164-.731 1.463 0 2.198.731 3.164.731 2.198 0 4.901-4.13 4.901-7.013-1.932-.235-3.434-1.463-3.434-2.932v-.066z" />
          </svg>
        </button>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="text-xs font-medium hover:text-white/70 transition-colors"
              onClick={() => console.log(`Clicked ${item.id}`)}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-5">
          <button 
            onClick={() => setSearchActive(!searchActive)}
            className="hover:text-white/70"
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 15.5L11.5 11.5M13.5 7C13.5 10.5899 10.5899 13.5 7 13.5C3.41015 13.5 0.5 10.5899 0.5 7C0.5 3.41015 3.41015 0.5 7 0.5C10.5899 0.5 13.5 3.41015 13.5 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button className="hover:text-white/70">
            <svg className="w-5 h-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 1.5H2.5L4 11.5H12.5L14 4.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="4.5" cy="14" r="1.5" fill="currentColor"/>
              <circle cx="11.5" cy="14" r="1.5" fill="currentColor"/>
            </svg>
          </button>
        </div>
      </div>
      
      {searchActive && (
        <div className="absolute top-12 left-0 right-0 bg-[#1d1d1f] p-4 flex justify-center">
          <div className="w-full max-w-md">
            <div className="relative">
              <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" viewBox="0 0 16 16" fill="none">
                <path d="M15.5 15.5L11.5 11.5M13.5 7C13.5 10.5899 10.5899 13.5 7 13.5C3.41015 13.5 0.5 10.5899 0.5 7C0.5 3.41015 3.41015 0.5 7 0.5C10.5899 0.5 13.5 3.41015 13.5 7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Tìm kiếm trên apple.com"
                className="w-full bg-[#323236] text-white rounded-lg pl-10 py-2 focus:outline-none"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AppleNavBar;