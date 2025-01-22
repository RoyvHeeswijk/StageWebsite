"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

const classicFont = "American-Captain";

interface NavItemProps {
  text: string
  href: string
}

function throttle(func: (...args: any[]) => void, limit: number) {
  let inThrottle: boolean
  return function (this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

function NavItem({ text, href }: NavItemProps) {
  return (
    <div
      className="cursor-pointer hover:text-gray-600 transition-colors px-4 md:px-8"
      onClick={(e) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element instanceof HTMLElement) {
          const navbarHeight = 100
          const targetPosition = element.offsetTop - navbarHeight
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
          window.history.pushState(null, "", href)
        }
      }}
    >
      <span className={`text-sm md:text-3xl lg:text-4xl ${classicFont} font-bold`}>{text}</span>
    </div>
  )
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 transition-colors duration-300 ${isScrolled ? "bg-[#1E1E1E]" : "bg-transparent"}`}>
      <div className="px-4 md:px-8 lg:px-12 transition-all duration-300 w-full">
        <div className="flex items-center justify-between h-[100px]">
          <div className="pl-4 md:pl-12 lg:pl-24">
            <div className="text-[0.8rem] md:text-base lg:text-2xl whitespace-nowrap">
              <NavItem text="ROY v HEESWIJK" href="#home" />
            </div>
          </div>
          <div className="flex whitespace-nowrap gap-1 md:gap-8 lg:gap-16 pr-4 md:pr-12 lg:pr-24 text-[1rem] md:text-base lg:text-2xl">
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
      const sections = document.querySelectorAll("section")
      const navbarHeight = 100
      const scrollPosition = window.scrollY + navbarHeight + 50

      let currentSectionId = ""

      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            currentSectionId = section.id
          }
        }
      })

      if (currentSectionId && currentSectionId !== window.location.hash.slice(1)) {
        window.history.pushState(null, "", `#${currentSectionId}`)
      }
    }

    const throttledScroll = throttle(handleScroll, 100)

    window.addEventListener("scroll", throttledScroll)
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  return (
    <main className="w-full">
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <section id="home" className="relative h-screen">
        <h1 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 z-10 -translate-y-1/2 text-4xl md:text-6xl lg:text-8xl whitespace-nowrap font-black text-white ${classicFont} font-bold`}>
          ROY v HEESWIJK
        </h1>
        <div className="h-full grid grid-cols-1 md:grid-cols-2">
          <div className="bg-[#1E1E1E] flex items-center justify-center"></div>
          <div className="relative">
            <Image src="/mijzelf.png" alt="Roy v Heeswijk" fill className="object-cover" />
          </div>
        </div>

        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 flex flex-col items-center cursor-pointer group"
          onClick={() => {
            const element = document.querySelector("#projects")
            if (element instanceof HTMLElement) {
              const navbarHeight = 100
              window.scrollTo({
                top: element.offsetTop - navbarHeight,
                behavior: "smooth",
              })
            }
          }}
        >
          <span className={`text-4xl ${classicFont} font-bold mb-2 text-white`}>PROJECTS</span>
          <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-1 text-white" />
          <ChevronDown className="absolute bottom-2 w-6 h-6 transition-transform group-hover:translate-y-1 text-white" />
        </div>
      </section>
      <section id="projects" className="relative min-h-[90vh] flex flex-col bg-white">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full overflow-hidden">
            <div className="absolute top-0 left-0 w-[400px] md:w-[600px] lg:w-[800px] h-[2px] bg-blue-600/20 rotate-45 transform -translate-x-1/4 hidden md:block"></div>
            <div className="absolute top-1/4 right-0 w-[300px] md:w-[450px] lg:w-[600px] h-[2px] bg-blue-500/20 -rotate-45 hidden md:block"></div>
            <div className="absolute bottom-1/3 left-0 w-[200px] md:w-[300px] lg:w-[400px] h-[2px] bg-blue-400/20 rotate-45 hidden md:block"></div>

            <div className="absolute top-[20%] left-[10%] w-[50px] md:w-[75px] lg:w-[100px] h-[50px] md:h-[75px] lg:h-[100px] border-2 border-blue-500/20 rounded-full hidden md:block"></div>
            <div className="absolute top-[60%] right-[15%] w-[75px] md:w-[100px] lg:w-[150px] h-[75px] md:h-[100px] lg:h-[150px] border-2 border-blue-400/20 rounded-full hidden md:block"></div>

            <div className="absolute top-[40%] left-[80%] w-[40px] md:w-[60px] lg:w-[80px] h-[40px] md:h-[60px] lg:h-[80px] border-2 border-blue-600/20 rotate-45 hidden md:block"></div>
            <div className="absolute top-[70%] left-[20%] w-[30px] md:w-[45px] lg:w-[60px] h-[30px] md:h-[45px] lg:h-[60px] border-2 border-blue-500/20 rotate-12 hidden md:block"></div>
          </div>
        </div>

        <h2 className={`text-[3.6rem] md:text-[4.5rem] lg:text-[4.0rem] ${classicFont} font-bold text-black text-center mt-8 mb-12`}>
          PROJECTS
        </h2>
        <div className="flex-1 mx-4 md:mx-[10%] lg:mx-[15%] flex items-center justify-center -translate-y-[10%]">
          <div className="w-full h-full max-w-[1000px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap- md:gap-8 place-items-center">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`group w-full md:w-[40vw] lg:w-[25vw] h-[20vh] md:h-[25vh] bg-black p-4 rounded-lg flex flex-row items-start relative ${i === 1 || i === 2 || i === 3 ? "cursor-pointer" : ""}`}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = e.clientX - rect.left
                    const y = e.clientY - rect.top
                    e.currentTarget.style.setProperty("--mouse-x", `${x}px`)
                    e.currentTarget.style.setProperty("--mouse-y", `${y}px`)
                  }}
                  onClick={() => {
                    if (i === 1) {
                      window.location.href = "/Threejs"
                    } else if (i === 2) {
                      window.location.href = "/Charla"
                    } else if (i === 3) {
                      window.location.href = "/Upendo"
                    }
                  }}
                  style={
                    {
                      "--mouse-x": "0px",
                      "--mouse-y": "0px",
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-lg"
                    style={{
                      background:
                        "radial-gradient(circle 100px at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.225), transparent 100%)",
                    }}
                  />

                  <div className="ml-[5%] w-[50%] flex flex-col relative z-10">
                    <h3 className={`text-sm md:text-lg lg:text-xl ${classicFont} text-white`}>
                      {i === 1
                        ? "Sphere & Diece"
                        : i === 2
                          ? "Charla"
                          : i === 3
                            ? "Upendo"
                            : "Sphere & Diece"}
                    </h3>
                    <p className="text-[0.65rem] md:text-xs lg:text-sm text-white/60 mt-2 line-clamp-5">
                      {i === 1
                        ? "This is a project where I use THREE.js to make a sphere & diece rotate."
                        : i === 2
                          ? "This is a project where I use Next.js to create a speech-to-text app."
                          : i === 3
                            ? "This is a project where I use Tailwind CSS & JavaScript to create a website for the company Upendo."
                            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."}
                    </p>
                  </div>
                  <div className="relative w-[35%] h-full mx-[5%] z-10">
                    {i === 1 ? (
                      <video autoPlay loop muted playsInline className="w-full h-full object-cover rounded-lg">
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
          className="absolute top-[88%] mt-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
          onClick={() => {
            const element = document.querySelector("#about")
            if (element instanceof HTMLElement) {
              const navbarHeight = 100
              window.scrollTo({
                top: element.offsetTop - navbarHeight,
                behavior: "smooth",
              })
            }
          }}
        >
          <span className={`text-2xl md:text-4xl ${classicFont} font-bold mb-2 text-black`}>ABOUT ME</span>
          <ChevronDown className="w-4 h-4 md:w-6 md:h-6 transition-transform group-hover:translate-y-1 text-black" />
          <ChevronDown className="absolute bottom-2 w-4 h-4 md:w-6 md:h-6 transition-transform group-hover:translate-y-1 text-black" />
        </div>
      </section>
      <section
        id="about"
        className="relative min-h-screen bg-[#1E1E1E] text-white p-4 md:p-6 lg:p-8 flex flex-col justify-start pt-[10vh] pb-0"
      >
        <div className="absolute inset-0 bg-[#1E1E1E]">
          <div className="absolute w-full h-full overflow-hidden">
            <div className="absolute top-0 left-0 w-[400px] md:w-[600px] lg:w-[800px] h-[3px] bg-gray-300/35 rotate-45 transform -translate-x-1/4 hidden md:block"></div>
            <div className="absolute top-1/4 right-0 w-[300px] md:w-[450px] lg:w-[600px] h-[3px] bg-gray-300/35 -rotate-45 hidden md:block"></div>
            <div className="absolute bottom-1/3 left-0 w-[200px] md:w-[300px] lg:w-[400px] h-[3px] bg-gray-300/35 rotate-45 hidden md:block"></div>

            <div className="absolute top-[20%] left-[10%] w-[50px] md:w-[75px] lg:w-[100px] h-[50px] md:h-[75px] lg:h-[100px] border-[3px] border-gray-300/35 rounded-full hidden md:block"></div>
            <div className="absolute top-[60%] right-[15%] w-[75px] md:w-[100px] lg:w-[150px] h-[75px] md:h-[100px] lg:h-[150px] border-[3px] border-gray-300/35 rounded-full hidden md:block"></div>

            <div className="absolute top-[40%] left-[80%] w-[40px] md:w-[60px] lg:w-[80px] h-[40px] md:h-[60px] lg:h-[80px] border-[3px] border-gray-300/35 rotate-45 hidden md:block"></div>
            <div className="absolute top-[70%] left-[20%] w-[30px] md:w-[45px] lg:w-[60px] h-[30px] md:h-[45px] lg:h-[60px] border-[3px] border-gray-300/35 rotate-12 hidden md:block"></div>
          </div>
        </div>

        <div className="relative z-10 mb-6">
          <h1 className={`text-4xl md:text-5xl lg:text-[4.0rem] ${classicFont} font-bold text-center mb-3 md:mb-4`}>
            ABOUT ME
          </h1>
          <p className="text-center text-[13px] md:text-lg lg:text-[19px] max-w-3xl mx-auto leading-relaxed">
            I am Roy van Heeswijk, 19 years old and live in Drunen, where I was born and raised. I study ICT & Media Design at Fontys in Tilburg.
            <br />
            <br />
            With a passion for technology and creativity, I enjoy working on projects where I can challenge myself and learn new things. On my portfolio, you will find an overview of my work and the steps I take in my development.
            <br />
            <br />
            Below you can my skills and above you can see what I have progressed in. Feel free to take a look!
          </p>
        </div>

        <div className="relative z-10">
          <h2 className={`text-4xl md:text-5xl lg:text-[4.0rem] ${classicFont} font-bold text-center mb-6`}>
            SKILLS
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto px-4">
            {[
              { name: "HTML", icon: "/icons/html5.svg", url: "https://html.spec.whatwg.org/" },
              { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", url: "https://tailwindcss.com/" },
              { name: "CSS", icon: "/icons/css.svg", url: "https://www.w3.org/Style/CSS/" },
              { name: "Figma", icon: "/icons/figma.svg", url: "https://www.figma.com/" },
              { name: "VS Code", icon: "/icons/VScode.png", url: "https://code.visualstudio.com/" },
              {
                name: "JavaScript",
                icon: "/icons/javascript.svg",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
              { name: "Next.js", icon: "/icons/nextdotjs.svg", url: "https://nextjs.org/" },
              { name: "THREE.js", icon: "/icons/threedotjs.svg", url: "https://threejs.org/" },
            ].map((skill, index) => (
              <a
                key={index}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[30%] max-w-[150px] aspect-square bg-zinc-800 flex flex-col items-center justify-center gap-2 transition-all hover:bg-[#0979EB] hover:scale-105"
              >
                <Image
                  src={skill.icon || "/placeholder.svg"}
                  alt={skill.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10 brightness-0 invert"
                />
                <span className="text-xs md:text-sm text-center">{skill.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
