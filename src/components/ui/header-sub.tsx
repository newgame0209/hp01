"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * @docs
 * サブページ（About, Service, Contact）用のヘッダーコンポーネント
 */
export function HeaderSub() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-12">
        <div className="h-[88px] flex items-center justify-between">
          <Link href="/" className="text-white text-2xl md:text-3xl font-bold">
            NEWGAME
          </Link>

          {/* ハンバーガーメニュー（モバイル） */}
          <button
            className="md:hidden text-white w-[88px] h-[88px] flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* PC用メニュー */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-12">
              <li>
                <Link
                  href="/about"
                  className="text-lg font-semibold tracking-[0.1em] hover:opacity-70 transition-opacity text-white"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="text-lg font-semibold tracking-[0.1em] hover:opacity-70 transition-opacity text-white"
                >
                  SERVICE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-lg font-semibold tracking-[0.1em] hover:opacity-70 transition-opacity text-white"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* モバイル用メニュー */}
        <div className={`
          fixed top-[88px] left-0 w-full
          bg-black/90 backdrop-blur-sm
          transform transition-transform duration-300
          md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <nav className="container mx-auto px-6 py-8">
            <ul className="flex flex-col space-y-6">
              <li>
                <Link
                  href="/about"
                  className="block text-lg font-semibold tracking-[0.1em] text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="block text-lg font-semibold tracking-[0.1em] text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SERVICE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-lg font-semibold tracking-[0.1em] text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
