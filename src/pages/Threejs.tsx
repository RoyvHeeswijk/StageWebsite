'use client'

import { ChevronDown, Github, Globe } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const classicFont = "font-American-Captain";
interface NavItemProps {
    text: string
    href: string
}

function NavItem({ text, href }: NavItemProps) {
    const router = useRouter()
    return (
        <div
            className="cursor-pointer hover:text-gray-600 transition-colors px-4 sm:px-8"
            onClick={() => {
                if (href.startsWith('/')) {
                    router.push(href)
                } else {
                    const element = document.querySelector(href) as HTMLElement
                    if (element) {
                        const navbarHeight = 100 // Height of navbar
                        window.scrollTo({
                            top: element.offsetTop - navbarHeight,
                            behavior: 'smooth'
                        })
                    }
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

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`sticky top-0 transition-colors duration-300 ${isScrolled ? 'bg-[#1E1E1E]' : 'bg-transparent'}`}>
            <div className="px-4 sm:px-8 md:px-12 transition-all duration-300 w-full">
                <div className="flex items-center justify-between h-[100px]">
                    <div className="pl-4 sm:pl-12 md:pl-24">
                        <NavItem text="ROY v HEESWIJK" href="/" />
                    </div>
                    <div className="flex gap-4 sm:gap-8 md:gap-16 pr-4 sm:pr-12 md:pr-24">
                        <NavItem text="OTHER PROJECTS" href="#otherprojects" />
                     
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default function ThreeJS() {
    return (
        <main className="w-full">
            <div className="fixed top-0 w-full z-50">
                <Navbar />
            </div>
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
                    <source src="/portfoliogif3.mp4" type="video/mp4" />
                </video>

                <div className="relative z-10 flex w-full h-full">
                    <div className="flex-[3] flex items-center justify-center">
                        <h1 className={`text-4xl sm:text-6xl md:text-8xl font-black text-white ${classicFont} font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
                            THREE.JS
                        </h1>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-start pr-4">
                        <p className="text-white text-center text-sm md:text-base mb-8">
                            For this project, I used the skills below to make a sphere spin. 
                            <br />
                            <br />
                            The goal of this project was to learn more about THREE.js and how I can use it in my projects. 
                            <br />
                            <br />
                            Click on the GitHub logo or the globe logo below for the result. <br />
                           
                        </p>
                        <div className="flex justify-center gap-4 w-full mb-4">
                            {[
                                { name: "THREE.js", icon: "/icons/threedotjs.svg", url: "https://threejs.org/" },
                                { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", url: "https://tailwindcss.com/" },
                                {
                                    name: "JavaScript",
                                    icon: "/icons/javascript.svg",
                                    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                                },
                            ].map((skill, index) => (
                                <a
                                    key={index}
                                    href={skill.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-20 aspect-square bg-zinc-800 flex flex-col items-center justify-center gap-2 transition-all hover:bg-[#0979EB] hover:scale-105"
                                >
                                    <img
                                        src={skill.icon || "/placeholder.svg"}
                                        alt={skill.name}
                                        width={40}
                                        height={40}
                                        className="w-8 h-8 brightness-0 invert"
                                    />
                                    <span className="text-xs text-center text-white">{skill.name}</span>
                                </a>
                            ))}
                        </div>
                      
                        <div className="flex justify-center w-full space-x-6">
                            <a
                                href="https://github.com/RoyvHeeswijk/Sphere"
                                className="text-white hover:text-blue-300 transition-colors"
                                aria-label="GitHub Repository"
                            >
                                <Github size={36} />
                            </a>
                            <a
                                href="https://i539880.hera.fontysict.net/portfolio/livewall2/persoonlijk3/index.html"
                                className="text-white hover:text-blue-300 transition-colors"
                                aria-label="Live Demo"
                            >
                                <Globe size={36} />
                            </a>
                        </div>
                    </div>
                </div>
               
            </section>

            <section id="otherprojects" className="bg-[#1E1E1E] py-24">
                <div className="text-center mb-12">
                    <h2 className={`text-4xl font-bold mb-4 text-white ${classicFont}`}>OTHER PROJECTS</h2>
                    <ChevronDown className="mx-auto text-white" size={24} />
                </div>

                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2].map((i) => (
                        <div 
                            key={i} 
                            className="bg-zinc-800 rounded-lg overflow-hidden cursor-pointer hover:bg-zinc-700 transition-colors border border-white/40"
                            onClick={() => {
                                if (i === 1) {
                                    window.location.href = '/Charla'
                                } else if (i === 2) {
                                    window.location.href = '/Upendo'
                                }
                            }}
                        >
                            <div className="h-48 w-full relative">
                                {i === 1 ? (
                                    <div className="h-full w-full flex items-center justify-center">
                                        <Image
                                            src="/Charla.png"
                                            alt="Project"
                                            width={200}
                                            height={200}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                ) : (
                                        <div className="h-full w-full flex items-center justify-center bg-black">
                                            <Image
                                                src="/Upendo.png"
                                                alt="Project"
                                                width={200}
                                                height={200}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-sm font-mono text-white">
                                    {i === 1 ? "Charla" : i === 2 ? "Upendo" : "Charla"}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
