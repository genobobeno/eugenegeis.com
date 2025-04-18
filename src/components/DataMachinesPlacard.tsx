"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function DataMachinesPlacard() {
  const features = [
    "AI/ML Transformation",
    "Algorithmic Product Management",
    "Data Strategy",
    "Performance Analytics",
    "Report Automation",
    "AI PCs"
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative group h-full w-full p-4"
    >
      <Link href="/machines" className="block h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-105 overflow-hidden hover:shadow-[0_0_15px_rgba(21,22,185,0.5),0_0_30px_rgba(207,12,210,0.3)] before:absolute before:inset-0 before:bg-[linear-gradient(45deg,rgba(21,22,185,0.1)_0%,rgba(207,12,210,0.1)_50%,rgba(21,22,185,0.1)_100%)] before:opacity-0 before:translate-y-[-100%] before:transition-all before:duration-500 group-hover:before:opacity-100 group-hover:before:translate-y-[100%]">
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <div className="relative w-[75%] aspect-square mb-6">
              <Image
                src="/images/DataEngines.png"
                alt="Data Engines"
                fill
                className="object-contain filter drop-shadow-lg fade-all-edges"
                style={{ mixBlendMode: 'screen' }}
              />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-6">Data Machines</h2>

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