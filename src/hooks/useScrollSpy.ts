import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 0) {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = 0; i < sectionIds.length; i++) {
                const current = document.getElementById(sectionIds[i]);
                const next = document.getElementById(sectionIds[i + 1]);

                if (!current) continue;

                const currentTop = current.offsetTop - offset;
                const nextTop = next ? next.offsetTop - offset : Infinity;

                if (scrollPosition >= currentTop && scrollPosition < nextTop) {
                    setActiveId(sectionIds[i]);
                    return;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return activeId;
}
