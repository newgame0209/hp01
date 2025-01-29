import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
          <div>
            <div className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">NEWGAME</div>
            <div className="space-y-2">
              <div className="text-sm md:text-base font-semibold tracking-[0.1em]">〒541-0058</div>
              <div className="text-sm md:text-base font-semibold tracking-[0.1em]">大阪市中央区南久宝寺町4-1-2</div>
              <div className="text-sm md:text-base font-semibold tracking-[0.1em]">御堂筋ダイビル4F</div>
              <div className="text-sm md:text-base font-semibold tracking-[0.1em]">TEL: 06-6252-0205</div>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-1 md:mx-20">
            <div className="text-base font-semibold tracking-[0.2em] mb-6 md:mb-8">MENU</div>
            <nav className="w-full">
              <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <li><a href="#video" className="text-sm md:text-base font-semibold tracking-[0.1em] hover:opacity-70 transition-opacity">ABOUT</a></li>
                <li><a href="#about" className="text-sm md:text-base font-semibold tracking-[0.1em] hover:opacity-70 transition-opacity">SERVICE</a></li>
                <li><a href="#works" className="text-sm md:text-base font-semibold tracking-[0.1em] hover:opacity-70 transition-opacity">WORKS</a></li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm md:text-base font-semibold tracking-[0.1em] hover:opacity-70 transition-opacity"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hidden md:block w-[200px]"></div>
        </div>
        <div className="mt-8 md:mt-12 text-center">
          <div className="text-sm md:text-base font-semibold tracking-[0.1em]">2025 NEWGAME Inc.</div>
        </div>
      </div>
    </footer>
  );
}
