'use client'
import React from 'react';

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
  return (
    <header className={`w-full bg-[#f5f5f7] bg-opacity-80 backdrop-blur-md fixed top-0 z-50 ${className || ''}`} style={style} id={id}>
      <nav className='max-w-[1200px] mx-auto px-4 h-12 flex items-center justify-between'>
        <ul className='flex items-center h-full space-x-8 text-sm font-medium text-zinc-800'>
          <li>
            <a href="#" onClick={onClickHome} className='hover:text-gray-500 transition-colors'>
              <svg className='w-5 h-5 fill-current' viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.565 0c.825 0 1.65.322 2.278.934 1.066.934 1.586 2.503 1.386 3.954 1.354.161 2.556 1.194 2.984 2.503.428 1.308.214 2.728-.642 3.793-.536.644-1.173 1.254-1.888 1.737.107.402.107.805.107 1.207 0 .805-.214 1.576-.642 2.235-.643 1.04-1.78 1.683-3.02 1.683-1.173 0-2.237-.483-3.09-1.34-.857.857-1.92 1.34-3.092 1.34-1.237 0-2.375-.644-3.018-1.683-.428-.66-.643-1.43-.643-2.235 0-.402 0-.805.107-1.207-.714-.483-1.35-1.093-1.887-1.737-.856-1.065-1.07-2.485-.642-3.793.428-1.31 1.63-2.342 2.984-2.503-.2-1.451.32-3.02 1.387-3.954C1.785.322 2.61 0 3.435 0c.963 0 1.887.402 2.556 1.13.67-.728 1.594-1.13 2.556-1.13h.018zM5.991 9.926c-.428 0-.856.161-1.173.483-.642.644-.642 1.683 0 2.326.321.322.75.483 1.173.483.428 0 .856-.161 1.173-.483.321-.322.5-.75.5-1.163s-.179-.84-.5-1.163c-.317-.322-.745-.483-1.173-.483zm5.027 0c-.428 0-.856.161-1.173.483-.321.322-.5.75-.5 1.163s.179.84.5 1.163c.317.322.745.483 1.173.483.428 0 .856-.161 1.173-.483.642-.644.642-1.683 0-2.326-.317-.322-.745-.483-1.173-.483zM3.756 5.77c-.75 0-1.386.644-1.386 1.451s.635 1.451 1.386 1.451c.75 0 1.386-.644 1.386-1.451s-.635-1.451-1.386-1.451zm9.488 0c-.75 0-1.386.644-1.386 1.451s.635 1.451 1.386 1.451c.75 0 1.386-.644 1.386-1.451s-.635-1.451-1.386-1.451zM8.5 1.254c-.535 0-1.07.241-1.386.644-.321.402-.428.92-.321 1.415.214.04.428.12.642.201.214.08.428.201.642.322.214-.402.535-.805.963-1.093.428-.282.91-.483 1.387-.564-.214-1.13-1.173-1.925-1.927-1.925z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" onClick={onClickStore} className='hover:text-gray-500 transition-colors'>Cửa Hàng</a>
          </li>
          <li>
            <a href="#" onClick={onClickMac} className='hover:text-gray-500 transition-colors'>Mac</a>
          </li>
          <li>
            <a href="#" onClick={onClickIPad} className='hover:text-gray-500 transition-colors'>iPad</a>
          </li>
          <li>
            <a href="#" onClick={onClickIPhone} className='hover:text-gray-500 transition-colors'>iPhone</a>
          </li>
          <li>
            <a href="#" onClick={onClickWatch} className='hover:text-gray-500 transition-colors'>Watch</a>
          </li>
          <li>
            <a href="#" onClick={onClickAirPods} className='hover:text-gray-500 transition-colors'>AirPods</a>
          </li>
          <li>
            <a href="#" onClick={onClickTV} className='hover:text-gray-500 transition-colors'>TV & Nhà</a>
          </li>
          <li>
            <a href="#" onClick={onClickEntertainment} className='hover:text-gray-500 transition-colors'>Giải Trí</a>
          </li>
          <li>
            <a href="#" onClick={onClickAccessories} className='hover:text-gray-500 transition-colors'>Phụ Kiện</a>
          </li>
          <li>
            <a href="#" onClick={onClickSupport} className='hover:text-gray-500 transition-colors'>Hỗ Trợ</a>
          </li>
        </ul>
        <div className='flex items-center space-x-4'>
          <button onClick={onClickSearch} className='hover:text-gray-500 transition-colors'>
            <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.707 14.293l-4.822-4.822a6.019 6.019 0 001.115-3.471c0-3.309-2.691-6-6-6s-6 2.691-6 6 2.691 6 6 6a5.978 5.978 0 003.471-1.115l4.822 4.822a.997.997 0 001.414 0 .999.999 0 000-1.414zM6 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" fill="currentColor" />
            </svg>
          </button>
          <button onClick={onClickBag} className='hover:text-gray-500 transition-colors'>
            <svg className='w-4 h-4' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4h-1V3c0-1.654-1.346-3-3-3S5 1.346 5 3v1H4c-1.103 0-2 .897-2 2v7c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM7 3c0-.551.449-1 1-1s1 .449 1 1v1H7V3zm5 10H4V6h8v7z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default AppleNavbar;