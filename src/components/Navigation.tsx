"use client"

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Eugene Geis
          </Link>
          
          <div className="flex gap-6">
            <Link href="/machines" className="hover:text-blue-400 transition-colors">
              Machines
            </Link>
            <Link href="/humans" className="hover:text-green-400 transition-colors">
              Humans
            </Link>
            <Link href="/blog" className="hover:text-purple-400 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 