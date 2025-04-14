"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Blog() {
  return (
    <main className="min-h-screen p-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-invert max-w-none"
        >
          <h1 className="text-4xl font-bold mb-8">Blog</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4">Twitter Feed</h2>
              <div className="h-96 bg-white/5 rounded flex items-center justify-center">
                <p className="text-white/50">Twitter Embed Coming Soon</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4">Connect with Me</h2>
              <div className="space-y-4">
                <Link
                  href="https://www.linkedin.com/in/eugenegeis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
                  <p className="text-white/80">
                    Connect with me on LinkedIn to stay updated with my professional journey and insights.
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6">Latest Posts</h2>
            <div className="space-y-6">
              {/* Blog posts will be dynamically rendered here */}
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-white/80">
                  Stay tuned for insightful articles about technology, human development, and the intersection of both.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 