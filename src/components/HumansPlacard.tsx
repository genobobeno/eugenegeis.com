"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function HumansPlacard() {
  const features = [
    "Trust & Leadership",
    "Team Synergy",
    "Personal Reinvention",
    "Transitional Mentorship",
    "Meditation & Energy",
    "PhD2Pro.com"
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative group h-full w-full p-4"
    >
      <Link href="/humans" className="block h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#09e0c6]/50 to-[#cf0cd2]/50 rounded-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-105 overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <div className="relative w-[75%] aspect-square mb-6 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#09e0c6]/20 z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#09e0c6]/20 z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#09e0c6]/20 z-10" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#09e0c6]/20 z-10" />
              <Image
                src="/images/HumansLogo.png"
                alt="Humans In The Loop"
                fill
                className="object-contain filter drop-shadow-lg rounded-2xl fade-all-edges"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-6">Humans-In-The-Loop</h2>

            <ul className="space-y-2 text-white/90 text-center">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="text-lg list-none"
                >
                  • {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </motion.div>
  )
} 