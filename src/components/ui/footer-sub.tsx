"use client";

import Link from 'next/link';

/**
 * @docs
 * サブページ（About, Service, Contact）用のフッターコンポーネント
 */
export function FooterSub() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="text-2xl font-bold tracking-wider">
              NEWGAME
            </Link>
          </div>
          <nav className="mb-8 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-8">
              <li>
                <Link
                  href="/about"
                  className="text-base font-bold tracking-[0.05em] hover:opacity-70 transition-opacity"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="text-base font-bold tracking-[0.05em] hover:opacity-70 transition-opacity"
                >
                  SERVICE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base font-bold tracking-[0.05em] hover:opacity-70 transition-opacity"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-sm text-gray-400">
            2024 Company Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
