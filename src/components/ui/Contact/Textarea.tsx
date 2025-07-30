import React from 'react';

interface TextareaProps {
    className?: string;
    id?: string;
}

export default function Textarea({ className, id }: TextareaProps) {
    return (
        <div>
            <label className='block text-sm mb-2'>Message</label>
            <textarea
                id={id}
                placeholder='Votre message'
                className={`border text-sm p-2 rounded w-full ${className}`}
                rows={4}
            />
        </div>
    );
}
