'use client'
import { useState, useEffect } from 'react';

export function useLocationHash(): string {
    const [hash, setHash] = useState<string>('');

    useEffect(() => {
        function handleHashChange() {
            setTimeout(() => {
                setHash(window.location.hash || '');
            }, 0);
        }
        handleHashChange(); // Set initial hash

        window.addEventListener('hashchange', handleHashChange);
        window.addEventListener('popstate', handleHashChange); // Handle back/forward navigation
        window.addEventListener('click', handleHashChange); // Handle clicks that may change the hash
        
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            window.removeEventListener('popstate', handleHashChange);
            window.removeEventListener('click', handleHashChange);
        };
    }, []);

    return hash;
}