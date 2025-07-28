import React from 'react';

interface TextareaProps {
    className?: string;
}

export default function Textarea({ className }: TextareaProps) {
    return (
        <div>
            <label className='block text-sm mb-2'>Message</label>
            <textarea
                placeholder='Votre message'
                className={`border text-sm p-2 rounded w-full ${className}`}
                rows={4}
            />
        </div>
    );
}
