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
      className="cursor-pointer hover:text-gray-600 transition-colors px-4 sm:px-8"
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
      <span className="text-2xl sm:text-3xl md:text-4xl font-['American_Captain'] font-regular">{text}</span>
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
      <div className="px-4 sm:px-8 md:px-12 transition-all duration-300 w-full">
        <div className="flex items-center justify-between h-[100px]">
          <div className="pl-4 sm:pl-12 md:pl-24">
            <div className="text-[0.8rem] sm:text-base md:text-2xl lg:text-3xl whitespace-nowrap">
              <NavItem text="ROY v HEESWIJK" href="#home" />
            </div>
          </div>
          <div className="flex whitespace-nowrap gap-4 sm:gap-8 md:gap-16 pr-4 sm:pr-12 md:pr-24 text-[1rem] sm:text-base md:text-2xl lg:text-3xl">
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
      <section id="home" className="relative h-screen">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 -translate-y-1/2 text-4xl sm:text-6xl md:text-8xl whitespace-nowrap font-black text-white font-['American_Captain'] font-bold">ROY v HEESWIJK</h1>
        <div className="h-full grid grid-cols-2">
          <div className="bg-[#1E1E1E] flex items-center justify-center">
          </div>
          <div className="relative">
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
          <span className="text-4xl font-['American_Captain'] font-bold mb-2 text-white">PROJECTS</span>
          <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-1 text-white" />
          <ChevronDown className="absolute bottom-2 w-6 h-6 transition-transform group-hover:translate-y-1 text-white" />
        </div>
      </section>
      <section id="projects" className="relative min-h-[90vh] flex flex-col bg-white">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Geometric shapes */}
          <div className="absolute w-full h-full overflow-hidden">
            <div className="absolute top-0 left-0 w-[400px] sm:w-[600px] md:w-[800px] h-[2px] bg-blue-600/20 rotate-45 transform -translate-x-1/4"></div>
            <div className="absolute top-1/4 right-0 w-[300px] sm:w-[450px] md:w-[600px] h-[2px] bg-blue-500/20 -rotate-45"></div>
            <div className="absolute bottom-1/3 left-0 w-[200px] sm:w-[300px] md:w-[400px] h-[2px] bg-blue-400/20 rotate-45"></div>
            
            {/* Circles */}
            <div className="absolute top-[20%] left-[10%] w-[50px] sm:w-[75px] md:w-[100px] h-[50px] sm:h-[75px] md:h-[100px] border-2 border-blue-500/20 rounded-full"></div>
            <div className="absolute top-[60%] right-[15%] w-[75px] sm:w-[100px] md:w-[150px] h-[75px] sm:h-[100px] md:h-[150px] border-2 border-blue-400/20 rounded-full"></div>
            
            {/* Rectangles */}
            <div className="absolute top-[40%] left-[80%] w-[40px] sm:w-[60px] md:w-[80px] h-[40px] sm:h-[60px] md:h-[80px] border-2 border-blue-600/20 rotate-45"></div>
            <div className="absolute top-[70%] left-[20%] w-[30px] sm:w-[45px] md:w-[60px] h-[30px] sm:h-[45px] md:h-[60px] border-2 border-blue-500/20 rotate-12"></div>
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-['American_Captain'] font-bold text-black text-center mt-8 mb-12">
          PROJECTS
        </h2>
        <div className="flex-1 mx-4 sm:mx-[10%] md:mx-[15%] flex items-center justify-center -translate-y-[10%]">
          <div className="w-full h-full max-w-[1000px]">
            <div className="grid grid-cols-2 gap-4 sm:gap-8 place-items-center">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`group w-[40vw] sm:w-[25vw] h-[25vh] bg-black p-4 rounded-lg flex flex-row items-start relative ${i === 1 || i === 2 || i === 3 ? 'cursor-pointer' : ''}`}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                  }}
                  onClick={() => {
                    if (i === 1) {
                      window.location.href = '/Threejs'
                    } else if (i === 2) {
                      window.location.href = '/Charla'
                    } else if (i === 3) {
                      window.location.href = '/Upendo'
                    }
                  }}
                  style={{
                    '--mouse-x': '0px',
                    '--mouse-y': '0px',
                  } as React.CSSProperties}
                >
                  {/* Spotlight overlay */}
                  <div 
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-lg"
                    style={{
                      background: 'radial-gradient(circle 100px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.225), transparent 100%)',
                    }}
                  />
                  
                  <div className="ml-[5%] w-[50%] flex flex-col relative z-10">
                    <h3 className="text-sm sm:text-lg md:text-xl font-['American_Captain'] text-white">
                      {i === 1 ? 'Sphere using Three.js' : i === 2 ? 'Charla' : i === 3 ? 'Upendo' : 'Sphere using Three.js'}
                    </h3>
                    <p className="text-[0.65rem] sm:text-xs md:text-sm text-white/60 mt-2 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                  </div>
                  <div className="relative w-[35%] h-full mx-[5%] z-10">
                    {i === 1 ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-lg"
                      >
                        <source src="/portfoliogif3.mp4" type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={i === 2 ? "/Charla.png" : i === 3 ? "/Upendo.png" : "/ikzelf.png"}
                        alt="Project"
                        fill
                        className="object-contain rounded-lg -translate-y-2"
                      />
                    )}
                  </div>
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
          <span className="text-2xl sm:text-4xl font-['American_Captain'] font-bold mb-2 text-black">ABOUT ME</span>
          <ChevronDown className="w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover:translate-y-1 text-black" />
          <ChevronDown className="absolute bottom-2 w-4 h-4 sm:w-6 sm:h-6 transition-transform group-hover:translate-y-1 text-black" />
        </div>
      </section>
      <section id="about" className="relative min-h-screen bg-[#1E1E1E] text-white p-4 sm:p-6 md:p-8 flex flex-col justify-start pt-[15vh]">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[#1E1E1E]">
          {/* Geometric shapes */}
          <div className="absolute w-full h-full overflow-hidden">
            <div className="absolute top-0 left-0 w-[400px] sm:w-[600px] md:w-[800px] h-[3px] bg-gray-300/35 rotate-45 transform -translate-x-1/4"></div>
            <div className="absolute top-1/4 right-0 w-[300px] sm:w-[450px] md:w-[600px] h-[3px] bg-gray-300/35 -rotate-45"></div>
            <div className="absolute bottom-1/3 left-0 w-[200px] sm:w-[300px] md:w-[400px] h-[3px] bg-gray-300/35 rotate-45"></div>
            
            {/* Circles */}
            <div className="absolute top-[20%] left-[10%] w-[50px] sm:w-[75px] md:w-[100px] h-[50px] sm:h-[75px] md:h-[100px] border-[3px] border-gray-300/35 rounded-full"></div>
            <div className="absolute top-[60%] right-[15%] w-[75px] sm:w-[100px] md:w-[150px] h-[75px] sm:h-[100px] md:h-[150px] border-[3px] border-gray-300/35 rounded-full"></div>
            
            {/* Rectangles */}
            <div className="absolute top-[40%] left-[80%] w-[40px] sm:w-[60px] md:w-[80px] h-[40px] sm:h-[60px] md:h-[80px] border-[3px] border-gray-300/35 rotate-45"></div>
            <div className="absolute top-[70%] left-[20%] w-[30px] sm:w-[45px] md:w-[60px] h-[30px] sm:h-[45px] md:h-[60px] border-[3px] border-gray-300/35 rotate-12"></div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="relative z-10 mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-['American_Captain'] font-bold text-center mb-4 sm:mb-6">ABOUT ME</h1>
          <p className="text-center text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Ik ben Roy van Heeswijk en ik ben 19 jaar oud, ik studeer ICT & Media Design bij Fontys in Tilburg.
          </p>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-['American_Captain'] font-bold text-center mb-8">SKILLS</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4">
            {[
              { name: 'HTML', icon: '/icons/html5.svg', url: 'https://html.spec.whatwg.org/' },
              { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg', url: 'https://tailwindcss.com/' },
              { name: 'CSS', icon: '/icons/css.svg', url: 'https://www.w3.org/Style/CSS/' },
              { name: 'Figma', icon: '/icons/figma.svg', url: 'https://www.figma.com/' },
              { name: 'VS Code', icon: '/icons/VScode.png', url: 'https://code.visualstudio.com/' },
              { name: 'JavaScript', icon: '/icons/javascript.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
              { name: 'Next.js', icon: '/icons/nextdotjs.svg', url: 'https://nextjs.org/' },
              { name: 'THREE.js', icon: '/icons/threedotjs.svg', url: 'https://threejs.org/' }
            ].map((skill, index) => (
              <a
                key={index}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30%] max-w-[150px] aspect-square bg-zinc-800 flex flex-col items-center justify-center gap-2 transition-all hover:bg-[#0979EB] hover:scale-105"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 brightness-0 invert"
                />
                <span className="text-xs sm:text-sm text-center">
                  {skill.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
