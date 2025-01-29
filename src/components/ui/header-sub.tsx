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
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold tracking-wider">
            NEWGAME
          </Link>
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  href="/about"
                  className="text-base font-semibold tracking-[0.1em] hover:opacity-70 transition-opacity text-white"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="text-base font-semibold tracking-[0.1em] hover:opacity-70 transition-opacity text-white"
                >
                  SERVICE
                </Link>
              </li>
              <li className="ml-16">
                <Link
                  href="/contact"
                  className="text-base font-semibold tracking-[0.1em] hover:opacity-70 transition-opacity text-white"
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
