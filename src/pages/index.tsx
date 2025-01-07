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
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: 'smooth' })
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
            className="absolute left-1/2 bottom-10 flex flex-col items-center cursor-pointer group"
            onClick={() => {
              const element = document.querySelector('#projects')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="text-2xl font-['American_Captain'] font-bold mb-2 text-white">PROJECTS</span>
            <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-1 text-white" />
            <ChevronDown className="absolute bottom-2 w-6 h-6 transition-transform group-hover:translate-y-1 text-white" />
          </div>
        
      </section>

      <section id="projects" className=" relative h-screen flex flex-col">
        <div className="flex-1 flex">
          <div className="w-1/3 bg-white relative overflow-hidden">
            <Image
              src="/miezelf.png"
              alt="Project background"
              fill
              className="object-cover"
            />
            <h2 className="absolute right-0 transform origin-right text-7xl font-['American_Captain'] font-bold text-white">
              PROJECTS
            </h2>
          </div>
          <div className="w-2/3 flex flex-col">
            <div className="h-9/10 bg-gray-200 p-8 grid grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white p-4 rounded-lg">
                  <h3 className="text-xl font-['Arial'] mb-4 text-black">Sphere using Three.js</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg" />
                </div>
              ))}
            </div>
            <div className="h-1/5 bg-gray-200 p-8 grid grid-cols-2 gap-8">
            </div>
          </div>

          
        </div>
      
          <div
            className="absolute left-1/2 bottom-10 flex flex-col items-center cursor-pointer group"
            onClick={() => {
              const element = document.querySelector('#about')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="text-2xl font-['American_Captain'] font-bold mb-2 text-black">ABOUT ME</span>
            <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-1 text-black" />
            <ChevronDown className="absolute bottom-2 w-6 h-6 transition-transform group-hover:translate-y-1 text-black" />
          </div>
       
      </section>

      <section id="about" className="h-screen flex">
        <div className="w-2/3 bg-[#4B5EAB] p-8 md:p-12 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-['American_Captain'] font-bold mb-1 md:mb-8 text-black">
            ABOUT ME
          </h2>
          <p className="text-base md:text-lg lg:text-xl font-['American_Captain'] font-bold text-black">
            Ik ben Roy van Heeswijk en ik ben 19 jaar oud, ik studeer ICT & Media Design bij Fontys in Tilburg.
          </p>
        </div>
        <div className="w-1/3 relative">
          <Image
            src="/ikzelf.png"
            alt="About background"
            fill
            className="object-cover"
          />
        </div>
      </section>
    </main>
  )
}
