'use client'

import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

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
            <section className="min-h-screen flex flex-col items-center justify-center relative">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    {/* <source src="/portfoliogif3.mp4" type="video/mp4" /> */}
                </video>
                <div className="relative z-10 -ml-10">
                    <h1 className="text-7xl font-bold text-white">CHARLA</h1>
                </div>
            </section>

            <section id="threejs-content" className="bg-white text-black">
                <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                    <h2 className="text-4xl font-bold mb-8">SPEECH-TO-TEXT COMMUNICATION</h2>
                    <p className="text-lg mb-8">
                        Charla is een innovatieve communicatie-applicatie die spraak omzet naar tekst. Door gebruik te maken van Next.js en geavanceerde Speech-to-Text API's, maakt Charla het mogelijk om moeiteloos gesprekken te voeren en te transcriberen.
                    </p>

                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[400px] object-cover mb-12"
                    >
                        <div className="w-full h-full bg-black"></div>
                    </video>

                    <p className="text-gray-600 mb-12">
                        Met Charla kun je eenvoudig spreken terwijl de applicatie je woorden real-time omzet naar tekst. Dit maakt communicatie toegankelijker voor iedereen, of je nu een gesprek wilt vastleggen of assistentie nodig hebt bij het communiceren.
                    </p>

                    <div className="bg-zinc-800 p-12 mb-12">
                        <p className="text-center text-xl text-white">TECHNISCHE IMPLEMENTATIE</p>
                    </div>

                    <p className="text-gray-600 mb-24">
                        De applicatie is gebouwd met Next.js voor optimale prestaties en gebruikt een krachtige Speech-to-Text API voor nauwkeurige transcripties. De interface is ontworpen met gebruiksgemak als prioriteit, waardoor iedereen direct aan de slag kan.
                    </p>
                </div>
            </section>

            <section id="otherprojects" className="bg-black py-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-white">OTHER PROJECTS</h2>
                    <ChevronDown className="mx-auto text-white" size={24} />
                </div>

                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div 
                            key={i} 
                            className={`bg-zinc-800 rounded-lg overflow-hidden cursor-pointer hover:bg-zinc-700 transition-colors border border-white/40`}
                            onClick={() => {
                                if (i === 1) {
                                    window.location.href = '/Threejs'
                                }
                            }}
                        >
                            <div className="h-48 relative">
                                {i === 1 ? (
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover"
                                    >
                                        <source src="/portfoliogif3.mp4" type="video/mp4" />
                                    </video>
                                ) : (
                                    <div className="h-full bg-black/50" />
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-sm font-mono text-white">Sphere using Three.js</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
