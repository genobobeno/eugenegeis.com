"use client"

import Link from 'next/link'

export default function Navbar() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-xl font-bold">
            Eugene Geis
          </Link>
          <div className="flex space-x-6">
            <Link href="/machines" className="text-white/80 hover:text-white transition-colors">
              Machines
            </Link>
            <Link href="/humans" className="text-white/80 hover:text-white transition-colors">
              Humans
            </Link>
            <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
              Blog
            </Link>
            <button 
              onClick={scrollToContact}
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 