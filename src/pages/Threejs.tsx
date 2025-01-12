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

export default function ThreeJS() {
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
                    <source src="/portfoliogif3.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 -ml-10">
                    <h1 className="text-7xl font-bold text-white">THREE.JS</h1>
                </div>
            </section>

            <section id="threejs-content" className="bg-white text-black">
                <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                    <h2 className="text-4xl font-bold mb-8">USING THREE JS FOR A SPHERE</h2>
                    <p className="text-lg mb-8">
                        Voor dit project heb ik gebruik gemaakt van THREE.js om een sphere te kunnen laten roteren. Op deze pagina hier een uitleg over.
                    </p>

                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-[400px] object-cover mb-12"
                    >
                        <source src="/portfoliogif3.mp4" type="video/mp4" />
                    </video>

                    <p className="text-gray-600 mb-12">
                        Aenean condimentum lacus et libero imperdiet, id malesuada ante vehicula. Sed dignissim elit suscipit consequat iaculis. Fusce in mauris sit amet felis lobortis lobortis.
                    </p>

                    <div className="bg-zinc-800 p-12 mb-12">
                        <p className="text-center text-xl text-white">FOTO VAN CODE</p>
                    </div>

                    <p className="text-gray-600 mb-24">
                        Aenean condimentum lacus et libero imperdiet, id malesuada ante vehicula. Sed dignissim elit suscipit consequat iaculis. Fusce in mauris sit amet felis lobortis lobortis.
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
                            className="bg-zinc-800 rounded-lg overflow-hidden cursor-pointer hover:bg-zinc-700 transition-colors border border-white/40"
                            onClick={() => {
                                if (i === 1) {
                                    window.location.href = '/Charla'
                                } else if (i === 2) {
                                    window.location.href = '/Upendo'
                                }
                            }}
                        >
                            <div className="h-48 bg-black/50" />
                            <div className="p-4">
                                <h3 className="text-sm font-mono text-white">
                                    {i === 1 ? 'Charla' : i === 2 ? 'Upendo' : 'Sphere using Three.js'}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
