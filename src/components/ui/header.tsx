import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      
      if (!href?.startsWith('#')) return;
      e.preventDefault();

      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto px-12 py-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-3xl font-bold">
            NEWGAME
          </Link>
          <nav>
            <ul className="flex items-center">
              <li className="ml-16">
                <a href="#video" className="text-white text-base font-semibold hover:opacity-70 transition-opacity">
                  ABOUT
                </a>
              </li>
              <li className="ml-16">
                <a href="#about" className="text-white text-base font-semibold hover:opacity-70 transition-opacity">
                  SERVICE
                </a>
              </li>
              <li className="ml-16">
                <a href="#works" className="text-white text-base font-semibold hover:opacity-70 transition-opacity">
                  WORKS
                </a>
              </li>
              <li className="ml-16">
                <Link
                  href="/contact"
                  className={`text-sm font-medium transition-colors hover:text-yellow-400 ${
                    pathname === "/contact" ? "text-yellow-400" : "text-white"
                  }`}
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
