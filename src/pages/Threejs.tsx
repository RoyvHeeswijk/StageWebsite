'use client'

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
                        <NavItem text="ROY v HEESWIJK" href="/index" />
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
                if (Math.abs(window.scrollY - offset) > 50) {
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
            scrollTimeout = setTimeout(handleScroll, 50)
        }

        window.addEventListener('scroll', throttledScroll)
        return () => window.removeEventListener('scroll', throttledScroll)
    }, [])

    return (
        <main className="w-full">
            <div className="fixed top-0 w-full z-50">
                <Navbar />
            </div>
            <section className="min-h-screen flex flex-col items-center justify-center relative bg-black">
                <h1 className="text-7xl font-bold mb-12 text-white">THREE JS</h1>
                <div className="w-full h-[400px] bg-black/50" />
            </section>

            <section className="max-w-4xl mx-auto px-6 py-24">
                <h2 className="text-4xl font-bold mb-8">USING THREE JS FOR A SPHERE</h2>
                <p className="text-lg mb-8">
                    Voor dit project heb ik gebruik gemaakt van THREE.js om een sphere te kunnen laten roteren. Op deze pagina hier een uitleg over.
                </p>

                <div className="w-full h-[400px] bg-black mb-12" />

                <p className="text-gray-400 mb-12">
                    Aenean condimentum lacus et libero imperdiet, id malesuada ante vehicula. Sed dignissim elit suscipit consequat iaculis. Fusce in mauris sit amet felis lobortis lobortis.
                </p>

                <div className="bg-zinc-800 p-12 mb-12">
                    <p className="text-center text-xl">FOTO VAN CODE</p>
                </div>

                <p className="text-gray-400 mb-24">
                    Aenean condimentum lacus et libero imperdiet, id malesuada ante vehicula. Sed dignissim elit suscipit consequat iaculis. Fusce in mauris sit amet felis lobortis lobortis.
                </p>
            </section>

            <section id="otherprojects" className="bg-black py-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-white">OTHER PROJECTS</h2>
                    <ChevronDown className="mx-auto text-white" size={24} />
                </div>

                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-zinc-800 rounded-lg overflow-hidden">
                            <div className="h-48 bg-black/50" />
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
