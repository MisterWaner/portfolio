import React, { forwardRef } from 'react';

type TextareaProps = {
    label: string;
    placeholder?: string;
    className?: string;
    id?: string;
    error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, id, label, error, placeholder, ...rest }, ref) => {
        return (
            <div>
                <label htmlFor={id} className='block text-sm mb-2'>
                    {label}
                </label>
                <textarea
                    ref={ref}
                    id={id}
                    placeholder={placeholder}
                    className={`border text-sm p-2 rounded w-full ${className} ${
                        error ? 'border-red-500' : ''
                    }`}
                    {...rest}
                />
                {error && <p className='text-red-500 text-sm'>{error}</p>}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';
export default Textarea;
