import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ToggleThemeBtn() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className='cursor-pointer p-2 fixed top-4 left-4 z-50'
        >
            {theme === 'dark' ? (
                <Sun className='text-yellow-500' />
            ) : (
                <Moon className='text-gray-800' />
            )}
        </button>
    );
}
