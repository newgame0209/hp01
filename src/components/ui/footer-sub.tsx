"use client";

import Link from 'next/link';

/**
 * @docs
 * サブページ（About, Service, Contact）用のフッターコンポーネント
 */
export function FooterSub() {
  return (
    <footer className="bg-black text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="order-1 md:order-1">
            <Link href="/" className="text-xl md:text-2xl font-bold tracking-wider">
              NEWGAME
            </Link>
          </div>
          <nav className="order-2 md:order-2 w-full md:w-auto">
            <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
              <li>
                <Link
                  href="/about"
                  className="text-sm md:text-base font-bold tracking-[0.05em] hover:opacity-70 transition-opacity"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="text-sm md:text-base font-bold tracking-[0.05em] hover:opacity-70 transition-opacity"
                >
                  SERVICE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm md:text-base font-bold tracking-[0.05em] hover:opacity-70 transition-opacity"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
          <div className="order-3 md:order-3 text-xs md:text-sm text-gray-400">
            2024 Company Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
