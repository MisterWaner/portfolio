import React from 'react';

export default function Footer() {
    return (
        <footer className='mt-20 h-28 flex items-center justify-center'>
            <div className='container mx-auto py-4 text-center'>
                <p className='text-sm text-gray-500'>
                    &copy; {new Date().getFullYear()} Mon Portfolio - Erwan Soulas. Tous droits
                    réservés.
                </p>
            </div>
        </footer>
    );
}
