'use client'

import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

interface NavItemProps {
  text: string
  href: string
}

function NavItem({ text, href }: NavItemProps) {
  return (
    <div
      className="cursor-pointer hover:text-gray-600 transition-colors px-8"
      onClick={() => {
        const element = document.querySelector(href) as HTMLElement
        if (element) {
          const navbarHeight = 100 // Height of navbar
          window.scrollTo({
            top: element.offsetTop - navbarHeight,
            behavior: 'smooth'
          })
        }
      }}
    >
      <span className="text-4xl font-['American_Captain'] font-regular">{text}</span>
    </div>
  )
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 transition-colors duration-300 ${isScrolled ? 'bg-[#1E1E1E]' : 'bg-transparent'}`}>
      <div className="px-12 transition-all duration-300 w-full">
        <div className="flex items-center justify-between h-[100px]">
          <div className="pl-24">
            <NavItem text="ROY v HEESWIJK" href="#home" />
          </div>
          <div className="flex gap-16 pr-24">
            <NavItem text="PROJECTS" href="#projects" />
            <NavItem text="ABOUT ME" href="#about" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const navbarHeight = 100

      let currentSection: HTMLElement | null = null
      let minDistance = Infinity

      sections.forEach(section => {
        const htmlSection = section as HTMLElement
        const distance = Math.abs(htmlSection.offsetTop - (window.scrollY + navbarHeight))
        if (distance < minDistance) {
          minDistance = distance
          currentSection = htmlSection
        }
      })

      if (currentSection) {
        const offset = currentSection.offsetTop - navbarHeight
        if (Math.abs(window.scrollY - offset) > 50) { // Add threshold to prevent constant snapping
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          })
        }
      }
    }

    let scrollTimeout: NodeJS.Timeout
    const throttledScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScroll, 50) // Add debounce to improve performance
    }

    window.addEventListener('scroll', throttledScroll)
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [])

  return (
    <main className="w-full">
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <section id="home" className="relative h-screen flex flex-col">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 -translate-y-1/2 text-8xl font-black text-white font-['American_Captain'] font-bold">ROY v HEESWIJK</h1>
        <div className="flex-1 flex">
          <div className="w-1/2 bg-[#1E1E1E] flex items-center justify-center">

          </div>
          <div className="w-1/2 relative">
            <Image
              src="/mijzelf.png"
              alt="Roy v Heeswijk"
              fill
              className="object-cover"
            />

          </div>
        </div>

        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 flex flex-col items-center cursor-pointer group"
          onClick={() => {
            const element = document.querySelector('#projects') as HTMLElement
            if (element) {
              const navbarHeight = 100 // Height of navbar
              window.scrollTo({
                top: element.offsetTop - navbarHeight,
                behavior: 'smooth'
              })
            }
          }}
        >
          <span className="text-2xl font-['American_Captain'] font-bold mb-2 text-white">PROJECTS</span>
          <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-1 text-white" />
          <ChevronDown className="absolute bottom-2 w-6 h-6 transition-transform group-hover:translate-y-1 text-white" />
        </div>

      </section>
      <section id="projects" className="relative h-[90vh] flex flex-col bg-[#0B2544]">
        <h2 className="text-7xl font-['American_Captain'] font-bold text-white text-center mt-8 mb-12">
          PROJECTS
        </h2>
        <div className="flex-1 mx-[15%] flex items-start">
          <div className="w-full">
            <div className="grid grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="bg-slate-600/20 p-4 rounded-lg">
                  <h3 className="text-xl font-['American_Captain'] mb-4 text-white">Sphere using Three.js</h3>
                  <div className="aspect-video bg-gray-700 rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
          onClick={() => {
            const element = document.querySelector('#about') as HTMLElement
            if (element) {
              const navbarHeight = 100 // Height of navbar
              window.scrollTo({
                top: element.offsetTop - navbarHeight,
                behavior: 'smooth'
              })
            }
          }}
        >
          <span className="text-2xl font-['American_Captain'] font-bold mb-2 text-white">ABOUT ME</span>
          <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-1 text-white" />
          <ChevronDown className="absolute bottom-2 w-6 h-6 transition-transform group-hover:translate-y-1 text-white" />
        </div>

      </section>
      <section id="about" className="min-h-screen bg-[#1E1E1E] text-white p-8">
        {/* About Me Section */}
        <div className="mb-24">
          <h1 className="text-7xl font-['American_Captain'] font-bold text-center mb-8">ABOUT ME</h1>
          <p className="text-center text-xl max-w-3xl mx-auto">
            Ik ben Roy van Heeswijk en ik ben 19 jaar oud, ik studeer ICT & Media Design bij Fontys in Tilburg.
          </p>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-7xl font-['American_Captain'] font-bold text-center mb-16">SKILLS</h2>
          <div className="flex justify-center items-center gap-16 flex-wrap">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-24 h-28 bg-amber-400 relative clip-path-shield flex items-center justify-center"
              >
                <span className="text-4xl font-bold text-white">S</span>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .clip-path-shield {
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          }
        `}</style>
      </section>
    </main>
  )
}
