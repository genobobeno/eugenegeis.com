"use client"

import Link from 'next/link'

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              onClick={scrollToTop}
              className="text-white text-xl font-bold hover:text-blue-400 transition-colors"
            >
              Eugene Geis
            </Link>
            <div className="h-6 w-px bg-white/20"></div>
            <Link href="/machines" className="text-white/80 hover:text-white transition-colors">
              Machines
            </Link>
            <Link href="/humans" className="text-white/80 hover:text-white transition-colors">
              Humans
            </Link>
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
              Blog
            </Link>
            <a 
              href="https://www.phd2pro.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors"
            >
              PhD2Pro
            </a>
            <Link 
              href="/contact"
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 