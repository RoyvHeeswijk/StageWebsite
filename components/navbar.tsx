'use client'

import { useState, useEffect } from 'react'

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
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="text-xl font-bold">
                        Roy v Heeswijk
                    </div>
                    <div className="flex space-x-8">
                        <NavItem text="HOME" href="#home" /> 
                    
                        <NavItem text="PROJECTS" href="#projects" />
                        <NavItem text="ABOUT ME" href="#about" />
                    </div>
                </div>
            </div>
        </nav>
    )
}


