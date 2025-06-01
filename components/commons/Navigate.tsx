'use client'
import React, { useState } from 'react';

interface OnClickProps {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  onClickHome?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickStore?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickMac?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickIPad?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickIPhone?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickWatch?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickAirPods?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickTV?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickEntertainment?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickAccessories?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickSupport?: React.MouseEventHandler<HTMLAnchorElement>;
  onClickSearch?: React.MouseEventHandler<HTMLButtonElement>;
  onClickBag?: React.MouseEventHandler<HTMLButtonElement>;
}

const AppleNavbar: React.FC<OnClickProps> = ({
  id,
  style,
  className,
  onClickHome,
  onClickStore,
  onClickMac,
  onClickIPad,
  onClickIPhone,
  onClickWatch,
  onClickAirPods,
  onClickTV,
  onClickEntertainment,
  onClickAccessories,
  onClickSupport,
  onClickSearch,
  onClickBag
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#1d1d1f]/90 backdrop-blur-lg text-white' 
          : 'bg-[#f5f5f7]/90 backdrop-blur-lg text-[#1d1d1f]'
      } ${className || ''}`} 
      style={style} 
      id={id}
    >
      <nav className='max-w-[1200px] mx-auto h-12 flex items-center justify-between'>
        <ul className='flex items-center h-full w-full justify-between px-4 text-xs font-normal'>
          <li className='flex items-center justify-center'>
            <a href="#" onClick={onClickHome} className='transition-opacity duration-300 hover:opacity-70'>
              <svg className="h-5 w-5 fill-current" viewBox="0 0 14 17" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.018 12.353c-.215.486-.437.936-.672 1.353a7.27 7.27 0 01-.703.985c-.378.444-.773.752-1.185.926-.467.2-.972.303-1.514.307-.386 0-.847-.088-1.378-.265a4.948 4.948 0 00-1.42-.263c-.456 0-.942.088-1.457.264-.516.177-.93.27-1.243.277-.48.02-.96-.095-1.437-.346-.444-.195-.86-.513-1.25-.955a8.463 8.463 0 01-1.457-2.04C.435 11.578.154 10.52.008 9.49c-.127-1.16.006-2.166.4-3.02.32-.685.747-1.23 1.282-1.637.536-.407 1.118-.615 1.746-.625.342 0 .79.106 1.347.318.557.211.915.319 1.073.319.117 0 .513-.125 1.185-.375.635-.231 1.17-.326 1.607-.286.1.004.2.01.3.02 1.19.097 2.078.57 2.663 1.424-1.063.645-1.587 1.547-1.573 2.706.013.903.337 1.654.97 2.252.288.273.61.484.965.634-.077.226-.16.44-.248.654l.293.05zM9.905.863c0 .708-.258 1.37-.773 1.982-.622.73-1.375 1.15-2.19 1.083-.01-.09-.016-.185-.016-.282 0-.679.295-1.404.82-2 .262-.302.595-.553.999-.753.403-.197.784-.306 1.144-.326.01.099.016.197.016.296z" fillRule="nonzero"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="#" onClick={onClickStore} className='transition-opacity duration-300 hover:opacity-70'>Cửa Hàng</a>
          </li>
          <li>
            <a href="#" onClick={onClickMac} className='transition-opacity duration-300 hover:opacity-70'>Mac</a>
          </li>
          <li>
            <a href="#" onClick={onClickIPad} className='transition-opacity duration-300 hover:opacity-70'>iPad</a>
          </li>
          <li>
            <a href="#" onClick={onClickIPhone} className='transition-opacity duration-300 hover:opacity-70'>iPhone</a>
          </li>
          <li>
            <a href="#" onClick={onClickWatch} className='transition-opacity duration-300 hover:opacity-70'>Watch</a>
          </li>
          <li>
            <a href="#" onClick={onClickAirPods} className='transition-opacity duration-300 hover:opacity-70'>AirPods</a>
          </li>
          <li>
            <a href="#" onClick={onClickTV} className='transition-opacity duration-300 hover:opacity-70'>TV & Nhà</a>
          </li>
          <li>
            <a href="#" onClick={onClickEntertainment} className='transition-opacity duration-300 hover:opacity-70'>Giải Trí</a>
          </li>
          <li>
            <a href="#" onClick={onClickAccessories} className='transition-opacity duration-300 hover:opacity-70'>Phụ Kiện</a>
          </li>
          <li>
            <a href="#" onClick={onClickSupport} className='transition-opacity duration-300 hover:opacity-70'>Hỗ Trợ</a>
          </li>
          <li>
            <button onClick={onClickSearch} className='transition-opacity duration-300 hover:opacity-70'>
              <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.707 14.293l-4.822-4.822a6.019 6.019 0 001.115-3.471c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6a5.978 5.978 0 003.471-1.115l4.822 4.822a.997.997 0 001.414 0 .999.999 0 000-1.414zM6 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" fill="currentColor" />
              </svg>
            </button>
          </li>
          <li>
            <button onClick={onClickBag} className='transition-opacity duration-300 hover:opacity-70'>
              <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4h-1V3c0-1.654-1.346-3-3-3S5 1.346 5 3v1H4c-1.103 0-2 .897-2 2v7c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM7 3c0-.551.449-1 1-1s1 .449 1 1v1H7V3zm5 10H4V6h8v7z" fill="currentColor" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
      
      <div className={`h-[1px] w-full transition-opacity duration-300 ${isScrolled ? 'opacity-10 bg-gray-300' : 'opacity-0'}`}></div>
    </header>
  );
};

export default AppleNavbar;