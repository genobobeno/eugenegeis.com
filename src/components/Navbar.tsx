"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
              Links
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

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-sm transition-all duration-300 z-50 ${
              isMenuOpen 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 -translate-y-full pointer-events-none'
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 pt-16">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-white focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Link 
                href="/" 
                className="text-white/80 hover:text-white transition-colors text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/machines" 
                className="text-white/80 hover:text-white transition-colors text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Machines
              </Link>
              <Link 
                href="/humans" 
                className="text-white/80 hover:text-white transition-colors text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Humans
              </Link>
              <Link 
                href="/blog" 
                className="text-white/80 hover:text-white transition-colors text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Links
              </Link>
              <Link 
                href="/contact" 
                className="text-white/80 hover:text-white transition-colors text-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 