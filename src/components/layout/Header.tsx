'use client';
import { useState } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import ToggleThemeBtn from '../ui/ToggleThemeBtn';
import NavigationLink from '../ui/NavigationLink';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sectionData = [
        {
            title: 'Accueil',
            id: 'accueil',
        },
        {
            title: 'À propos',
            id: 'a-propos',
        },
        {
            title: 'Mes projets',
            id: 'projets',
        },
        {
            title: 'Contact',
            id: 'contact',
        },
    ];
    const sectionIds = sectionData.map((section) => section.id);

    const activeId = useScrollSpy(sectionIds);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function closeMenu() {
        setIsMenuOpen(false);
    }

    function handleClick(id: string) {
        const element = document.getElementById(id);
        const header = document.querySelector('header');
        const headerOffset = header ? header.getBoundingClientRect().height : 0;
        
        if (element) {
            const elementPosition =
                element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
            closeMenu();
        }
    }

    return (
        <header className='fixed top-0 left-0 h-16 bg-background z-50 w-full'>
            <div className='h-full flex items-center justify-between px-4 md:px-8'>
                <ToggleThemeBtn />
                <button className='fixed top-4 right-4 md:hidden'>
                    {isMenuOpen ? (
                        <X className='cursor-pointer' onClick={toggleMenu} />
                    ) : (
                        <Menu className='cursor-pointer' onClick={toggleMenu} />
                    )}
                </button>
            </div>
            <nav
                className={`fixed top-14 z-50 h-[calc(100%-3.5rem)] flex flex-col items-center justify-center w-full bg-background -translate-x-[101%] transition-transform duration-300 md:flex-row md:right-0 md:w-3/4 md:h-16 md:top-0 md:border-0 md:translate-x-0 md:transition-none ${
                    isMenuOpen ? 'translate-x-0' : ''
                }`}
            >
                {sectionData.map((section) => (
                    <NavigationLink
                        href={`#${section.id}`}
                        className={`transition-colors duration-200 ${
                            activeId === section.id ? 'link-neon-active' : ''
                        }`}
                        key={section.id}
                        onClick={() => handleClick(section.id)}
                    >
                        {section.title}
                    </NavigationLink>
                ))}
            </nav>
        </header>
    );
}
