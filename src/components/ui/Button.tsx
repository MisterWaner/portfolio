interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
    return (
        <button
            className={`${className} button`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
