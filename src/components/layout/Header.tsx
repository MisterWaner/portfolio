'use client';
import { useState } from 'react';
import NavigationLink from '../ui/NavigationLink';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className='fixed top-0 left-0 h-16 bg-background z-50 w-full'>
            <div className='h-full flex items-center justify-between px-4 md:px-8'>
                <p className=''>LOGO</p>
                <button className='fixed top-4 right-4 md:hidden'>
                    {isMenuOpen ? (
                        <X className='cursor-pointer' onClick={toggleMenu} />
                    ) : (
                        <Menu className='cursor-pointer' onClick={toggleMenu} />
                    )}
                </button>
            </div>
            <nav
                className={`fixed top-16 z-50 h-[calc(100%-4rem)] flex flex-col items-center justify-center w-full bg-background -translate-x-[101%] transition-transform duration-300 md:flex-row  md:h-16 md:top-0 md:border-0 md:translate-x-0 md:transition-none ${
                    isMenuOpen ? 'translate-x-0' : ''
                }`}
            >
                <NavigationLink onClick={closeMenu} href='/#hero'>
                    Home
                </NavigationLink>
                <NavigationLink onClick={closeMenu} href='/#about'>
                    About
                </NavigationLink>
                <NavigationLink onClick={closeMenu} href='/#projects'>
                    Projects
                </NavigationLink>
                <NavigationLink onClick={closeMenu} href='/#contact'>
                    Contact
                </NavigationLink>
            </nav>
        </header>
    );
}
