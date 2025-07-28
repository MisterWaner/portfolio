import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[]) {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [headerOffset, setHeaderOffset] = useState(0);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const header = document.querySelector('header');
        if (header) {
            setHeaderOffset(header.getBoundingClientRect().height);
        }
    }, []);

    useEffect(() => {
        if (headerOffset === 0) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY + headerOffset + 1;

            for (let i = 0; i < sectionIds.length; i++) {
                const current = document.getElementById(sectionIds[i]);
                const next = document.getElementById(sectionIds[i + 1]);

                if (!current) continue;

                const currentTop = current.offsetTop - headerOffset;
                const nextTop = next ? next.offsetTop - headerOffset : Infinity;

                if (scrollPosition >= currentTop && scrollPosition < nextTop) {
                    setActiveId(sectionIds[i]);
                    return;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, headerOffset]);

    return activeId;
}
