'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaHome, FaUser, FaFileAlt, FaGithub, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import Header from './Header';

export default function Sidebar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleNav = () => setIsNavOpen((prev) => !prev); // 네비게이션 열고 닫기

  // 외부 클릭 감지 및 네비게이션 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNavOpen(false); // 네비게이션 외부 클릭 시 닫기
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navRef]);

  return (
    <>
      <Header toggleNav={toggleNav} />
      {/* 네비 */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 h-full bg-gray-800 p-5 transition-transform duration-300 
                    ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 w-52 z-50`}>
        <div className="text-white mb-10">
          <h1 className="text-2xl font-bold">SOOKYUNG PARK</h1>
          <p className="mt-2">Frontend Developer</p>
        </div>
        <ul className="text-white space-y-4">
          <li className="border-b border-gray-700 pb-2">
            <Link href="/" className="flex items-center space-x-2" onClick={toggleNav}>
              <FaHome />
              <span>Home</span>
            </Link>
          </li>
          <li className="border-b border-gray-700 pb-2">
            <Link href="/about" className="flex items-center space-x-2" onClick={toggleNav}>
              <FaUser />
              <span>About Me</span>
            </Link>
          </li>
          <li className="border-b border-gray-700 pb-2">
            <Link href="/resume" className="flex items-center space-x-2" onClick={toggleNav}>
              <FaFileAlt />
              <span>Resume</span>
            </Link>
          </li>
          <li className="border-b border-gray-700 pb-2">
            <Link href="/portfolio" className="flex items-center space-x-2" onClick={toggleNav}>
              <FaBriefcase />
              <span>Portfolio</span>
            </Link>
          </li>
          <li className="border-b border-gray-700 pb-2">
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2" onClick={toggleNav}>
              <FaGithub />
              <span>Github</span>
            </Link>
          </li>
          <li className="border-b border-gray-700 pb-2">
            <Link href="/contact" className="flex items-center space-x-2" onClick={toggleNav}>
              <FaEnvelope />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
