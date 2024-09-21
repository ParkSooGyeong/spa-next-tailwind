'use client';

import { FaBars } from 'react-icons/fa';

export default function Header({ toggleNav }: { toggleNav: () => void }) {
  return (
    <header className="fixed top-0 right-0 w-full bg-gray-800 p-4 flex justify-end z-50 md:hidden">
      {/* 모바일 버튼 */}
      <button
        onClick={toggleNav}
        className="text-white p-2 bg-gray-800 rounded">
        <FaBars size={24} />
      </button>
    </header>
  );
}
