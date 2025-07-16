import NavigationLink from '../ui/NavigationLink';
import { Menu, X } from 'lucide-react';

export default function Header() {

    return (
        <header className='bg-slate-600/20 md:bg-transparent'>
            <button className='fixed top-4 right-4 z-50 md:hidden'>
                <X className='cursor-pointer' />
                <Menu className='cursor-pointer hidden' />
            </button>
            <nav className='flex flex-col items-center w-full mt-10 mb-8 border-b border-gray-300 md:flex-row md:border-0'>
                <NavigationLink href='/'>Home</NavigationLink>
                <NavigationLink href='/#about'>About</NavigationLink>
                <NavigationLink href='/#projects'>Projects</NavigationLink>
                <NavigationLink href='/#contact'>Contact</NavigationLink>
            </nav>
        </header>
    );
}
