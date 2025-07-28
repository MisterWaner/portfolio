interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, onClick, className, type }: ButtonProps) {
    return (
        <button
            className={`${className} button`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    );
}
