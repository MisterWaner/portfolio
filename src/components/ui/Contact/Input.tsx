import React from 'react';

interface InputProps {
    id?: string;
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
    id
}: InputProps) {
    return (
        <>
            <label className='block text-sm mb-2'>{label}</label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={`border p-2 text-sm rounded w-full focus:border-cyan-400 ${className}`}
            />
        </>
    );
}
