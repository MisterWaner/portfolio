import React, { forwardRef } from 'react';

type InputProps = {
    id?: string;
    label: string;
    placeholder?: string;
    type?: string;
    className?: string;
    error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, placeholder, type, className, id, error, ...rest }, ref) => {
        return (
            <>
                <label htmlFor={id} className='block text-sm mb-2'>
                    {label}
                </label>
                <input
                    ref={ref}
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className={`border p-2 text-sm rounded w-full focus:border-cyan-400 ${
                        error ? 'border-red-500' : ''
                    } ${className || ''}`}
                    {...rest}
                />
                {error && <p className='text-red-500 text-sm'>{error}</p>}
            </>
        );
    }
);

Input.displayName = 'Input';
export default Input;
