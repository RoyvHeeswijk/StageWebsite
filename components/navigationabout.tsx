'use client'

import { ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface NavItemProps {
    text: string
    href: string
}

function NavItem({ text, href }: NavItemProps) {
    const router = useRouter()

    return (
        <div
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => {
                const element = document.querySelector(href)
                element?.scrollIntoView({ behavior: 'smooth' })
            }}
        >
            <span className="text-2xl font-bold mb-2 text-black">{text}</span>
            <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-1 text-black" />
        </div>
    )
}

export default function Navigation() {
    return (
        <div className="flex justify-center gap-12 py-8 bg-white">
         
            <NavItem text="ABOUT ME" href="#about" />
        </div>
    )
}