'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocationHash } from '@/hooks/useLocationHash';

export interface NavigationLinkProps {
    href: string;
    children: React.ReactNode;
    onClick: () => void;
}

export default function NavigationLink({
    href,
    children,
    onClick,
}: NavigationLinkProps) {
    const pathname = usePathname();
    const currentHash = useLocationHash();

    const [localHash, setLocalHash] = useState<string>(currentHash);

    useEffect(() => {
        setLocalHash(currentHash);
    }, [currentHash]);

    const fullPath = `${pathname}${localHash}`;

    const isHashLink = href.startsWith('/#');

    const handleClick = () => {
        if (isHashLink) {
            const newHash = href.replace('/', '');
            setLocalHash(newHash);
            history.replaceState(null, '', newHash);
            window.dispatchEvent(new HashChangeEvent('hashchange'));
        } else if (href === '/') {
            setLocalHash('');
            history.replaceState(null, '', '/');
            window.dispatchEvent(new HashChangeEvent('hashchange'));
        }
    };

    const isActive =
        (href === '/' && pathname === '/' && localHash === '') ||
        fullPath === href;

    return (
        <Link
            href={href}
            onClick={() => {
                handleClick();
                onClick();
            }}
            className={`font-poppins w-full flex items-center justify-center px-4 text-lg my-2 dark:hover:text-cyan-neon ${
                isActive ? 'dark link-neon-active' : ''
            } link-neon`}
        >
            {children}
        </Link>
    );
}
