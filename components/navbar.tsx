'use client'

import { useEffect, useState } from 'react'

interface NavItemProps {
    text: string
    href: string
}

function NavItem({ text, href }: NavItemProps) {
    return (
        <div
            className="cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => {
                const element = document.querySelector(href)
                element?.scrollIntoView({ behavior: 'smooth' })
            }}
        >
            <span className="text-lg font-bold">{text}</span>
        </div>
    )
}

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className="sticky top-0 bg-transparent">
            <div className={`px-8 transition-all duration-300 ${isScrolled ? 'w-full' : 'w-1/2'}`}>
                <div className="flex justify-between items-center h-16">
              
                    <div className="flex gap-8 ml-8">
                        <NavItem text="ROY v HEESWIJK" href="#home" />
                        <NavItem text="PROJECTS" href="#projects" />
                        <NavItem text="ABOUT ME" href="#about" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
