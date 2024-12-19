'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Home, Code2, CloudCog, FileText, Settings2, HeadphonesIcon, LogOut } from 'lucide-react'
import Image from 'next/image'
import type { SidebarLink } from '../types/repository'
import Logo from '../asserts/logo.png'

const links: SidebarLink[] = [
    { name: 'Repositories', icon: Home, href: '#', isActive: true },
    { name: 'AI Code Review', icon: Code2, href: '#' },
    { name: 'Cloud Security', icon: CloudCog, href: '#' },
    { name: 'How to Use', icon: FileText, href: '#' },
    { name: 'Settings', icon: Settings2, href: '#' },
]

export function Sidebar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


    return (
        <div className="flex max-h-screen bg-gray-50">
            <div className="md:hidden fixed  top-0 left-0 right-0 z-20  bg-white border-b">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-2">
                        <Image src={Logo} alt="CodeAnt AI" width={28} height={28} />
                        <span className="text-xl text-gray-700 font-light">CodeAnt AI</span>
                    </div>
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        className="text-gray-700 hover:text-gray-900 focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>
            <br />
            <aside className={`fixed inset-x-0 top-[64px] bottom-0 transform ${isMobileMenuOpen ? 'translate-y-0 h-fit items-center' : '-translate-y-full'} md:translate-y-0 transition duration-200 ease-in-out md:relative md:top-0 md:flex md:w-64 flex-col z-10 bg-white border-r overflow-y-auto`}>
                <div className="p-4 border-b hidden md:block">
                    <div className="flex items-center gap-2">
                        <Image src={Logo} alt="CodeAnt AI" width={32} height={32} />
                        <span className="text-xl text-gray-700 font-light">CodeAnt AI</span>
                    </div>
                    <div className="mt-4 flex justify-between  relative border p-2 rounded-lg text-gray-700">
                        <p className='text-sm'>Utkarash</p>
                        <ChevronDown />
                    </div>
                </div>
                <nav className="flex-1 p-2 md:flex flex-col lg:justify-between">
                    <div>
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${link.isActive
                                    ? 'bg-blue-600 hover:text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                } hover:text-blue-600`}
                        >
                            <link.icon />
                            {link.name}
                        </Link>
                    ))}
                    </div>
                    <div>
                        <Link
                            href="#"
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600`}
                        >
                            <HeadphonesIcon />
                            {"Support"}
                        </Link><Link
                            href="#"
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600`}
                        >
                            <LogOut />
                            {"Logout"}
                        </Link>
                    </div>
                </nav>
            </aside>
        </div>
    )
}
