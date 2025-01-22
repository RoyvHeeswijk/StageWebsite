'use client'

import { ChevronDown, Globe, Github } from 'lucide-react'
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

export default function Charla() {
    return (
        <main className="w-full">
            <div className="fixed top-0 w-full z-50">
                <Navbar />
            </div>
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
               
                <div className="absolute inset-0 z-0 bg-black" />
                <div className="absolute inset-0 flex md:items-center justify-center md:justify-start md:ml-20 items-start pt-20 z-0">
                    <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
                        <Image
                            src="/Charla.png"
                            alt="Charla Logo"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row w-full h-full">
                    <div className="flex-[3] flex items-center justify-center mt-[300px] md:mt-0">
                        <h1 className={`text-6xl md:text-8xl font-black text-white ${classicFont} font-bold md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2`}>
                            CHARLA
                        </h1>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center md:items-start px-4 md:pr-4 mt-8 md:mt-0">
                        <p className="text-white text-center md:text-center text-sm md:text-base mb-8 max-w-[90%] md:max-w-none">
                            For this project, I used the skills below to create a Speech-to-text app.
                            <br />
                            <br />
                            The goal of this project was to create a Speech-to-text app using the OPENAI API key, allowing you to send messages that were originally your speech.
                            <br />
                            <br />
                            Click on the GitHub logo or the globe logo below for the result. <br />
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-4 w-full mb-4 md:mr-10">
                            {[
                                { name: 'Next.js', icon: '/icons/nextdotjs.svg', url: 'https://nextjs.org/' },
                                { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", url: "https://tailwindcss.com/" },
                                {
                                    name: "JavaScript",
                                    icon: "/icons/javascript.svg",
                                    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                                },
                                { name: 'Figma', icon: '/icons/figma.svg', url: 'https://www.figma.com/' },
                                { name: 'VS Code', icon: '/icons/VScode.png', url: 'https://code.visualstudio.com/' },
                            ].map((skill, index) => (
                                <a
                                    key={index}
                                    href={skill.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-16 md:w-20 aspect-square bg-zinc-800 flex flex-col items-center justify-center gap-2 transition-all hover:bg-[#0979EB] hover:scale-105"
                                >
                                    <img
                                        src={skill.icon || "/placeholder.svg"}
                                        alt={skill.name}
                                        width={40}
                                        height={40}
                                        className="w-6 h-6 md:w-8 md:h-8 brightness-0 invert"
                                    />
                                    <span className="text-[10px] md:text-xs text-center text-white">{skill.name}</span>
                                </a>
                            ))}
                        </div>

                        <div className="flex justify-center w-full space-x-6 mb-8 md:mb-0">
                            <a
                                href="https://github.com/RoyvHeeswijk/persoonlijikproject"
                                className="text-white hover:text-blue-300 transition-colors"
                                aria-label="GitHub Repository"
                            >
                                <Github size={36} />
                            </a>
                            <a
                                href="https://persoonlijkproject-saj9.vercel.app/"
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
                    <h2 className="text-4xl font-bold mb-4 text-white">OTHER PROJECTS</h2>
                    <ChevronDown className="mx-auto text-white" size={24} />
                </div>

                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2].map((i) => (
                        <div
                            key={i}
                            className="bg-zinc-800 rounded-lg overflow-hidden cursor-pointer hover:bg-zinc-700 transition-colors border border-white/40"
                            onClick={() => {
                                if (i === 1) {
                                    window.location.href = "/Threejs"
                                } else if (i === 2) {
                                    window.location.href = "/Upendo"
                                }
                            }}
                        >
                            <div className="h-48 w-full relative">
                                {i === 1 ? (
                                    <video autoPlay loop muted playsInline className="h-full w-full object-cover">
                                        <source src="/portfoliogif3.mp4" type="video/mp4" />
                                    </video>
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
                                    {i === 1 ? "Sphere & Diece" : i === 2 ? "Upendo" : "Charla"}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
