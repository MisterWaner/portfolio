import React from 'react';

interface InputProps {
    label: string;
    placeholder?: string;
    type?: string;
    className?: string;
}

export default function Input({
    label,
    placeholder,
    type,
    className,
}: InputProps) {
    return (
        <>
            <label className='block text-sm mb-2'>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className={`border p-2 text-sm rounded w-full focus:border-cyan-400 ${className}`}
            />
        </>
    );
}
