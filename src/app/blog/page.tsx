"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Blog() {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <main className="min-h-screen p-8 mt-24">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert max-w-none"
        >
          <h1 className="text-4xl font-bold mb-8">Links</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4">X Feed</h2>
              <div className="h-140 bg-white/5 rounded flex items-center justify-center overflow-hidden">
                <blockquote className="twitter-tweet" data-theme="dark">
                  &mdash; Eugene Geis (@EugeneGeis) 
                  <a href="https://twitter.com/EugeneGeis/status/1903807889023590416">March, 2025</a>
                </blockquote>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-6">Connect with Me</h2>
              <div className="space-y-6">
                <Link
                  href="https://www.linkedin.com/in/eugenegeis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                  <p className="text-white/80">
                    Connect with me on LinkedIn to review my professional journey.
                  </p>
                </Link>

                <Link
                  href="https://medium.com/@eugene.geis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">Medium</h3>
                  <p className="text-white/80">
                    On the rare occasion I write something, it&apos;s here.
                  </p>
                </Link>

                <Link
                  href="https://orcid.org/0000-0001-6836-4554"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">ORCID</h3>
                  <p className="text-white/80">
                    On the rare occasion I publish academic contributions, they&apos;re here.
                  </p>
                </Link>

                <Link
                  href="https://phd2pro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">PhD2Pro</h3>
                  <p className="text-white/80">
                    I just released this online course for transitioning academics!
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Removing Latest Posts section */}
        </motion.div>
      </div>
    </main>
  )
} 